import { NextResponse } from 'next/server'
import { telegramBot } from '@/lib/telegram'

export async function POST(request: Request) {
  telegramBot.processUpdate(await request.json())
  return new NextResponse("OK");
}
