import Image from 'next/image'
import Header from '@/components/header'
import { Button } from '@/components/button'

export default async function Home () {
  'use client'

  return (
    <div className="page max-w-3xl pt-10 lg:p-24 mx-auto"
         style={{ maxWidth: '800px' }}>

      <Header className="mb-4"></Header>

      <div className="sections space-y-6 flex flex-col">
        <div className="px-12">
          <Image src="/top.png" width={300} height={200} alt="Balkan Express"
                 className={'w-full'}
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
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1eBvLtDy8atfmT-EqunBurDf_KhfFYaM&ehbc=2E312F"
            width="100%" height="480"></iframe>
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
            <Button className={'mx-auto mt-4'} filled={true}>
              Follow @olofexpress
            </Button>
          </div>
        </div>
        <div
          className="space-y-2.5 bg-midnight-800 py-5 text-center">
          <h1 className="whitespace-nowrap text-3xl px-4 tracking-wider">
            SUPPORTING FRIENDS
          </h1>
          <p className="whitespace-nowrap leading-normal overflow-hidden">
            Jan Paul Beukema
            Stef van Maarten
            Melanie Kranenburg
            Josie Koloskie
          </p>
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
            was empty in France. So now we do the same, but for 15 days.
          </p>
          <div className="w-full flex">
            <Button>See our
              iternary</Button>
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
            Support our tiny team! From Montenegro to Istanbul. We’ll
            be sending out postcards and collecting souvenirs.
          </p>
          <div className="w-full flex"><Button> See support levels</Button>
          </div>

        </div>
        <div className="py-6 text-center bg-midnight-800">
          <div className="font-display text-3xl px-4">
            OUR BIG BOY SPONSORS
          </div>

          <Image src="/logos.png" width={500} height={40} alt="Balkan Express"
                 className={'mt-6 md:min-w-fit min-w-full mx-auto w-auto !max-w-[initial]'}
                 style={{ minHeight: '25px', maxHeight: '30px' }}
          />
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
              We’ll distribute this for good causes donations to the
              following causes:
            </p>
            <ul className="ml-9 list-disc">
              <li>33.4% Humanitarian aid and civil rights in Georgia</li>
              <li>33.3% Teelbal Cancer Research in Germany</li>
              <li>33.3% Mental health care in Albania</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4"></div>
    </div>
  )
}
