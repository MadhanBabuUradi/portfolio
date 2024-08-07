import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'; 
import {Analytics} from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Madhan Babu Uradi',
  description: 'Madhan Babu Uradi Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
  )
}
