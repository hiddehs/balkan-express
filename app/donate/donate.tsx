'use client'

import { useEffect, useState, useTransition } from 'react'
import { handleSubmit } from './actions'
import Image from 'next/image'

export default function Donate () {
  const max = 500
  const min = 20
  const [amount, setAmount] = useState(min)
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [type, setType] = useState('personal')
  let [isPending, startTransition] = useTransition()

  useEffect(() => {
    setSliderWidth(document.querySelector('.slider')?.clientWidth ?? 100)
  }, [])

  return (
    <form action={(data) => startTransition(async () => {
      await handleSubmit(data)
    })}
          onMouseUp={() => setDragging(false)}
          className={`bg-midnight-800 select-none text-center w-full p-10 mt-8 md:rounded-lg inline-flex flex-col gap-4  ${isPending
            ? 'opacity-40'
            : 'opacity-100'} `}>

      <Image src={'/beer.png'} alt={'beer'} className="mx-auto" width={98}
             height={500}></Image>

      <div
        className="text-4xl font-black text-center font-display text-6xl">€{amount} +
      </div>

      <input type="range"
             onChange={(e) => setAmount(Number.parseInt(e.target.value))}
             value={amount} min={20}
             max={max} name="amount"/>


      <div className="max-w-sm mx-auto leading-normal my-4 text-lg font-normal">
        <p>
          You will get: eternal thanks!
        </p>
        <br/>
        <p>

          We see every name and will cheers on you. 🥰 Your will be name on this
          website! Just scroll down to see it.
        </p>
      </div>
      <pre>dragging {dragging}</pre>
      <div className="slider relative py-6 select-none"
           onMouseMove={(e) => {
             if (dragging) {
               console.log((e.pageX - dragStart) / sliderWidth)
               setAmount(Math.max(min, (Math.round(((e.pageX - dragStart) /
                   sliderWidth) *
                 max))))
             }
           }}
      >
        {amount}
        <div onMouseDown={(e) => {
          e.preventDefault()
          setDragStart(e.pageX)
          setDragging(true)
        }}
             id="thumb"
             style={{
               left: Math.round((amount - min) / max * sliderWidth) + 'px',
             }}
             className="rounded-full hover:bg-dessert-200 duration-100 transition-colors cursor-grab top-1/2 left-0 transform -translate-y-1/2 absolute inline-block p-4 bg-dessert-500">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0C11.64 0 11.29 0.0995312 11 0.269531C10.7 0.449531 10.4495 0.7 10.2695 1C10.0995 1.29 10 1.64 10 2V4V7V10V11V17.5C7.448 16.201 6.289 16 5 16C3.504 16 2.00995 16.5773 2.00195 18.4863L6.5 20.5L9.65625 23.6562C11.1562 25.1562 13.1925 26 15.3145 26H22C24.209 26 26 24.209 26 22V12C26 10.895 25.104 10 24 10C23.2 10 22.5153 10.4714 22.1953 11.1504C22.0613 11.0604 22 11 22 11C22 9.895 21.104 9 20 9C18.896 9 18 9.895 18 11V10C18 8.895 17.104 8 16 8C14.896 8 14 8.895 14 10V2C14 0.9 13.1 0 12 0ZM2.00195 18.4863H2V18.5C2 18.495 2.00195 18.4903 2.00195 18.4863ZM1.5 1C1.10218 1 0.720644 1.15804 0.43934 1.43934C0.158035 1.72064 0 2.10218 0 2.5C0 2.89782 0.158035 3.27936 0.43934 3.56066C0.720644 3.84196 1.10218 4 1.5 4C1.89782 4 2.27936 3.84196 2.56066 3.56066C2.84196 3.27936 3 2.89782 3 2.5C3 2.10218 2.84196 1.72064 2.56066 1.43934C2.27936 1.15804 1.89782 1 1.5 1ZM6.5 1C5.67 1 5 1.67 5 2.5C5 3.33 5.67 4 6.5 4H9V1H6.5Z"
              fill="#362F86"/>
          </svg>
        </div>
        <div
          className="track bg-midnight-900 select-none w-full h-5 rounded-full">

        </div>
      </div>

      <div
        className="type-selector select-none max-w-full rounded-2xl inline-flex gap-4 items-center justify-between font-display text-3xl uppercase border-[5px] border-midnight-900 p-4">
        <div onClick={() => setType('personal')}
             className={`p-3 px-6 w-full transition duration-200 cursor-pointer hover:text-dessert-200 ${type ===
             'personal' ? 'text-dessert-500' : 'text-dessert-500/20'}`}>
          PERSONAL
        </div>
        <div onClick={() => setType('business')}
             className={`p-3 px-6 w-full transition duration-200 cursor-pointer hover:text-dessert-200 ${type ===
             'business' ? 'text-dessert-500' : 'text-dessert-500/20'}`}>
          BUSINESS
        </div>
      </div>


      <button
        disabled={isPending}
        className={'shadow hover:bg-dessert-200 transition duration-200 font-display text-3xl bg-dessert-500 rounded-2xl py-8 px-4 tracking-widest font-bold text-midnight-800 uppercase'}
        type="submit">
        {isPending ? 'Loading' : 'Donate To The Boys!'}
      </button>
    </form>
  )

}
