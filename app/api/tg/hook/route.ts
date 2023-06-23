import { NextResponse } from 'next/server'
import { telegramBot } from '@/lib/telegram'

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function POST (request: Request) {
  telegramBot.processUpdate(await request.json())
  // forever done with vercel cpu event cycles
  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(true)
    }, 10)
  })
  return new NextResponse('OK')
}
