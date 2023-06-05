import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Balkan Express',
  description: 'Follow our Balkan Express Orient Trip',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <main>
      {children}
    </main>

    <footer className="bg-slate-100 text-slate-500 text-sm flex">
      <div className="grid grid-cols-3 divide-x mx-auto">
        <div className="p-4">
          <h2>Follow Us</h2>
          <a className="underline"
             href="https://instagram.com/balkanexpress2023">Instagram</a>
        </div>
        <div className="p-4">
          <p>Balkan Express Tour</p>
          <p>KvK 67988695</p>
          <p className={'mt-2 text-slate-200'}>Haverstraat 32
            BIS<br/>3511ND<br/>Utrecht</p>
        </div>
        <div className="p-4">
          <h2>Contact</h2>
          <a className="underline">info(at)balkan-expresss.nl</a>
        </div>
      </div>

    </footer>
    <Analytics/>
    </body>
    </html>
  )
}
