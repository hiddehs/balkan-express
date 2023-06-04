'use server'
import createMollieClient from '@mollie/api-client'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'

export async function handleSubmit (data: FormData) {
  const mollieClient = createMollieClient(
    { apiKey: process.env.MOLLIE_API_KEY })

  const host = headers().get('host')
  console.debug('Creating payment')
  const payment = await mollieClient.payments.create({
    amount: {
      value: `${data.get('amount')?.toString() ?? 0}.00`,
      currency: 'EUR',
    },
    description: `Balkan Express Donation of €${data.get('amount')},-`,
    redirectUrl: `https://${host}/thanks`,
  })
  cookies().set('order', payment.id)
  console.info(`Created payment ${payment.id}`)
  redirect(payment._links.checkout?.href.toString() ??
    'https://balkan-express.nl/#payment_failure')
}
