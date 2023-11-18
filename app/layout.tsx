import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk=Space_Grotesk({subsets:['latin'],weight:['300','400','500','600','700']})
export const metadata: Metadata = {
  title: 'PriceTracker',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main className='max-w-10xl'>
        <Navbar/>
        {children}
        </main>
        </body>
    </html>
  )
}
