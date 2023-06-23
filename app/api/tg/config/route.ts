import { telegramBot } from '@/lib/telegram'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  await telegramBot.setWebHook(request.url.includes('localhost')
    ? 'https://c7a1-217-123-13-172.eu.ngrok.io/api/tg/hook'
    : request.url.replace('config', 'hook'), {})

  await telegramBot.setMyCommands([
    { command: 'subscribe', description: 'Subscribe on location updates' },
    { command: 'unsubscribe', description: 'Unsubscribe on all updates' },
    { command: 'donations', description: 'Subscribe on donations' },
    { command: 'friends', description: 'Get to know our friends' }])

  return NextResponse.json(await telegramBot.getWebHookInfo())
}
