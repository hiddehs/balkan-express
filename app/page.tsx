import Image from 'next/image'
import Form from '@/app/donate/donate'
import { Menu } from '@/components/menu'
import Logo from '@/components/logo'
import Header from '@/components/header'

export default async function Home () {
  'use client'

  return (
    <div className="page max-w-3xl pt-10 lg:p-24 mx-auto" style={{ maxWidth: '900px' }}>

      <Header className='mb-4'></Header>

      <div className="sections space-y-4">
        <div className="pr-px pl-px">
          <div className='px-12'>
            <Image src="/top.png" width={300} height={200} alt="Balkan Express"
                   className={'w-full'}
                   priority={true}/>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="h-1.5 w-72 shrink-0 bg-dessert-500/0" />
          </div>
          <div className="p-6">
            <div className="mt-1 font-display space-x-60 text-dessert-500 text-3xl text-center leading-tight tracking-wider">
              We’re MAARTEN ◯, HIDDE ◯ AND TYCHO ◯.
              <br />
              <br />
              AND WE’RE DOING A ROADTRIP from Germany to Georgia*
            </div>
          </div>
          <div className="mt-3">
            <div className="h-[438px] w-96 bg-center bg-cover opacity-20" style={{backgroundImage: 'url(\'/chart.png\')'}}/>
          </div>
          <div className="p-6">
            <h1 className="mt-2.5 whitespace-nowrap text-dessert-500 text-3xl text-center tracking-wider">
              10.000 KILOMETERS
            </h1>
            <p className="mt-3.5 text-dessert-500 text-center leading-normal">
              Putting al our trust in the old Volvo we bought from a random guy
              in Brabant.
              <br />
              <br />
              *The beautiful country, not the U.S. state.
            </p>
            <div className="mt-3 flex justify-center text-midnight-500 text-center font-semibold leading-relaxed">
              <div className="whitespace-nowrap rounded-full border-dessert-500 bg-dessert-500 px-16 pt-5 pb-3 border">
                Follow @olofexpress
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-9">
          <div>
            <div className="space-y-2.5 bg-midnight-800 py-5 pr-14 pl-16 text-dessert-500 text-center">
              <h1 className="ml-1 whitespace-nowrap text-3xl tracking-wider">
                SUPPORTING FRIENDS
              </h1>
              <p className="ml-28 whitespace-nowrap leading-normal">
                Melanie Kranenburg
              </p>
            </div>
            <div className="h-6 w-[615px]" />
          </div>
          <div className="flex justify-center">
            <div className="bg-midnight-500 p-7">
              <div className="ml-3">
                <div className="flex justify-center pr-1 pb-2">
                  <div className="h-44 w-64 shrink-0 bg-center bg-cover shadow" style={{backgroundImage: 'url(\'/nogps.png\')'}}/>
                </div>
              </div>
              <h1 className="mt-2.5 ml-8 whitespace-nowrap text-dessert-500 text-3xl text-center tracking-wider">
                NO HIGHWAYS, NO GPS
              </h1>
              <p className="mt-3.5 ml-2.5 text-dessert-500 text-center leading-normal">
                We succeeded on doing that for 20 minutes because our phone
                was empty in France. So now we do the same, but for 15 days.
              </p>
              <div className="mt-2.5 flex justify-center text-dessert-500 text-center font-semibold leading-relaxed">
                <div className="ml-3 whitespace-nowrap rounded-full border-dessert-500 px-24 pt-5 pb-3 border">
                  See our iternary
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<Form/>*/}


    </div>
  )
}
