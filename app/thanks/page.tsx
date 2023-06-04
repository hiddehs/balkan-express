import Image from 'next/image'
import { cookies } from 'next/headers'

export default async function Page () {
  const id = cookies().get('order')?.value.toString()
  return (
    <div className="page flex flex-col items-center justify-between p-24">
      <Image src="/logo.png" width={215} height={170} alt="Balkan Express"
             className={'w-[24rem]'}
             priority={true}/>
      <h1
        className="text-4xl my-12 font-bold uppercase tracking-widest">Thanks {id}!</h1>

    </div>
  )
}
