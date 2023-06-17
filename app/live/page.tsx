import { Metadata } from 'next'
import Image from 'next/image'
import InstaFeed from '@/components/InstaFeed'

export const metadata: Metadata = {
  title: 'Live Updates',
}
export default async function Live () {

  return (
    <div className="sections space-y-6 flex flex-col">
      <div className="px-4 text-center">
        <Image src="/follow us.png" alt="Balkan Express" width={290} height={180}
               className="mx-auto"
        />
        <h1 className="text-3xl mt-4">FOLLOW OUR TRIP LIVE</h1>
      </div>

      <InstaFeed/>

    </div>
  )
}
