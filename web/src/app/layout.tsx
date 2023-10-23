import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-commerce",
  description: "...",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-lg:hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
