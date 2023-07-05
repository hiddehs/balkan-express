'use server'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { supabase } from '@/lib/supabase'
import Negotiator from 'negotiator'
import { stripe } from '@/lib/stripe'
import { Stripe } from 'stripe'
import openai from '@/lib/openai'

export async function generateDavinciNames (email: string): Promise<string[]> {
  const name = email.split('@')[0]
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `You are an aspirational comedian and a very good art director, we have people sponsoring our car. They put their names on the car. Can you come up with different variation of their name, or semi-relevant other names to suggest to them that they can put as a sticker on the car? The car is going on a big road trip journey.
Seed words: ${name}
Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation. Make sure to absolutely not generate more than 5 unique names.`,
    temperature: 0.4,
    max_tokens: 120,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })

  try {
    if (response.data.choices.length > 0) {
      console.log(response.data.choices)
      const names = JSON.parse(response.data.choices[0].text).names
      if (names) {
        return names
      }
    }
  } catch (e) {
    console.error(e)
  }
  return []

}

export async function handleSubmit (data: FormData) {

  const host = headers().get('host')
  const locale = new Negotiator({
    headers: {
      'accept-language': headers().
        get('accept-language') ?? undefined,
    },
  }).languages()[0]
  console.debug('Creating payment')
//
//   --success-url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}" \
//   --cancel-url="https://example.com/cancel" \
//   --mode=payment \
//   -d "line_items[0][quantity]"=1 \
//   -d "line_items[0][price_data][currency]"="eur" \
//   -d "line_items[0][price_data][unit_amount]"=20045 \

// -d "line_items[0][price_data][product_data][name]"="Balkan Express Donation" \
  const invoiceCreaton: Stripe.Checkout.SessionCreateParams.InvoiceCreation | undefined = data.get(
    'type') === 'business' ? {
    enabled: true,
    invoice_data: {
      account_tax_ids: [
        process.env.VERCEL_ENV === 'production'
          ? 'atxi_1NL56OHWPU0OaEfM99nT5C0z'
          : 'atxi_1NL58vHWPU0OaEfMeMawBAeu'],
    },
  } : undefined

  const payment = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: `https://${host}/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `https://${host}/support`,
    customer_email: data.get('email')?.toString(),
    payment_intent_data: {
      receipt_email: data.get('email')?.toString(),
    },
    invoice_creation: invoiceCreaton,
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

  console.debug('Creating donation')
  const { data: donation, error } = await supabase.from('donations').insert({
    amount: Number.parseInt(data.get('amount')?.toString() ?? '0'),
    payment_id: payment.id,
    type: data.get('type')?.toString() ?? 'default',
    name: data.get('name')?.toString() ?? 'no name',
    email: payment.customer_email,
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
