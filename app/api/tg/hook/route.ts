import { NextResponse } from 'next/server'
import { telegramBot } from '@/lib/telegram'

export async function POST (request: Request) {
  telegramBot.processUpdate(await request.json())

  await new Promise(resolve => setTimeout(() => {
    console.log("one tick?")
    resolve(true)
  }, 0))

  return new NextResponse('OK')
}
