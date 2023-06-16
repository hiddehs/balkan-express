import React, { memo } from 'react'

interface ButtonProps {
  children: React.ReactNode,
  filled: Boolean,
  className?: String
}

export const Button: React.FC<ButtonProps> = memo(
  function Button (props: ButtonProps) {
    return (
      <div
        className={`whitespace-nowrap border border-dessert-500 inline-block transition duration-100 cursor-pointer rounded-full p-4 px-24 text-center ${props.filled
          ? 'bg-dessert-800 text-midnight-800 hover:text-dessert-500 active:bg-midnight-800 hover:bg-midnight-500'
          : 'hover:text-midnight-800 hover:bg-dessert-500 active:bg-dessert-200'}
          ${props.className}`}>
        {props.children}
      </div>
    )
  })
