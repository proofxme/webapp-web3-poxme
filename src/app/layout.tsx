import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "@/app/providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Proof of X | Web3',
  description: 'Proof of X | Web3 Center',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
