import '../../../globals.css'
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
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon_io/site.webmanifest"/>
      </head>
      <body className={inter.className}>
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}
