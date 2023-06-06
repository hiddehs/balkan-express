import { telegramBot } from '@/lib/telegram'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  await telegramBot.setWebHook(request.url.includes('localhost')
    ? 'https://4204-217-123-13-172.eu.ngrok.io/api/tg/hook'
    : request.url.replace('config', 'hook'), {})

  await telegramBot.setMyCommands([
    { command: 'subscribe', description: 'Subscribe on location updates' },
    { command: 'unsubscribe', description: 'Unsubscribe on all updates' },
    { command: 'donations', description: 'Subscribe on donations' }])

  // telegramBot.processUpdate(await request.json())
  return NextResponse.json(await telegramBot.getWebHookInfo())
}
