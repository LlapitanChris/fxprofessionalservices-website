import '../../globals.css'
import { Inter } from 'next/font/google'
import { SplashScreen } from '@/app/_components/SplashScreen';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fx Professional Services',
  description: 'FileMaker development consultancy firm.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <meta name="theme-color" content="#211F53" />
      </head>
      <body className={inter.className}>
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}
