import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/Header'

const inter = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Maritino',
  description: 'Official website of maritino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-purple-900 to-black text-gray`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}