import Image from 'next/image'
import { Button } from '@/components/button'
import { Metadata } from 'next'
import Friends from '@/components/friends'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home () {
  return (
    <div className="sections space-y-6 flex flex-col">
      <div className="px-12">
        <Image src="/top.png" width={300} height={200} alt="Balkan Express"
               className="max-w-xs mx-auto w-full"
               priority={true}/>
      </div>
      <div className="p-6">
        <div
          className="mt-1 font-display px-8 md:px-12 text-3xl text-center leading-tight tracking-wider">
          We’re MAARTEN <img src="martin.png" className="inline w-7"
                             alt=""/>, HIDDE <img className="inline w-7"
                                                  src="hitmeister.png"
                                                  alt=""/> AND TYCHO <img
          className="inline w-7" src="prototyco.png" alt=""/>.
          <br/>
          <br/>
          AND WE’RE DOING A ROADTRIP from Germany to Georgia*
        </div>
      </div>
      <div className="">
        {/*<iframe*/}
        {/*  src="https://www.google.com/maps/d/embed?mid=1eBvLtDy8atfmT-EqunBurDf_KhfFYaM&ehbc=2E312F"*/}
        {/*  width="100%" height="480"></iframe>*/}
        {/*<div className="h-[438px] w-96 bg-center bg-cover opacity-20"*/}
        {/*     style={{ backgroundImage: 'url(\'/chart.png\')' }}/>*/}
      </div>
      <div className="p-6">
        <h1
          className="mt-2.5 whitespace-nowrap text-3xl text-center tracking-wider">
          10.000 KILOMETERS
        </h1>
        <p className="mt-3.5 text-center leading-normal">
          Putting al our trust in the old Volvo we bought from a random guy
          in Brabant.
          <br/>
          *The beautiful country, not the U.S. state.
        </p>
        <div className="flex w-full">
          <Button href={'https://instagram.com/balkanexpress2023'}
                  className={'mx-auto mt-4'} filled={true}>
            Follow @balkanexpress2023
          </Button>
        </div>
      </div>
      <div
        className="space-y-2.5 md:rounded-2xl bg-midnight-800 py-5 text-center">
        <h1 className="whitespace-nowrap text-3xl px-4 tracking-wider">
          SUPPORTING FRIENDS
        </h1>
        <div className="whitespace-nowrap leading-normal overflow-hidden">
          <Friends/>
        </div>
      </div>
      <div className="bg-midnight-500 p-7">
        <div className="">
          <div className="flex justify-center pr-1 pb-2">
            <div className="h-44 w-64 shrink-0 bg-center bg-cover shadow"
                 style={{ backgroundImage: 'url(\'/nogps.png\')' }}/>
          </div>
        </div>
        <h1
          className="mt-2.5 whitespace-nowrap text-3xl text-center tracking-wider">
          NO HIGHWAYS, NO GPS
        </h1>
        <p
          className="mt-3.5 text-center leading-normal">
          We succeeded on doing that for 20 minutes because our phone
          was empty in France. So now we do the same, but for 24 days.
        </p>
        <div className="w-full flex">
          <Button href={'/live'}>See our
            itinerary</Button>
        </div>
      </div>
      <div className="px-4">
        <Image src="/us.png" alt="Balkan Express" width={290} height={180}
               className="mx-auto"
        />
        <h1
          className="mt-2.5 text-3xl text-center leading-tight tracking-wider">
          BECOME A TOUR SUPPORTER
        </h1>
        <p
          className="mt-3.5 text-center leading-normal">
          Support our tiny team! From the sunny balkan to the Iranian mountains
          at the border, from Utrecht to Georgia. We’ll
          be sending out postcards and collecting souvenirs.
        </p>
        <div className="w-full flex"><Button href={'/support'}> See support
          levels</Button>
        </div>

      </div>
      <div className="py-6 text-center  md:rounded-2xl bg-midnight-800">
        <div className="font-display text-3xl px-4">
          OUR BIG BOY SPONSORS
        </div>


        <div
          className="flex items-center justify-center flex-wrap gap-8 md:p-8 p-4 md:pb-0">
          <Image src={'breeze.svg'} alt={'breeze logo'} width={90}
                 height={15}></Image>


          <Image src={'uncode.svg'} alt={'uncode logo'} width={90}
                 height={20}></Image><Image src={'biyu.svg'} alt={'biyu logo'}
                                            width={90}
                                            height={20}></Image>
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <rect y="0.765625" width="30.5094" height="30.4687" rx="4.52356"
                  fill="url(#paint0_linear_105_346)"/>
            <rect x="6.31104" y="7.17683" width="18.0233" height="17.9993"
                  rx="8.99967" fill="url(#paint1_linear_105_346)"/>
            <path
              d="M48.6431 22.5H44.3169L39.0605 8.00699H42.7162L46.4151 18.8659H46.6314L50.2655 8.00699H53.8996L48.6431 22.5ZM58.3695 22.5H55.1248V8.00699H61.7872C62.9409 8.00699 63.9143 8.18004 64.7075 8.52614C65.5151 8.87224 66.1279 9.37697 66.5461 10.0403C66.9644 10.6893 67.1735 11.4824 67.1735 12.4198C67.1735 13.1985 67.0437 13.8763 66.7841 14.4531C66.5245 15.0155 66.1207 15.4626 65.5727 15.7943C65.0392 16.1115 64.3542 16.3134 63.5178 16.4V16.6163C64.1379 16.8037 64.6282 17.0849 64.9887 17.4599C65.3492 17.8348 65.6665 18.3035 65.9405 18.8659L67.7791 22.5H63.9936L62.2848 19.1471C62.0685 18.7289 61.8521 18.39 61.6358 18.1305C61.4339 17.8565 61.1816 17.6618 60.8787 17.5464C60.5903 17.4166 60.1865 17.3517 59.6674 17.3517H58.3695V22.5ZM58.3695 10.9272V14.6694H61.9387C62.703 14.6694 63.2293 14.5324 63.5178 14.2584C63.8062 13.9845 63.9504 13.4941 63.9504 12.7875C63.9504 12.0953 63.8062 11.6122 63.5178 11.3382C63.2293 11.0642 62.703 10.9272 61.9387 10.9272H58.3695ZM71.626 22.5H68.2515L73.5944 8.00699H78.3101L83.653 22.5H80.1271L77.0771 14.1287L76.0171 10.8623H75.8008L74.6976 14.1287L71.626 22.5ZM80.8193 19.2769H71.215V16.3783H80.8193V19.2769Z"
              fill="#FFECCF"/>
            <defs>
              <linearGradient id="paint0_linear_105_346" x1="17.0926"
                              y1="-0.335655" x2="0.0352206" y2="31.2534"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFECCF"/>
                <stop offset="1" stopColor="#EAEAEA"/>
              </linearGradient>
              <linearGradient id="paint1_linear_105_346" x1="24.3828"
                              y1="7.1285" x2="6.39521" y2="25.14"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#27216F"/>
                <stop offset="1" stopColor="#27216F"/>
              </linearGradient>
            </defs>
          </svg>
        </div>


        {/*<Image src="/logos.png" width={500} height={40} alt="Balkan Express"*/}
        {/*       className={'mt-6 md:min-w-fit mx-auto w-auto !max-w-[initial]'}*/}
        {/*       style={{ minHeight: '25px', maxHeight: '30px' }}*/}
        {/*/>*/}
      </div>
      <div className="flex justify-center">
        <div
          className="space-y-4 pr-1 leading-normal">
          <Image src="/sponsor.png" alt="Balkan Express" width={290}
                 height={180}
                 className="mx-auto"
          />
          <h1
            className="ml-4 text-3xl text-center leading-tight tracking-wider">
            €500 TO STOP <br/>
            ALL-THINGS-SHITTY
          </h1>
          <p className="ml-1 text-center">
            We’ll distribute this money to good causes along our route, to make
            a difference for the people we meet.
          </p>
        </div>
      </div>
    </div>
  )
}
