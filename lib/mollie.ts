import createMollieClient from '@mollie/api-client'

if (!process.env.MOLLIE_API_KEY) {
  throw new Error('Please provide Mollie API Key to continue')
}
export const mollie = createMollieClient(
  { apiKey: process.env.MOLLIE_API_KEY.toString() })
