import { NextResponse } from 'next/server'
import { telegramBot } from '@/lib/telegram'

export async function POST (request: Request) {
  telegramBot.processUpdate(await request.json())

  await new Promise(resolve => setTimeout(() => {
    resolve(true)
  }, 2000))

  return new NextResponse('OK')
}
