import Image from 'next/image'
import Form from '@/app/donate/donate'

export default async function Home () {
  'use client'

  return (
    <div className="page flex flex-col items-center justify-between p-24">
      <Image src="/logo.png" width={215} height={170} alt="Balkan Express"
             className={'w-[24rem]'}
             priority={true}/>
      <Form/>
    </div>
  )
}
