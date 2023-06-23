import TelegramBot from 'node-telegram-bot-api'
import { kv } from '@vercel/kv'
import { supabase } from '@/lib/supabase'
import EventEmitter from 'eventemitter3'

if (!process.env.TELEGRAM_BOT) {
  throw new Error('Please provide TELEGRAM_TOKEN to continue')
}
const emitter = new EventEmitter()

const createTelegramBot = (token: string) => {
  console.log('Creating Telegram Bot')
  const telegramBot = new TelegramBot(token,
    { polling: false })
  telegramBot.onText(/\/start/, async (m) => {
    console.log(`Start messsage from ${m.chat.id}`)
    await telegramBot.sendMessage(m.chat.id,
      'Welcome to the Tiny Disco Bot 🚙', {
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: 'Sub to Donations',
                callback_data: '/donations',
              },
              {
                text: '➕ Add friend',
                callback_data: '/add_friend',
              },
            ],
          ],
        },
      })
    emitter.emit('handle')

  })

  telegramBot.onText(/\/unsubscribe/, async (m) => {
    console.log(`Unsubscribing ${m.chat.id}`)
    await kv.srem('tg.subscription.donations', m.chat.id)
    await telegramBot.sendMessage(m.chat.id,
      `Unsubscribed ${m.from?.first_name ?? m.from?.username}`,
      { parse_mode: 'Markdown' })
    emitter.emit('handle')

    return
  })

  const subscribeToDonations = async (m: TelegramBot.Message | null): Promise<string> => {
    if (!m) return ''
    console.log(`Subscribing ${m.chat.id} to donations and friends`)
    if (await kv.sismember('tg.subscription.donations', m.chat.id)) {
      return 'Already subscribed'
    }
    kv.sadd('tg.subscription.donations', m.chat.id)
    kv.sadd('tg.subscription.friends', m.chat.id)
    return `${m.chat.first_name} is now subscribed to donations 💸`
  }

  telegramBot.onText(/\/donations/, async (m) => {
    await telegramBot.sendMessage(m.chat.id, await subscribeToDonations(m),
      { parse_mode: 'Markdown' })
    console.log('donation text handler done')
    emitter.emit('handle')

  })
  telegramBot.onText(/\/friends/, async (m) => {
    const friends = (await supabase.from('friends').select())
    await telegramBot.sendMessage(m.chat.id,
      '*These ppl are our friends:*\n' +
      friends.data?.map(f => `#${f.id} ${f.name}`).join('\n') ?? 'no friends',
      { parse_mode: 'Markdown' })
    emitter.emit('handle')

  })
  telegramBot.on('callback_query', async (cb) => {
    console.log(`[${cb.id}] Callback Query`)
    if (cb.data === '/donations') await telegramBot.answerCallbackQuery(cb.id,
      { text: await subscribeToDonations(cb.message ?? null) })
    if (cb.data === '/add_friend') {
      console.log(cb)
      await telegramBot.answerCallbackQuery(cb.id,
        { text: 'Lets make friends' })
      if (!cb.message?.chat.id) return
      const message = await telegramBot.sendMessage(cb.message?.chat.id,
        'What is the name of our new friend?', {
          reply_markup: {
            force_reply: true,
            selective: false,
          },
        })
    }
    emitter.emit('handle')
  })

  telegramBot.on('message', async (m) => {
    console.log(
      `[${m.message_id}] Message from ${m.chat.first_name} ${m.chat.id}`)
    if (m.reply_to_message?.text === 'What is the name of our new friend?') {
      console.log(`Adding new friend! ${m.text}`)
      await supabase.from('friends').insert({ name: m.text })

      const chats = await kv.smembers('tg.subscription.friends')
      await telegramBot.sendMessage(
        m.chat.id,
        `Friend ${m.text} is now part of the club!`,
        {
          reply_to_message_id: m.message_id,
        })
      for (const chatId of chats) {
        await telegramBot.sendMessage(
          chatId,
          `Friend ${m.text} is now part of the club!`,
        )
      }
    }
    emitter.emit('handle')
  })

  return telegramBot
}
export const telegramBot = createTelegramBot(process.env.TELEGRAM_BOT)
export const botEmitter = emitter


