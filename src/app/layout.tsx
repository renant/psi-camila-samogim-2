
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import bg from '../../public/bg.jpg';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Psi Camila Samogim',
  description: 'Site da Psicóloga Camila Samogim',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body>
        <div>
          <Image
            className="opacity-10 bg-cover -z-30 bgWrap"
            alt="Mountains"
            src={bg}
            priority={true}
            fill={true}
            quality={20}
          />
        </div>

        <Header />
        <div className='mx-auto max-w-4xl md:px-4 p px-12 bg-pink-100 scrollable'>
          {children}
        </div>
      </body>
      <Analytics />
    </html>




  )
}
