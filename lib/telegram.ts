import TelegramBot from 'node-telegram-bot-api'
import { kv } from '@vercel/kv'

if (!process.env.TELEGRAM_BOT) {
  throw new Error('Please provide TELEGRAM_TOKEN to continue')
}

const createTelegramBot = (token: string) => {
  console.log("Creating Telegram Bot")
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
            ],
          ],
        },
      })
  })

  telegramBot.onText(/\/unsubscribe/, async (m) => {
    console.log(`Unsubscribing ${m.chat.id}`)
    await kv.srem('tg.subscription.donations', m.chat.id)
    await telegramBot.sendMessage(m.chat.id, "Unsubscribed",
      { parse_mode: 'Markdown' })
    return
  })

  const subscribeToDonations = async (m: TelegramBot.Message | null): Promise<string> => {
    if (!m) return ''
    console.log(`Subscribing ${m.chat.id} to donations`)
    if (await kv.sismember('tg.subscription.donations', m.chat.id)) {
      return 'Already subscribed'
    }
    kv.sadd('tg.subscription.donations', m.chat.id)
    return 'Subscribed to donations 💸'
  }

  telegramBot.onText(/\/donations/, async (m) => {
    await telegramBot.sendMessage(m.chat.id, await subscribeToDonations(m),
      { parse_mode: 'Markdown' })
    console.log('donation text handler done')
  })
  telegramBot.on('callback_query', async (cb) => {
    console.log(`[${cb.id}] Callback Query`)
    if (cb.data === '/donations') await telegramBot.answerCallbackQuery(cb.id,
      { text: await subscribeToDonations(cb.message ?? null) })
  })

  telegramBot.on('message', (m) => {
    console.log(
      `[${m.message_id}] Message from ${m.chat.first_name} ${m.chat.id}`)
  })

  return telegramBot
}
export const telegramBot = createTelegramBot(process.env.TELEGRAM_BOT)


