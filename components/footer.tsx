'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavLink } from '@/types/balkan'
import Link from 'next/link'

interface FooterProps {
  // children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = React.memo(
  (props: FooterProps) => {

    const pathname = usePathname()
    const links: NavLink[] = [
      { label: 'The Trip', href: '/' },
      { label: 'Live Updates', href: '/live' },
      { label: 'Support Us', href: '/support' },
      { label: 'Contact Us', href: '/contact' }
    ]

    return (
      <footer
        className="space-y-1 flex flex-col w-full bg-midnight-800 pt-9 pb-10 items-center">
        <Image src="/foot-logo.png" width={300} height={170}
               alt="Balkan Express"
               className={'w-[12rem]'}
               priority={true}/>
        <div
          className="flex max-w-sm text-center justify-center items-center flex-wrap w-full px-5 py-6">
          {links.map(l => {
            const active = pathname === (l.href)
            return (<Link href={l.href} key={l.href}
                          target={l.href.startsWith('http')
                            ? '_blank'
                            : undefined}
                          className={`uppercase hover:text-dessert-200 leading-none p-2 whitespace-nowrap text-dessert-500 text-lg text-center tracking-wider ${active
                            ? 'text-dessert-500'
                            : 'text-dessert-500/90'}`}>
              {l.label}
            </Link>)
          })}

        </div>
        <div className="text-center text-xs font-mono text-dessert-800/20 hover:text-dessert-500">Balkan Express Tour © 2023 – <Link target="_blank" className="underline" href={"https://github.com/hiddehs/balkan-express"}>Github</Link> </div>
      </footer>
    )
  },
)

Footer.displayName = 'Rectangle25'
