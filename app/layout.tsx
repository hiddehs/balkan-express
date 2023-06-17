import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/footer'
import localFont from 'next/font/local'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })
const wilden = localFont({
  src: './wilden.woff2',
  display: 'swap',
  variable: '--font-wild',
})
export const metadata = {
  title: {
    template: '%s | Balkan Express',
    default: 'Home',
  },
  description: 'Follow our Balkan Express Orient Trip',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body
      className={`${wilden.variable} ${inter.className} mx-auto bg-no-repeat bg-fixed`}
      style={{
        backgroundImage: 'url(\'bg.png\')',
        backgroundColor: '#362F86',
      }}>
    <main>

      <div className="page max-w-3xl pt-10 lg:p-24 mx-auto"
           style={{ maxWidth: '800px' }}>

        <Header className="mb-4"></Header>

        {children}
      </div>
      <div className="py-4">

      </div>
    </main>

    <Footer></Footer>

    {/*<div className="bg-overlay absolute top-0 left-1/2 min-h-screen min-w-screen bg-cover bg-blend-darken transform -translate-x-1/2" style=></div>*/}
    {/*    <footer className="bg-slate-100 text-slate-500 text-sm flex">*/}
    {/*      <div className="grid grid-cols-3 divide-x mx-auto">*/}
    {/*        <div className="p-4">*/}
    {/*          <h2>Follow Us</h2>*/}
    {/*          <a className="underline"*/}
    {/*             href="https://instagram.com/balkanexpress2023">Instagram</a>*/}
    {/*        </div>*/}
    {/*        <div className="p-4">*/}
    {/*          <p>Balkan Express Tour</p>*/}
    {/*          <p>KvK 67988695</p>*/}
    {/*          <p className={'mt-2 text-slate-200'}>Haverstraat 32*/}
    {/*            BIS<br/>3511ND<br/>Utrecht</p>*/}
    {/*        </div>*/}
    {/*        <div className="p-4">*/}
    {/*          <h2>Contact</h2>*/}
    {/*          <a className="underline">info(at)balkan-expresss.nl</a>*/}
    {/*        </div>*/}
    {/*      </div>*/}

    {/*    </footer>*/}
    <Analytics/>
    </body>
    </html>
  )
}
