import Image from 'next/image'
import { Button } from '@/components/button'
import Friends from '@/components/friends'

// export const metadata: Metadata = {
//   title: 'Home',
// }

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
          <svg width="100" height="50" viewBox="0 0 2177 582" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M806.991 23.4678H23.459V60.3286C50.7935 69.9935 70.3771 96.0718 70.3771 126.726C70.3771 157.38 50.7935 183.458 23.459 193.123V219.909C50.7935 229.574 70.3771 255.652 70.3771 286.307C70.3771 316.961 50.7935 343.039 23.459 352.704V379.49C50.7935 389.155 70.3771 415.233 70.3771 445.887C70.3771 476.541 50.7935 502.618 23.459 512.282V549.145H806.991V23.4678ZM551.757 162.96C551.757 158.204 548.881 155.826 543.124 155.826H486.447C480.441 155.826 477.439 158.204 477.439 162.96V164.462C477.439 167.216 479.067 170.22 482.318 173.474C485.823 176.477 488.826 179.857 491.326 183.612C493.827 187.367 494.329 191.747 492.828 196.754L448.162 337.936L427.893 267.345L407.624 196.754C406.373 192.248 406.498 188.243 408 184.738C409.501 181.233 411.503 178.73 414.005 177.228C416.507 175.476 418.885 173.474 421.137 171.221C423.389 168.718 424.515 166.339 424.515 164.087V162.96C424.515 158.204 421.512 155.826 415.507 155.826H324.673C318.918 155.826 316.04 158.204 316.04 162.96V164.087C316.04 167.591 319.668 172.597 326.925 179.106C334.182 185.364 338.686 191.247 340.438 196.754L349.446 224.915L312.287 339.062L260.114 197.129C258.362 192.122 258.613 187.742 260.865 183.987C263.117 179.982 265.869 176.477 269.122 173.474C272.375 170.22 274.002 167.216 274.002 164.462V162.96C274.002 158.204 271.124 155.826 265.369 155.826H173.034C167.028 155.826 164.026 158.204 164.026 162.96V164.087C164.026 167.591 167.278 172.347 173.785 178.355C180.541 184.112 185.42 190.37 188.423 197.129L276.254 405.147C278.756 411.405 281.759 415.911 285.262 418.665C288.765 421.168 293.895 422.419 300.651 422.419C311.661 422.419 319.168 416.162 323.172 403.645L365.961 274.854L408.375 405.147C412.129 416.662 420.386 422.419 433.148 422.419C445.66 422.419 454.042 416.162 458.296 403.645L529.236 196.754C531.737 189.494 536.119 183.111 542.373 177.604C548.627 172.097 551.757 167.716 551.757 164.462V162.96ZM695.641 360.84C692.389 359.588 689.386 360.339 686.632 363.093C683.128 367.849 677.873 371.854 670.868 375.108C664.112 378.112 656.853 379.614 649.098 379.614C630.833 379.614 616.57 371.479 606.309 355.208L681.002 313.154C690.761 308.147 695.641 300.387 695.641 289.874C695.641 276.606 689.386 264.716 676.873 254.203C664.36 243.689 646.719 238.432 623.95 238.432C598.675 238.432 576.905 247.194 558.64 264.716C540.623 281.988 531.615 304.142 531.615 331.177C531.615 359.463 540.248 382.368 557.514 399.89C574.78 417.413 597.052 426.174 624.325 426.174C646.597 426.174 664.736 419.666 678.75 406.649C692.765 393.632 700.018 380.866 700.52 368.35C700.769 364.345 699.145 361.841 695.641 360.84ZM598.802 268.096C603.554 260.586 609.687 256.831 617.194 256.831C625.7 256.831 631.959 261.212 635.961 269.973C640.216 278.734 642.342 287.245 642.342 295.506C642.342 303.767 639.09 310.15 632.583 314.656L597.676 335.683C593.922 324.418 592.045 311.276 592.045 296.257C592.045 284.992 594.297 275.605 598.802 268.096Z"
                  fill="white"/>
            <mask id="mask0_1091_7582"
                  style={{ 'maskType': 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="788"
                  y="23"
                  width="1366"
                  height="527">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2153.54 23.4678H788.224V549.145H2153.54V496.235C2129.38 490.88 2111.31 469.321 2111.31 443.54C2111.31 417.76 2129.38 396.201 2153.54 390.844V341.35C2129.38 335.992 2111.31 314.434 2111.31 288.653C2111.31 262.873 2129.38 241.314 2153.54 235.956V186.463C2129.38 181.105 2111.31 159.546 2111.31 133.766C2111.31 107.986 2129.38 86.427 2153.54 81.0694V23.4678Z"
                    fill="white"/>
            </mask>
            <g mask="url(#mask0_1091_7582)">
              <path
                d="M788.224 23.4677V0H764.765V23.4677H788.224ZM2153.54 23.4677H2177V0H2153.54V23.4677ZM788.224 549.145H764.765V572.613H788.224V549.145ZM2153.54 549.145V572.613H2177V549.145H2153.54ZM2153.54 496.235H2177V477.404L2158.62 473.326L2153.54 496.235ZM2153.54 390.844L2158.62 413.755L2177 409.679V390.844H2153.54ZM2153.54 341.35H2177V322.515L2158.62 318.439L2153.54 341.35ZM2153.54 235.956L2158.62 258.868L2177 254.792V235.956H2153.54ZM2153.54 186.463H2177V167.628L2158.62 163.551L2153.54 186.463ZM2153.54 81.0693L2158.62 103.981L2177 99.9045V81.0693H2153.54ZM788.224 46.9355H2153.54V0H788.224V46.9355ZM811.683 549.145V23.4677H764.765V549.145H811.683ZM2153.54 525.677H788.224V572.613H2153.54V525.677ZM2130.08 496.235V549.145H2177V496.235H2130.08ZM2158.62 473.326C2144.97 470.298 2134.77 458.083 2134.77 443.54H2087.86C2087.86 480.558 2113.8 511.461 2148.46 519.149L2158.62 473.326ZM2134.77 443.54C2134.77 428.998 2144.97 416.782 2158.62 413.755L2148.46 367.932C2113.8 375.62 2087.86 406.522 2087.86 443.54H2134.77ZM2130.08 341.35V390.844H2177V341.35H2130.08ZM2087.86 288.653C2087.86 325.672 2113.8 356.574 2148.46 364.262L2158.62 318.439C2144.97 315.412 2134.77 303.196 2134.77 288.653H2087.86ZM2148.46 213.045C2113.8 220.733 2087.86 251.635 2087.86 288.653H2134.77C2134.77 274.111 2144.97 261.895 2158.62 258.868L2148.46 213.045ZM2130.08 186.463V235.956H2177V186.463H2130.08ZM2087.86 133.766C2087.86 170.785 2113.8 201.686 2148.46 209.375L2158.62 163.551C2144.97 160.525 2134.77 148.309 2134.77 133.766H2087.86ZM2148.46 58.1578C2113.8 65.8458 2087.86 96.7477 2087.86 133.766H2134.77C2134.77 119.224 2144.97 107.008 2158.62 103.981L2148.46 58.1578ZM2130.08 23.4677V81.0693H2177V23.4677H2130.08Z"
                fill="white"/>
              <path
                d="M1003.11 422.419C997.352 422.419 994.476 420.041 994.476 415.285V413.783C994.476 410.779 997.103 406.273 1002.36 400.266C1007.86 394.008 1010.62 387.749 1010.62 381.492V183.987H990.723C984.966 183.987 979.711 186.365 974.958 191.121C970.454 195.877 966.827 201.134 964.073 206.892C961.572 212.398 958.443 217.53 954.689 222.286C950.936 227.042 947.183 229.421 943.429 229.421H937.048C930.043 229.421 926.914 225.791 927.665 218.532L935.172 167.466C935.922 159.706 940.178 155.826 947.933 155.826H1140.86C1148.37 155.826 1152.62 159.706 1153.62 167.466L1161.5 218.907C1162.01 222.161 1161.38 224.789 1159.63 226.792C1157.88 228.544 1155.37 229.421 1152.12 229.421H1145.74C1141.99 229.421 1138.23 227.042 1134.48 222.286C1130.73 217.53 1127.47 212.398 1124.72 206.892C1121.97 201.134 1118.21 195.877 1113.46 191.121C1108.71 186.365 1103.45 183.987 1097.7 183.987H1078.18V381.492C1078.18 387.749 1080.81 394.008 1086.06 400.266C1091.56 406.273 1094.32 410.779 1094.32 413.783V415.285C1094.32 420.041 1091.31 422.419 1085.31 422.419H1003.11ZM1218.56 220.033C1205.8 220.033 1195.41 216.529 1187.4 209.52C1179.39 202.26 1175.39 193.249 1175.39 182.485C1175.39 171.721 1179.39 162.835 1187.4 155.826C1195.41 148.566 1205.8 144.937 1218.56 144.937C1231.07 144.937 1241.33 148.566 1249.34 155.826C1257.34 162.835 1261.35 171.721 1261.35 182.485C1261.35 193.249 1257.34 202.26 1249.34 209.52C1241.33 216.529 1231.07 220.033 1218.56 220.033ZM1178.39 422.419C1172.39 422.419 1169.39 420.041 1169.39 415.285V413.783C1169.39 410.779 1171.89 406.148 1176.89 399.89C1181.9 393.632 1184.4 387.374 1184.4 381.116V309.774C1184.4 303.266 1181.9 297.008 1176.89 291C1171.89 284.742 1169.39 280.486 1169.39 278.233V276.732C1169.39 273.728 1172.26 270.849 1178.02 268.095L1234.7 240.31C1239.95 238.057 1244.08 237.807 1247.08 239.559C1250.09 241.311 1251.59 244.19 1251.59 248.195V381.116C1251.59 387.374 1254.34 393.632 1259.84 399.89C1265.6 406.148 1268.48 410.779 1268.48 413.783V415.285C1268.48 420.041 1265.35 422.419 1259.09 422.419H1178.39ZM1379.8 426.174C1351.27 426.174 1327.87 416.912 1309.61 398.388C1291.34 379.614 1282.21 357.461 1282.21 331.928C1282.21 303.641 1291.46 281.112 1309.98 264.341C1328.5 247.318 1351.02 238.682 1377.54 238.432C1399.81 238.182 1418.7 243.313 1434.22 253.827C1449.73 264.09 1457.49 277.483 1457.49 294.004C1457.49 300.262 1455.24 305.518 1450.74 309.774C1446.48 314.03 1439.6 316.032 1430.09 315.782C1421.58 315.281 1414.2 311.902 1407.95 305.644C1401.94 299.386 1397.56 292.627 1394.81 285.368C1392.06 278.108 1388.3 271.6 1383.55 265.843C1378.79 259.835 1373.41 256.831 1367.41 256.831C1359.65 257.081 1353.27 261.211 1348.27 269.222C1343.51 277.232 1341.14 287.12 1341.14 298.885C1341.14 323.417 1346.64 343.067 1357.65 357.836C1368.91 372.605 1383.8 379.99 1402.32 379.99C1419.08 379.99 1432.97 372.73 1443.98 358.212C1446.48 355.208 1449.48 354.207 1452.99 355.208C1456.49 355.959 1458.24 358.337 1458.24 362.342C1457.74 379.864 1450.61 394.884 1436.85 407.4C1423.08 419.916 1404.07 426.174 1379.8 426.174ZM1674.37 390.879C1675.62 392.631 1679.37 395.885 1685.63 400.641C1692.13 405.397 1695.39 409.778 1695.39 413.783V415.285C1695.39 420.041 1692.51 422.419 1686.76 422.419H1607.93C1602.18 422.419 1599.3 419.916 1599.3 414.91V413.783C1599.3 410.779 1601.18 407.15 1604.93 402.894C1608.69 398.388 1609.44 394.383 1607.18 390.879L1574.15 341.69L1555.39 358.963V381.492C1555.39 387.749 1558.14 394.008 1563.64 400.266C1569.4 406.273 1572.28 410.779 1572.28 413.783V415.285C1572.28 420.041 1569.27 422.419 1563.27 422.419H1482.19C1476.19 422.419 1473.19 420.041 1473.19 415.285V413.783C1473.19 410.779 1475.69 406.273 1480.69 400.266C1485.69 394.008 1488.2 387.749 1488.2 381.492V209.895C1488.2 203.387 1485.2 197.129 1479.19 191.121C1473.19 184.863 1470.18 180.482 1470.18 177.979V176.477C1470.18 173.724 1472.93 170.845 1478.44 167.841L1538.5 140.055C1543.75 138.053 1547.88 137.928 1550.88 139.68C1553.89 141.432 1555.39 144.186 1555.39 147.941V326.295L1606.06 282.739C1609.06 280.737 1610.19 278.233 1609.44 275.23C1608.93 272.226 1607.68 269.597 1605.68 267.344C1603.93 264.841 1601.93 262.088 1599.68 259.084C1597.67 256.08 1596.67 253.452 1596.67 251.199V249.697C1596.67 244.69 1599.55 242.187 1605.31 242.187H1664.61C1670.36 242.187 1673.25 244.565 1673.25 249.321V250.823C1673.25 253.827 1671.49 256.956 1667.99 260.21C1664.49 263.214 1659.48 266.844 1652.98 271.099C1646.72 275.104 1641.72 278.859 1637.96 282.364L1613.94 304.517L1674.37 390.879ZM1841.18 363.093C1843.94 360.339 1846.94 359.588 1850.19 360.84C1853.7 361.841 1855.32 364.345 1855.07 368.35C1854.57 380.866 1847.32 393.632 1833.3 406.649C1819.29 419.666 1801.15 426.174 1778.88 426.174C1751.6 426.174 1729.33 417.413 1712.07 399.89C1694.8 382.368 1686.17 359.463 1686.17 331.177C1686.17 304.142 1695.17 281.988 1713.19 264.716C1731.46 247.194 1753.23 238.432 1778.5 238.432C1801.27 238.432 1818.91 243.689 1831.42 254.203C1843.94 264.716 1850.19 276.606 1850.19 289.873C1850.19 300.387 1845.31 308.147 1835.55 313.153L1760.86 355.208C1771.12 371.479 1785.38 379.614 1803.65 379.614C1811.4 379.614 1818.66 378.112 1825.42 375.108C1832.42 371.854 1837.68 367.849 1841.18 363.093ZM1771.74 256.831C1764.24 256.831 1758.11 260.586 1753.35 268.095C1748.85 275.605 1746.6 284.992 1746.6 296.257C1746.6 311.276 1748.47 324.418 1752.23 335.682L1787.13 314.655C1793.64 310.15 1796.89 303.766 1796.89 295.506C1796.89 287.245 1794.77 278.734 1790.51 269.973C1786.51 261.211 1780.25 256.831 1771.74 256.831ZM1949.01 426.174C1929.99 426.174 1914.97 420.166 1903.96 408.151C1893.2 396.135 1887.82 378.988 1887.82 356.71V267.72H1873.56C1871.06 267.72 1868.93 266.969 1867.18 265.467C1865.68 263.715 1864.93 261.587 1864.93 259.084V250.823C1864.93 245.066 1867.8 242.187 1873.56 242.187H1880.69C1892.2 242.187 1902.09 238.808 1910.35 232.049C1918.6 225.04 1923.98 215.778 1926.49 204.263C1927.73 197.755 1931.11 194.501 1936.62 194.501H1945.25C1952.01 194.501 1955.39 197.755 1955.39 204.263V242.187H1994.05C1996.55 242.187 1998.55 243.063 2000.05 244.815C2001.8 246.317 2002.68 248.32 2002.68 250.823V259.084C2002.68 261.587 2001.8 263.715 2000.05 265.467C1998.55 266.969 1996.55 267.72 1994.05 267.72H1955.39V357.836C1955.39 364.094 1957.01 369.101 1960.27 372.855C1963.52 376.36 1967.52 378.112 1972.28 378.112C1983.04 378.112 1991.29 373.481 1997.05 364.219C1998.8 361.966 2000.8 360.715 2003.06 360.464C2005.31 359.964 2007.18 360.339 2008.69 361.591C2010.44 362.843 2011.31 364.595 2011.31 366.848C2011.31 382.618 2005.68 396.511 1994.42 408.526C1983.41 420.292 1968.27 426.174 1949.01 426.174Z"
                fill="white"/>
            </g>
          </svg>
        </div>
        <div>

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
