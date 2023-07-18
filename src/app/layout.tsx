
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Psi Camila Samogim - Psicóloga Infantil em Jundiaí',
  description: 'Especializada em crianças e adolescentes, com formação em Análise do Comportamento aplicada ao Transtorno do Espectro Autista e Deficiência pela CBI of Miami. Atendo em Jundiaí e região, oferecendo acompanhamento psicológico para crianças, adolescentes e orientação de pais.',
  icons: {
    icon: '/icon.png',
  },

  openGraph: {
    title: 'Psi Camila Samogim - Psicóloga Infantil em Jundiaí',
    description: 'Especializada em crianças e adolescentes, com formação em Análise do Comportamento aplicada ao Transtorno do Espectro Autista e Deficiência pela CBI of Miami. Atendo em Jundiaí e região, oferecendo acompanhamento psicológico para crianças, adolescentes e orientação de pais.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Psi Camila Samogim - Psicóloga Infantil em Jundiaí',
      },
    ],
    site_name: 'Psi Camila Samogim',
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


        <Header />
        <div className='mx-auto max-w-6xl md:px-6 px-8 py-8 md:py-12 bg-pink-100'>
          {children}
        </div>
        <Footer />
      </body>
      <Analytics />
    </html>




  )
}
