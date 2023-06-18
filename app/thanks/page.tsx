'use server'
import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import { Button } from '@/components/button'
import Confetti from '@/components/confetti'

export default async function Page ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams && searchParams['session_id']
    ? searchParams['session_id']
    : null
  if (!id) {
    return
  }
  const session = await stripe.checkout.sessions.retrieve(id.toString())

  return (
    <div
      className="page flex z-20 flex-col items-center justify-between p-4 md:p-24 text-center">
      <Image src="/support-us-header.png" alt="Balkan Express" width={290}
             height={180}
             className="mx-auto w-full max-w-sm"
      />
      <h1
        className="text-3xl mt-4 mb-2 font-bold uppercase tracking-widest w-full break-words">Thank
        you
        for your donation {session?.customer_email}!</h1>
      <Button href="https://instagram.com/balkanexpress2023">Follow our
        journey!</Button>
      <Confetti/>
    </div>
  )
}
