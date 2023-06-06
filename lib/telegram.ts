import TelegramBot from 'node-telegram-bot-api'
import { kv } from '@vercel/kv'

if (!process.env.TELEGRAM_BOT) {
  throw new Error('Please provide TELEGRAM_TOKEN to continue')
}
export const telegramBot = new TelegramBot(process.env.TELEGRAM_BOT,
  { polling: false })


telegramBot.onText(/\/start/, async (m) => {
  const reply = await telegramBot.sendMessage(m.chat.id,
    'Welcome to the Tiny Disco Bot 🚙', {
      reply_markup: {

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
  return
})

const subscribeToDonations = async (m: TelegramBot.Message | null): Promise<string> => {
  if (!m) return ''
  console.log(`Subscribing ${m.chat.id} to donations`)
  if (await kv.sismember('tg.subscription.donations', m.chat.id)) {
    return 'Already subscribed'
  }
  await kv.sadd('tg.subscription.donations', m.chat.id)
  return 'Subscribed to donations 💸'
}

telegramBot.onText(/\/donations/, async (m) => {
  await telegramBot.sendMessage(m.chat.id, await subscribeToDonations(m),
    { parse_mode: 'Markdown' })
  return
})
telegramBot.on('callback_query', async (cb) => {
  if (cb.data === '/donations') await telegramBot.answerCallbackQuery(cb.id,
    { text: await subscribeToDonations(cb.message ?? null) })
})
