
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./Header/header"
import useSound from 'use-sound'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Tomás-Oliveira',
  description: 'MyPortfolio',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
