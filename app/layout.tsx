import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/footer'
import localFont from 'next/font/local'
import Header from '@/components/header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const wilden = localFont({
  src: './wilden.woff2',
  display: 'swap',
  variable: '--font-wild',
})
export const metadata: Metadata = {
  title: {
    template: '%s | Balkan Express',
    default: 'The Balkan Express Orient Trip',
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

    <Analytics/>
    </body>
    </html>
  )
}
