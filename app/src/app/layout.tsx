import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce generico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

//https://dribbble.com/shots/20432213/attachments/15478756?mode=media
