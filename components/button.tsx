import React, { memo } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode,
  filled?: boolean,
  className?: string,
  href: string
}

export const Button: React.FC<ButtonProps> = memo(
  function Button (props: ButtonProps) {
    return (
      <Link href={props.href}
            target={props.href.startsWith('http') ? '_blank' : undefined}
            className={`whitespace-nowrap border border-dessert-500 inline-block transition duration-100 cursor-pointer rounded-full p-4 px-14 max-w-full text-center ${props.filled
              ? 'bg-dessert-800 text-midnight-800 hover:text-dessert-500 active:bg-midnight-800 hover:bg-midnight-500'
              : 'hover:text-midnight-800 hover:bg-dessert-500 active:bg-dessert-200'}
          ${props.className ?? 'mt-4 mx-auto'}`}>
        {props.children}
      </Link>
    )
  })
