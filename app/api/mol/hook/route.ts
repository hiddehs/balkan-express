import { NextResponse } from 'next/server'
import { mollie } from '@/lib/mollie'
import { supabase } from '@/lib/supabase'
import { kv } from '@vercel/kv'
import { telegramBot } from '@/lib/telegram'

export async function POST (request: Request) {
  const data = (await request.formData())
  const payment = await mollie.payments.get(data.get('id')?.toString() ?? '')
  if (payment.status === 'paid') {

    console.log(`Payment ${payment.id} paid!`)

    const { data: donation } = await supabase.from('donations').
      select().eq('payment_id', payment.id)
    if (donation && donation.length > 0) {
      const chats = await kv.smembers('tg.subscription.donations')
      for (const chat of chats) {
        await telegramBot.sendMessage(chat,
          `🎉 Donation of €${donation[0].amount} for *${donation[0].type}* received from *${donation[0].locale}*!`,
          { parse_mode: 'Markdown' })
      }
    }
  }

  return new NextResponse('OK')
}
