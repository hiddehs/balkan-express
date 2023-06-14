import Image from 'next/image'

export default function Logo () {
  return (<Image src="/logo.png" width={215} height={170} alt="Balkan Express"
                 className={'w-[12rem]'}
                 priority={true}/>)
}
