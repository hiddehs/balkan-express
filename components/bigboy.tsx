import React from 'react'
import Link from 'next/link'

interface BigboyProps {
  description: React.ReactNode,
  logo: React.ReactNode,
  className?: string,
  href: string
}

export function BigBoy ({ description, logo, className, href }: BigboyProps) {
  return (<Link href={href} target={'_blank'}
                className={`${className} hover:bg-midnight-800/50 duration-100 transition p-6 md:rounded-md bg-midnight-800 gap-4 flex flex-col text-sm`}>
    <div className="w-full h-10 flex items-center flex-shrink-0">
      {logo}
    </div>
    <div className="text-dessert-500 leading-normal">
      {description}
    </div>
  </Link>)
}
