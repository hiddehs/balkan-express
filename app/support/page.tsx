import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/button'
import Friends from '@/components/friends'
import Donate from '@/app/donate/donate'

export const metadata: Metadata = {
  title: 'Support Us',
}
export default async function Support () {

  return (
    <div className="sections space-y-8 flex flex-col">
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
      <Donate/>
      <div className="p-4">
        <h1
          className="text-3xl text-center leading-tight tracking-wider">
          BIG BOY SPONSORS </h1>
        <p
          className="mt-2 px-4 text-center leading-normal">
          From tents to tools, from euros to euphoria. Thanks to these guys.
        </p>

        <div className="mt-8 flex flex-col gap-4">

          {/*<div className="flex items-center gap-4">*/}
          {/*  <div className="w-32 flex-shrink-0">*/}
          {/*    <svg width="100" height="14" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*      <path fillRule="evenodd" clip-rule="evenodd" d="M0 6.24789V12.2628L2.54126 12.2588C3.93888 12.2564 5.40431 12.1805 5.79758 12.0896C7.59446 11.6752 9.14022 10.4426 9.96209 8.76882C10.3584 7.96212 10.415 7.64883 10.415 6.26372C10.415 4.89627 10.3544 4.55132 9.97009 3.73145C9.40218 2.51965 8.32935 1.44865 7.07188 0.837412C6.11137 0.370653 5.99338 0.354822 3.04119 0.294665L0 0.232841V6.24789ZM24.7386 0.47397C24.6944 0.589118 24.6781 3.27003 24.7023 6.43136L24.7461 12.1795L25.8709 12.2288L26.9957 12.2779L27.0029 10.3124L27.0099 8.34672L27.6756 7.59684C28.2147 6.98944 28.3698 6.89445 28.492 7.09692C28.5748 7.2344 29.3782 8.43421 30.2772 9.76317L31.9116 12.1795L33.2031 12.2281C34.1921 12.2654 34.4945 12.2248 34.4945 12.0548C34.4945 11.9327 33.4817 10.3397 32.2437 8.51486L29.9931 5.19689L30.619 4.52616C30.9634 4.15739 31.2845 3.81627 31.3329 3.76812C32.0109 3.09422 34.1613 0.55829 34.1613 0.43281C34.1613 0.333992 33.622 0.26467 32.8548 0.26467H31.5485L29.8969 2.05439C28.9887 3.03873 27.9662 4.14472 27.6248 4.51233L27.0041 5.18056L26.9999 2.72261L26.9957 0.26467H25.9074C25.1875 0.26467 24.7917 0.335492 24.7386 0.47397ZM35.2723 0.375819C35.2111 0.436809 35.1611 0.916233 35.1611 1.44115C35.1611 2.59263 35.1698 2.59763 37.1745 2.59763H38.6605V7.43787V12.2779L39.7854 12.2288L40.9102 12.1795L40.9544 7.39454L40.9987 2.60963L42.6208 2.56197L44.243 2.51431L44.2923 1.38949L44.3415 0.26467H39.8624C37.3989 0.26467 35.3332 0.314662 35.2723 0.375819ZM45.7366 0.470804C45.6916 0.587619 45.6748 3.27003 45.6989 6.43136L45.7428 12.1795H49.4088H53.0749V11.0963V10.0131L50.5337 9.96713L47.9924 9.92114V8.6805V7.43987L50.2004 7.39338L52.4084 7.34688V6.26372V5.18056L50.2004 5.13407L47.9924 5.08757L47.9921 3.80094L47.9917 2.51431L50.1917 2.56564C53.2437 2.63696 53.1854 2.66046 53.1244 1.38433L53.0749 0.34799L49.4465 0.302997C46.6255 0.268169 45.7999 0.305497 45.7366 0.470804ZM55.1579 6.26372V12.2628H56.2381H57.3183L57.3629 8.28057L57.4076 4.29853L60.2216 8.28057L63.0355 12.2628H64.1793H65.323V6.25606V0.249506L64.1982 0.298664L63.0734 0.34799L63.0285 4.25154L62.9837 8.15509L61.2315 5.66798C60.2676 4.30003 59.013 2.52681 58.4433 1.72744L57.4076 0.274002L56.2828 0.269336L55.1579 0.26467V6.26372ZM66.9339 0.375819C66.7419 0.567622 66.8131 2.18803 67.0227 2.39767C67.1495 2.52448 67.7888 2.59763 68.77 2.59763H70.317L70.3614 7.38854L70.4055 12.1795H71.4887H72.5718L72.616 7.38854L72.6603 2.59763H74.2074C75.0585 2.59763 75.826 2.52665 75.913 2.43983C76.0001 2.35317 76.046 1.82826 76.0148 1.27334L75.9583 0.26467H71.5017C69.0504 0.26467 66.9949 0.314662 66.9339 0.375819ZM80.5661 0.466305C80.5203 0.585619 80.5026 3.27003 80.5268 6.43136L80.5706 12.1795H81.6537H82.7369L82.8202 8.27474L82.9035 4.37002L85.3055 7.77482C86.6265 9.64752 87.8863 11.4234 88.1051 11.7212C88.4827 12.2351 88.5578 12.2628 89.5777 12.2628H90.6523V6.26372V0.26467H89.5722H88.492L88.4473 4.25071L88.4027 8.23674L87.2869 6.62533C86.6733 5.73897 85.4286 3.96408 84.5211 2.68095L82.8712 0.34799L81.7602 0.298664C80.9645 0.263337 80.6257 0.310996 80.5661 0.466305ZM93.2701 0.368653C93.1054 0.533294 93.1261 11.7975 93.2916 12.0581C93.3946 12.2204 94.1849 12.2596 96.6635 12.2248L99.9009 12.1795L99.9505 11.1379L100 10.0964H97.745H95.4899L95.4457 5.22222L95.4016 0.34799L94.3949 0.299331C93.8411 0.272502 93.3351 0.303664 93.2701 0.368653ZM14.1176 3.05073C13.6088 4.497 12.8433 6.69282 12.4164 7.93012C10.9228 12.2584 10.9956 12.0961 10.5483 12.0961C10.3255 12.0961 9.99808 12.1738 9.82078 12.2686C9.38601 12.5014 9.38601 13.3573 9.82078 13.5901C10.262 13.8262 23.3993 13.8262 23.8406 13.5901C24.0465 13.4797 24.1628 13.2414 24.1628 12.9293C24.1628 12.3987 23.7884 12.0961 23.132 12.0961C22.7744 12.0961 22.5974 11.6692 20.7304 6.30538L18.715 0.51463L16.8787 0.467804L15.0425 0.420812L14.1176 3.05073ZM6.08387 2.90842C8.68163 4.08856 8.89493 7.80414 6.45565 9.38623C5.82375 9.79599 5.56879 9.85049 4.04103 9.90231L2.33296 9.96014V6.27888V2.59763L3.87439 2.6013C5.00354 2.60397 5.59445 2.68612 6.08387 2.90842ZM16.664 7.8468V12.0961H15.1643C14.3394 12.0961 13.6645 12.063 13.6645 12.0225C13.6645 11.9818 14.1453 10.5759 14.7328 8.89797C15.3204 7.2199 15.9763 5.34087 16.1904 4.7223C16.4044 4.10373 16.5985 3.59748 16.6219 3.59748C16.645 3.59748 16.664 5.50967 16.664 7.8468ZM18.5839 7.78148C19.3604 10.017 19.996 11.9025 19.9963 11.9712C19.9965 12.0398 19.3219 12.0961 18.4971 12.0961H16.9973V7.81897C16.9973 5.46668 17.0366 3.58131 17.0846 3.6293C17.1328 3.6773 17.8073 5.54583 18.5839 7.78148ZM77.3066 9.81016C76.565 10.3796 76.4724 11.2766 77.0955 11.8542C77.8915 12.5919 79.0417 12.2138 79.2536 11.1446C79.4493 10.1588 78.0773 9.21842 77.3066 9.81016Z" fill="#F7DBB2"/>*/}
          {/*    </svg>*/}

          {/*  </div>*/}
          {/*  <p className="text-dessert-500 leading-normal">*/}
          {/*    De grootste collectie van daktenten en accessoires van alle*/}
          {/*    gerenommeerde merken in Europa.*/}
          {/*  </p>*/}
          {/*</div>*/}
          <div className="flex items-center gap-4">
            <div className="w-32 flex-shrink-0">
              <Image src={'uncode.svg'} alt={'uncode logo'} width={90}
                     height={20}></Image>
            </div>
            <p className="text-dessert-500 leading-normal">
              Digital simplicity to bring your brand story to life. The no-code
              movement connects seamlessly with this to make our designs a
              reality. </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 flex-shrink-0">
              <Image src={'breeze.svg'} alt={'uncode logo'} width={90}
                     height={20}></Image>
            </div>
            <p className="text-dessert-500 leading-normal">
              The app designed for dates<br/>
              A match made in heaven, our loving friends support our adventure!
              Modern dating made human again download their app to find your
              match for this summer
              ❤️ </p>
          </div>
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
            <p className="text-dessert-500 leading-normal">Powerful, autonomous
              and broadcast-ready Visual Radio software
              to help you supercharge your onair live visual radio car
              performance.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">

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
