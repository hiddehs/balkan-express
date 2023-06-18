import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/button'
import Friends from '@/components/friends'

export const metadata: Metadata = {
  title: 'Support Us',
}
export default async function Support () {

  return (
    <div className="sections space-y-6 flex flex-col">
      <div className="px-8 py-8">
        <Image src="/support-us-header.png" alt="Balkan Express" width={290}
               height={180}
               className="mx-auto w-full max-w-sm"
        />
        <h1
          className="mt-2.5 text-3xl text-center leading-tight tracking-wider">
          THE PAGE WE HOPED YOU’D LAND ON: SUPPORTING US! </h1>
        <p
          className="mt-3.5 text-center leading-normal">
          Why Netflix if you can see us getting tired and celebrate our
          victories. Become part of our roadtrip soap.
        </p>
        <div className="w-full flex"><Button href={'/support'}> See support
          levels</Button>
        </div>

      </div>


      <div className="px-4">
        <h1
          className="text-3xl text-center leading-tight tracking-wider">
          BIG BOY SPONSORS </h1>
        <p
          className="mt-2 px-4 text-center leading-normal">
          From tents to tools, from euros to euphoria. Thanks to these guys.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-32 flex-shrink-0">
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
            <p className="text-dessert-500 leading-normal"> Powerful, autonomous
              and broadcast-ready Visual Radio software
              to help you supercharge your onair performance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 flex-shrink-0">

            </div>
            <p className="text-dessert-500 leading-normal">
              De grootste collectie van daktenten en accessoires van alle
              gerenommeerde merken in Europa.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 flex-shrink-0">

            </div>
            <p className="text-dessert-500 leading-normal">
              Founded by VacatureVia, in collaboration with GlideApps and
              WebFlow. That rhymes with... Shitshow!
            </p>
          </div>
        </div>


      </div>
      <div className="px-4">

        <h1
          className="text-3xl text-center leading-tight tracking-wider">
          SUPPORTING FRIENDS </h1>
        <div
          className="mt-2 px-4 text-center leading-normal">
          <Friends/>
          </div>

      </div>

    </div>
  )
}
