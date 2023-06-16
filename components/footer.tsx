import React from 'react'
import Image from 'next/image'

interface FooterProps {
  // children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = React.memo(
  (props: FooterProps) => {
    return (
      <footer
        className="space-y-1 flex flex-col w-full bg-midnight-800 pt-9 pb-10 items-center">
        <Image src="/foot-logo.png" width={300} height={170}
               alt="Balkan Express"
               className={'w-[12rem]'}
               priority={true}/>
        <div
          className="flex max-w-sm text-center justify-center items-center flex-wrap w-full px-5 py-6">
          <div
            className="leading-none p-2 whitespace-nowrap text-dessert-500 text-lg text-center tracking-wider">
            LIVE UPDATES
          </div>
          <div
            className="leading-none p-2 whitespace-nowrap text-dessert-500 text-lg text-center tracking-wider">
            SUPPORT US
          </div>
          <div
            className="leading-none p-2 whitespace-nowrap text-dessert-500 text-lg text-center tracking-wider">
            THE TRIP
          </div>
          <div
            className="leading-none p-2 whitespace-nowrap text-dessert-500 text-lg text-center tracking-wider">
            FOLLOW US
          </div>
          <div
            className="leading-none p-2 whitespace-nowrap text-dessert-500 text-lg text-center tracking-wider">
            CONTACT US
          </div>
        </div>
      </footer>
    )
  },
)

Footer.displayName = 'Rectangle25'
