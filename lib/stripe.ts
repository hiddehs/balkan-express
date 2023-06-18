import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Please provide STRIPE_SECRET_KEY env')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,
  { apiVersion: '2022-11-15' })

