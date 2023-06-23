import { NextResponse } from 'next/server'
import { botEmitter, telegramBot } from '@/lib/telegram'
import { clearTimeout } from 'timers'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function POST (request: Request) {
  await new Promise(async resolve => {
    // forever done with vercel cpu event cycles
    const timeout = setTimeout(() => {
      console.warn("Bot process update timeout")
      resolve(true)
    }, 1000) // prevent dead request
    botEmitter.on('handle', () => {
      console.log("Bot update handle complete")
      clearTimeout(timeout)
      resolve(true)
    })
    telegramBot.processUpdate(await request.json())
  })
  return new NextResponse('OK')
}
