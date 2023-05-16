import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Categorias } from '@/components/Categorias'
import './globals.css'

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce generico',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <Categorias />
          {children}
        </div>
      </body>
    </html>
  )
}

// https://dribbble.com/shots/20432213/attachments/15478756?mode=media
