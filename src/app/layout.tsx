
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Psi Camila Samogim',
  description: 'Psicóloga Infantil e Juvenil',
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
      <body className='bg-pink-50 scrollable'>
        {/* <div>
          <Image
            className="opacity-10 bg-cover -z-30 bgWrap"
            alt="Mountains"
            src={bg}
            priority={true}
            fill={true}
            quality={20}
          />
        </div> */}

        <Header />
        <div className='mx-auto max-w-6xl md:px-6 px-8 py-8 md:py-12 bg-pink-100'>
          {children}
        </div>
      </body>
      <Analytics />
    </html>




  )
}
