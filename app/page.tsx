import Image from 'next/image'
import Header from '@/components/header'
import { Button } from '@/components/button'

export default async function Home () {
  'use client'

  return (
    <div className="page max-w-3xl pt-10 lg:p-24 mx-auto"
         style={{ maxWidth: '800px' }}>

      <Header className="mb-4"></Header>

      <div className="sections space-y-4">
        <div className="pr-px pl-px">
          <div className="px-12">
            <Image src="/top.png" width={300} height={200} alt="Balkan Express"
                   className={'w-full'}
                   priority={true}/>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="h-1.5 w-72 shrink-0 bg-dessert-500/0"/>
          </div>
          <div className="p-6">
            <div
              className="mt-1 font-display px-12 text-dessert-500 text-3xl text-center leading-tight tracking-wider">
              We’re MAARTEN <img src="martin.png" className="inline w-7" alt=""/>, HIDDE <img className="inline w-7"
              src="hitmeister.png" alt=""/> AND TYCHO <img className="inline w-7" src="prototyco.png" alt=""/>.
              <br/>
              <br/>
              AND WE’RE DOING A ROADTRIP from Germany to Georgia*
            </div>
          </div>
          <div className="mt-3">
            <iframe src="https://www.google.com/maps/d/embed?mid=1eBvLtDy8atfmT-EqunBurDf_KhfFYaM&ehbc=2E312F" width="100%" height="480"></iframe>
            {/*<div className="h-[438px] w-96 bg-center bg-cover opacity-20"*/}
            {/*     style={{ backgroundImage: 'url(\'/chart.png\')' }}/>*/}
          </div>
          <div className="p-6">
            <h1
              className="mt-2.5 whitespace-nowrap text-dessert-500 text-3xl text-center tracking-wider">
              10.000 KILOMETERS
            </h1>
            <p className="mt-3.5 text-dessert-500 text-center leading-normal">
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
        </div>
        <div className="space-y-9">
          <div>
            <div
              className="space-y-2.5 bg-midnight-800 py-5 text-dessert-500 text-center">
              <h1 className="whitespace-nowrap text-3xl px-4 tracking-wider">
                SUPPORTING FRIENDS
              </h1>
              <p className="whitespace-nowrap leading-normal overflow-hidden">
                Melanie Kranenburg
                Melanie Kranenburg
                Melanie Kranenburg
                Melanie Kranenburg
                Melanie Kranenburg
                Melanie Kranenburg
                Melanie Kranenburg
                Melanie Kranenburg
              </p>
            </div>
            <div className="h-6 w-[615px]"/>
          </div>
          <div className="flex justify-center">
            <div className="bg-midnight-500 p-7">
              <div className="">
                <div className="flex justify-center pr-1 pb-2">
                  <div className="h-44 w-64 shrink-0 bg-center bg-cover shadow"
                       style={{ backgroundImage: 'url(\'/nogps.png\')' }}/>
                </div>
              </div>
              <h1
                className="mt-2.5 whitespace-nowrap text-dessert-500 text-3xl text-center tracking-wider">
                NO HIGHWAYS, NO GPS
              </h1>
              <p
                className="mt-3.5 text-dessert-500 text-center leading-normal">
                We succeeded on doing that for 20 minutes because our phone
                was empty in France. So now we do the same, but for 15 days.
              </p>
              <div className="w-full flex">
                <Button className={"mt-4 mx-auto"} filled={false}>test</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<Form/>*/}


    </div>
  )
}
