import Logo from '@/components/logo'
import { Menu } from '@/components/menu'

export default function Header ({ className }: {className: string}) {
  return (<div className={`flex flex-col items-center gap-8 ${className}`}>
    <Logo/>
    <Menu/>
  </div>)
}

