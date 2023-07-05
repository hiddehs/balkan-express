import React from 'react'

interface BigboyProps {
  description: React.ReactNode,
  logo: React.ReactNode,
  className?: string,
  href: string
}

export function BigBoy ({ description, logo, className, href }: BigboyProps) {
  return (<a href={href} target={'_blank'}
             className={`${className} hover:bg-midnight-800/50 duration-100 transition p-4 rounded-md bg-midnight-800 gap-4 flex flex-col text-sm`}>
    <div className="w-full h-16 flex items-center flex-shrink-0">
      {logo}
    </div>
    <div className="text-dessert-500 leading-normal">
      {description}
    </div>
  </a>)
}
