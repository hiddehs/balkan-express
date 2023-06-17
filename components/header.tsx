import Logo from '@/components/logo'
import { Menu } from '@/components/menu'
import Link from 'next/link'

export default function Header ({ className }: {className: string}) {
  return (<div className={`flex flex-col items-center gap-8 ${className}`}>
   <Link href={'/'}>
     <Logo/>
   </Link>
    <Menu/>
  </div>)
}

