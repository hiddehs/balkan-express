'use server'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { supabase } from '@/lib/supabase'
import { mollie } from '@/lib/mollie'
import Negotiator from 'negotiator'

export async function handleSubmit (data: FormData) {

  const host = headers().get('host')

  console.debug('Creating payment')
  const payment = await mollie.payments.create({
    amount: {
      value: `${data.get('amount')?.toString() ?? 0}.00`,
      currency: 'EUR',
    },
    description: `Balkan Express Donation of €${data.get('amount')},-`,
    redirectUrl: `https://${host}/thanks`,
  })
  console.debug('Creating donation')
  const { data: donation, error } = await supabase.from('donations').insert({
    amount: data.get('amount'),
    payment_id: payment.id,
    type: 'default',
    locale: new Negotiator(headers()).languages()[0],
  }).select()
  if (error) {
    console.error(error)
    throw new Error(error.message)
  }
  if (!donation) {
    throw new Error('No donation created')
  }
  console.info(`Donation ${donation[0].id} created`)

  cookies().set('donation', donation[0].id)
  console.info(`Created payment ${payment.id}`)
  redirect(payment._links.checkout?.href.toString() ??
    'https://balkan-express.nl/#payment_failure')
}
