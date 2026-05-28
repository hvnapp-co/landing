import type { Metadata } from 'next'
import { Lora, Geist } from 'next/font/google'

import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lora',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Haven — Your personal library',
  description: 'A digital sanctuary to curate, sync, and rediscover your personal library.',
  openGraph: {
    title: 'Haven — Your personal library',
    description: 'A digital sanctuary to curate, sync, and rediscover your personal library.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#010101] text-white">{children}</body>
    </html>
  )
}
