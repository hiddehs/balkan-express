import { NextResponse } from 'next/server'
import { messageHandler, telegramBot } from '@/lib/telegram'

export async function POST (request: Request) {
  await new Promise(async resolve => {
    telegramBot.on('message', async (m) => {
      try {
        await messageHandler(m)
      }catch (e){
        // prevent dangling promises
      }
      resolve(true)
    })
    telegramBot.processUpdate(await request.json())
  })
  return new NextResponse('OK')
}
