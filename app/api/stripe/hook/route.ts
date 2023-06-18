import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { StripeError } from '@stripe/stripe-js'
import { supabase } from '@/lib/supabase'
import { telegramBot } from '@/lib/telegram'
import { kv } from '@vercel/kv'
import { Stripe } from 'stripe'

if (!process.env.STRIPE_WEBHOOK_SIGKEY) {
  throw new Error('Please provide STRIPE_WEBHOOK_SIGKEY to continue')
}

const endpointSecret = process.env.STRIPE_WEBHOOK_SIGKEY

export async function POST (request: Request) {
  const sig = request.headers.get('stripe-signature')
  if (!sig) {
    return
  }
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent((await request.text()), sig,
      endpointSecret)
  } catch (err) {
    console.error(err)
    return new NextResponse(`Webhook Error: ${(err as StripeError).message}`, {
      status: 400,
    })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object as Stripe.Checkout.Session

      const { data: donation } = await supabase.from('donations').
        select().eq('payment_id', checkoutSessionCompleted.id)
      if (donation && donation.length > 0) {
        const chats = await kv.smembers('tg.subscription.donations')
        for (const chat of chats) {
          await telegramBot.sendMessage(chat,
            `🎉 Donation of €${donation[0].amount} for *${donation[0].type}* received from *${donation[0].locale}*!`,
            { parse_mode: 'Markdown' })
        }
      }
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }
  return new NextResponse('OK')
}
