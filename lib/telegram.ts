import TelegramBot from 'node-telegram-bot-api'
import { kv } from '@vercel/kv'

if (!process.env.TELEGRAM_BOT) {
  throw new Error('Please provide TELEGRAM_TOKEN to continue')
}
export const telegramBot = new TelegramBot(process.env.TELEGRAM_BOT,
  { polling: false })
