'use client'

import { useMemo, useState, useTransition } from 'react'
import { handleSubmit } from './actions'
import Image from 'next/image'
import * as Slider from '@radix-ui/react-slider'
import { Input } from '@/components/input'

export default function Donate () {
  const [max, setMax] = useState(400)
  const min = 10
  const [amount, setAmount] = useState(min)
  const [emailVisible, setEmailVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [type, setType] = useState('personal')
  let [isPending, startTransition] = useTransition()

  const tiers = useMemo<JSX.Element>(() => {

    if (type === 'business') {
      if (amount > 999) {
        return (<div>
          <h1 className="text-3xl">Gold</h1>
          <ul>
            <li>Huge logo on our car (biggest logo, promised!)
            </li>
            <li> We name our car after your company, with a pun</li>
            <li> Your Instagram handle in our bio, the whole trip!</li>
            <li>
              5 Instagram posts
            </li>
            <li> 5 Instagram stories</li>
          </ul>
        </div>)
      }
      if (amount > 400) {
        return (<div>
          {amount > 600
            ? <div
              className="bg-dessert-200/20 inline-block px-4 py-2 rounded text-base mb-4">Tip:
              also
              check out our Gold package, starting from €999</div>
            : ''}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-3xl mb-4">Influencer Package</h1>
              <ul>
                <li><b>Small logo</b> on our car – 30 x 30 cm</li>
                <li>If your company does anything that can help our trip, <b>we’ll
                  make and share</b> videos of it (i.e. cleaning company
                  cleaning our car,
                  mechanic
                </li>
                <li>tools or tent that we use)</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl">Big Logo Package</h1>
              <ul>
                <li><b>Big logo</b> on our car – 60 x 30 cm</li>
                <li>We’ll name you with your logo in</li>
                <li>2 Instagram posts and in</li>
                <li>3 Instagram stories</li>
              </ul>
            </div>
          </div>
        </div>)
      }
      if (amount > 125) {
        return (<div>

          <h1 className="text-3xl">Bronze</h1>
          <p>
            <ul>
              <li><b>Small logo</b> on our car 30x30 cm</li>
              <li>We’ll name you with your logo in
                2 Instagram posts
              </li>
            </ul>
          </p>

        </div>)
      }
      return (<div>
        Our first business package is Bronze, starting from €125
      </div>)
    }

    if (amount < 25) {

      return (
        <div>
          <h1>
            You will get: eternal thanks!
          </h1>  <p>
          We see every name and will cheers on you. 🥰 Your will be name on this
          website! Just scroll down to see it.
        </p>
        </div>
      )
    }
    if (amount < 69) {
      return (
        <div>

          <h1>
            Get a postcard! €15+</h1>
          <p>
            From balkan beans to a delicious dolma. This will be the average
            cost
            of
            a meal.
            You will get:
          </p>
          <ul>
            <li>🥘 A picture of us, eating your meal.</li>
            <li>🔒 Access to our secret instagram for behind the scenes reels &
              videos
            </li>
            <li>📮A physical postcard from a country on our route</li>
          </ul>
        </div>
      )
    }
    if (amount < 150) {
      return (<div>

        <h1>
          Your name on our car! €35+
        </h1>

        <p>
          Slurpy slurp! We will sticker your name (or anything you wish) on our
          car.
          <ul>

            <li>🚐 Your name on the car</li>
            <li>🥘 A picture of us, eating your meal.</li>
            <li>🔒 Access to our secret instagram for behind the scenes reels &
              videos
            </li>
            <li>📮A physical postcard from a country on our route</li>
            <li>⛽️ A picture of us and the gas station.</li>
          </ul>
        </p>
      </div>)
    }
    if (amount < 250) {
      return (<div>
        <h1>
          Become an all-star! €150+
        </h1>
        <p>
          🙌 The postcard and behind the scenes but we’ll also we’ll FaceTime you
          during the trip with updates and bring back a one-off unique souvenir.
        </p>
        <ul>

          <li>🚐 Your name on the car</li>
          <li>🥘 A picture of us, eating your meal.</li>
          <li>🔒 Access to our secret instagram for behind the scenes reels &
            videos
          </li>
          <li>📮A physical postcard from a country on our route</li>
          <li>⛽️ A picture of us and the gas station.</li>
        </ul>
      </div>)
    }
    return (<div>
      <h1>
        Become a legend! €250+
      </h1>
      <p>

        ⭐️ All of the above. Plus we’ll return with 5 souvenirs. Wine from
        Georgia (Saperavi), Turkish Tea (Caykur), Albanian Fig Jam, German
        Marzipan and Croatian Olive Oil..
        <ul>

          <li>🚐 Your name on the car</li>
          <li>🥘 A picture of us, eating your meal.</li>
          <li>🔒 Access to our secret instagram for behind the scenes reels &
            videos
          </li>
          <li>📮A physical postcard from a country on our route</li>
          <li>⛽️ A picture of us and the gas station.</li>
        </ul>

      </p>
    </div>)

    // return [amount > 50 ? '0' : '1']
  }, [type, amount])

  return (
    <form action={(data) => startTransition(async () => {
      await handleSubmit(data)
    })} onClick={() => setEmailVisible(true)}
          className={`lg:rounded-2xl bg-midnight-800 select-none text-center w-full p-6 py-10 md:p-10 mt-8 md:rounded-lg inline-flex flex-col gap-4  ${isPending
            ? 'opacity-40'
            : 'opacity-100'} `}>

      <Image src={'/beer.png'} alt={'beer'} className="mx-auto mb-2" width={98}
             height={500}></Image>

      <div
        className="font-black text-center font-display text-6xl">€{amount}
      </div>


      <Slider.Root
        onValueChange={(e) => setAmount(e[0])}
        className="relative py-10 flex items-center select-none touch-none w-full h-6"
        defaultValue={[20]}
        value={[amount]}
        name={'amount'}
        max={max}
        min={min}
        step={1}
      >
        <Slider.Track
          className="bg-midnight-900 relative grow rounded-full h-4">
          <Slider.Range
            className="absolute bg-midnight-500 rounded-full h-full"/>
        </Slider.Track>
        <Slider.Thumb
          className="block rounded-full hover:bg-dessert-200 cursor-grab p-3 bg-dessert-500 focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          aria-label="Amount"
        >
          {/*className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none"*/}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0C11.64 0 11.29 0.0995312 11 0.269531C10.7 0.449531 10.4495 0.7 10.2695 1C10.0995 1.29 10 1.64 10 2V4V7V10V11V17.5C7.448 16.201 6.289 16 5 16C3.504 16 2.00995 16.5773 2.00195 18.4863L6.5 20.5L9.65625 23.6562C11.1562 25.1562 13.1925 26 15.3145 26H22C24.209 26 26 24.209 26 22V12C26 10.895 25.104 10 24 10C23.2 10 22.5153 10.4714 22.1953 11.1504C22.0613 11.0604 22 11 22 11C22 9.895 21.104 9 20 9C18.896 9 18 9.895 18 11V10C18 8.895 17.104 8 16 8C14.896 8 14 8.895 14 10V2C14 0.9 13.1 0 12 0ZM2.00195 18.4863H2V18.5C2 18.495 2.00195 18.4903 2.00195 18.4863ZM1.5 1C1.10218 1 0.720644 1.15804 0.43934 1.43934C0.158035 1.72064 0 2.10218 0 2.5C0 2.89782 0.158035 3.27936 0.43934 3.56066C0.720644 3.84196 1.10218 4 1.5 4C1.89782 4 2.27936 3.84196 2.56066 3.56066C2.84196 3.27936 3 2.89782 3 2.5C3 2.10218 2.84196 1.72064 2.56066 1.43934C2.27936 1.15804 1.89782 1 1.5 1ZM6.5 1C5.67 1 5 1.67 5 2.5C5 3.33 5.67 4 6.5 4H9V1H6.5Z"
              fill="#362F86"/>
          </svg>
        </Slider.Thumb>
      </Slider.Root>

      <div
        className="mx-auto prose prose-h1:text-3xl prose-invert text-dessert-500 prose-headings:text-dessert-500 prose-ul:list-inside leading-normal my-4 text-lg font-normal">
        {tiers}
      </div>
      <div
        className="type-selector select-none max-w-full rounded-2xl inline-flex gap-4 items-center justify-between font-display text-2xl md:text-3xl uppercase border-[5px] border-midnight-900 p-2 md:p-4">
        <div onClick={() => setType('personal')}
             className={`p-3 px-6 w-full transition duration-200 cursor-pointer hover:text-dessert-200 ${type ===
             'personal' ? 'text-dessert-500' : 'text-dessert-500/20'}`}>
          PERSONAL
        </div>
        <div onClick={() => {
          setType('business')
          setMax(1200)
        }}
             className={`p-3 px-6 w-full transition duration-200 cursor-pointer hover:text-dessert-200 ${type ===
             'business' ? 'text-dessert-500' : 'text-dessert-500/20'}`}>
          BUSINESS
        </div>
      </div>
      <input type="hidden" name="type" value={type}/>
      <Input name={'email'} required={true}
             onInput={(e) => setEmail(e.currentTarget.value)} type={'email'}
             className={`border-dessert-500 border-2 ring-dessert-500 transition duration-100 ${emailVisible
               ? 'opacity-100'
               : '!opacity-0 !h-0 overflow-hidden'}`}
             placeholder={'Your email address'}/>

      <button
        disabled={isPending}
        className={'hover:bg-dessert-200 transition duration-200 hover:shadow shadow-lg leading-none shadow-black/60 font-display text-2xl md:text-3xl bg-dessert-500 rounded-2xl py-8 px-4 tracking-widest font-bold text-midnight-800 uppercase'}
        type="submit">
        {isPending ? 'Loading' : 'Donate To The Boys!'}
      </button>
    </form>
  )

}
