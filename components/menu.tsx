'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLink } from '@/lib/types'

interface Rectangle8Props {
  // children: React.ReactNode;
}

export const Menu: React.FC<Rectangle8Props> = React.memo(
  (props: Rectangle8Props) => {
    const pathname = usePathname()
    const links: NavLink[] = [
      { label: 'The Trip', href: '/' },
      { label: 'Live Updates', href: '/live' },
      { label: 'Support Us', href: '/support' }]
    return (
      <div
        className="flex w-full justify-center max-w-full lg:w-auto flex-wrap items-center gap-3 lg:rounded-2xl bg-midnight-800 md:px-6 px-2 py-5">

        {links.map(l => {
          const active = pathname === (l.href)
          return (<Link href={l.href} key={l.href}
                        className={`uppercase hover:text-dessert-200 whitespace-nowrap text-sm text-center font-bold tracking-wider ${active
                          ? 'text-dessert-500'
                          : 'text-dessert-500/50'}`}>
            {l.label}
          </Link>)
        })}
        <div className="bg-dessert-500 h-6 border-l"></div>
        <Link className='hover:opacity-80 transition duration-100' href={'https://www.instagram.com/balkanexpress2023/'} target="_blank"><svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M5.99863 2.30005C3.68323 2.30005 1.7998 4.18522 1.7998 6.50122V12.5012C1.7998 14.8166 3.68498 16.7 6.00098 16.7H12.001C14.3164 16.7 16.1998 14.8149 16.1998 12.4989V6.49888C16.1998 4.18348 14.3146 2.30005 11.9986 2.30005H5.99863ZM13.1998 4.70005C13.531 4.70005 13.7998 4.96885 13.7998 5.30005C13.7998 5.63125 13.531 5.90005 13.1998 5.90005C12.8686 5.90005 12.5998 5.63125 12.5998 5.30005C12.5998 4.96885 12.8686 4.70005 13.1998 4.70005ZM8.9998 5.90005C10.9852 5.90005 12.5998 7.51465 12.5998 9.50005C12.5998 11.4854 10.9852 13.1 8.9998 13.1C7.0144 13.1 5.3998 11.4854 5.3998 9.50005C5.3998 7.51465 7.0144 5.90005 8.9998 5.90005ZM8.9998 7.10005C8.36329 7.10005 7.75284 7.35291 7.30275 7.80299C6.85266 8.25308 6.5998 8.86353 6.5998 9.50005C6.5998 10.1366 6.85266 10.747 7.30275 11.1971C7.75284 11.6472 8.36329 11.9 8.9998 11.9C9.63632 11.9 10.2468 11.6472 10.6969 11.1971C11.1469 10.747 11.3998 10.1366 11.3998 9.50005C11.3998 8.86353 11.1469 8.25308 10.6969 7.80299C10.2468 7.35291 9.63632 7.10005 8.9998 7.10005Z"
            fill="#F7DBB2"
          />
        </svg></Link>
      </div>
    )
  },
)

Menu.displayName = 'Rectangle8'
