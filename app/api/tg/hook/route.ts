import { NextResponse } from 'next/server'
import { botEmitter, telegramBot } from '@/lib/telegram'

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function POST (request: Request) {
  telegramBot.processUpdate(await request.json())
  botEmitter.on("handled", ()=>{
    console.log("Handled something?")
  })
  // forever done with vercel cpu event cycles
  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(true)
    }, 50)
  })
  return new NextResponse('OK')
}
