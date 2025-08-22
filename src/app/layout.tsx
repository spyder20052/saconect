import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'SACONECT | IoT Solutions',
  description: "Solutions IoT: tracking, domotique, utilities, agriculture. SACONECT — Afrique.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={rubik.variable}>
      <body className="min-h-screen flex flex-col font-rubik">
        <Header />
        <main className="flex-1 pt-[96px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}