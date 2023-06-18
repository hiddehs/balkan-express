'use server'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { supabase } from '@/lib/supabase'
import Negotiator from 'negotiator'
import { stripe } from '@/lib/stripe'

export async function handleSubmit (data: FormData) {

  const host = headers().get('host')
  const locale = new Negotiator({
    headers: {
      'accept-language': headers().
        get('accept-language') ?? undefined,
    },
  }).languages()[0]
  console.debug('Creating payment')
  console.log(data)
//
//   --success-url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}" \
//   --cancel-url="https://example.com/cancel" \
//   --mode=payment \
//   -d "line_items[0][quantity]"=1 \
//   -d "line_items[0][price_data][currency]"="eur" \
//   -d "line_items[0][price_data][unit_amount]"=20045 \
// -d "line_items[0][price_data][product_data][name]"="Balkan Express Donation" \

  const payment = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: `https://${host}/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `https://${host}/support`,
    customer_email: data.get("email")?.toString(),
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'eur',
          unit_amount: Number.parseInt(
            `${data.get('amount')?.toString() ?? 0}00`),
          product_data: {
            name: `Balkan Express Donation`,
          },
        },
      },
    ],
  })
  if (!payment.url) {
    console.log('Failed to create Stripe Checkout Session')
    console.debug(payment)
    return 'failed'
  }

  // const payment = await mollie.payments.create({
  //   amount: {
  //     value: `${data.get('amount')?.toString() ?? 0}.00`,
  //     currency: 'EUR',
  //   },
  //   webhookUrl: host?.includes('localhost')
  //     ? 'https://6eb2-217-123-13-172.eu.ngrok.io/api/mol/hook'
  //     : `https://${host}/api/mol/hook`,
  //   description: `Balkan Express Donation of €${data.get('amount')},-`,
  //   redirectUrl: `https://${host}/thanks`,
  // })
  console.debug('Creating donation')
  const { data: donation, error } = await supabase.from('donations').insert({
    amount: Number.parseInt(data.get('amount')?.toString() ?? '0'),
    payment_id: payment.id,
    type: 'default',
    email: payment.customer_email,
    name: null,
    locale: locale,
  }).select()
  if (error) {
    console.error(error)
    throw new Error(error.message)
  }
  if (!donation) {
    throw new Error('No donation created')
  }
  console.info(`Donation ${donation[0].id} created`)

  cookies().set('donation', donation[0].id.toString())
  console.info(`Created payment ${payment.id}`)
  redirect(payment.url.toString() ??
    'https://balkan-express.nl/#payment_failure')
}
