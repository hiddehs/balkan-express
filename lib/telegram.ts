import TelegramBot from 'node-telegram-bot-api'
import { kv } from '@vercel/kv'

if (!process.env.TELEGRAM_BOT) {
  throw new Error('Please provide TELEGRAM_TOKEN to continue')
}
export const telegramBot = new TelegramBot(process.env.TELEGRAM_BOT, {})

// telegramBot.comm

telegramBot.on('message', async (m) => {

  if (m.text?.startsWith('/')) {

    if (m.text?.startsWith('/unsubscribe')) {
      await kv.srem('tg.subscription.donations', m.chat.id)
      return
    }
    if (m.text?.startsWith('/donations')) {
      console.log(`Subscribing ${m.chat.id} to donations`)
      // await kv.del('tg.subscription.donations')
      if (await kv.sismember('tg.subscription.donations', m.chat.id)) {
        await telegramBot.sendMessage(m.chat.id, 'Already subscribed')
        return
      }
      await kv.sadd('tg.subscription.donations', m.chat.id)
      // console.log(await kv.lrange('tg.subscription.donations', 0, -1))
      await telegramBot.sendMessage(m.chat.id, 'Subscribed to donations 💸')
      return
    }

    await telegramBot.sendMessage(m.chat.id, 'I do not recognize that message')
    return
  }
})
