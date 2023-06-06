'use server'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { supabase } from '@/lib/supabase'
import { mollie } from '@/lib/mollie'
import Negotiator from 'negotiator'
import { kv } from '@vercel/kv'
import { telegramBot } from '@/lib/telegram'

export async function handleSubmit (data: FormData) {

  const host = headers().get('host')

  console.debug('Creating payment')
  const payment = await mollie.payments.create({
    amount: {
      value: `${data.get('amount')?.toString() ?? 0}.00`,
      currency: 'EUR',
    },
    webhookUrl: host?.includes('localhost')
      ? 'https://6eb2-217-123-13-172.eu.ngrok.io/api/mol/hook'
      : `https://${host}/api/mol/hook`,
    description: `Balkan Express Donation of €${data.get('amount')},-`,
    redirectUrl: `https://${host}/thanks`,
  })
  console.debug('Creating donation')
  const { data: donation, error } = await supabase.from('donations').insert({
    amount: Number.parseInt(payment.amount.value),
    payment_id: payment.id,
    type: 'default',
    locale: new Negotiator({
      headers: {
        'accept-language': headers().
          get('accept-language') ?? undefined,
      },
    }).languages()[0],
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
  redirect(payment._links.checkout?.href.toString() ??
    'https://balkan-express.nl/#payment_failure')
}
