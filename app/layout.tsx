import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'


import './globals.css'
import ModalProvider from '@/components/providers/modal-provider'
import Navbar from '@/components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blocks',
  description: 'Find a place to call your home!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ModalProvider />
        {children}
        </body>
    </html>
    </ClerkProvider>
    
  )
}
