import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tararastudio.com.ar'),
  title: 'Tarará Studio · Escuela de Música y Sala de Ensayo en Palermo, CABA',
  description:
    'Escuela de música y sala de ensayo en el corazón de Palermo, Buenos Aires. Clases de canto, guitarra, ensamble y más — todos los niveles, online y presencial. LGBTQ+ friendly. Av. Raúl Scalabrini Ortiz 868, CABA. Abierto hasta las 23:30hs.',
  keywords: [
    'escuela de música Buenos Aires',
    'sala de ensayo Palermo',
    'clases de canto CABA',
    'guitarra Buenos Aires',
    'ensamble musical Palermo',
    'espacio LGBTQ+',
    'clases de música online',
    'Tarará Studio',
    'ensayo Scalabrini Ortiz',
  ],
  openGraph: {
    title: 'Tarará Studio · Escuela de Música y Sala de Ensayo en Palermo',
    description:
      'Tu lugar para sonar. Sala de ensayo, clases de música y ensamble en Palermo, Buenos Aires. Espacio LGBTQ+ friendly. 5.0★ en Google.',
    locale: 'es_AR',
    type: 'website',
    siteName: 'Tarará Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarará Studio · Tu lugar para sonar',
    description: 'Escuela de música y sala de ensayo en Palermo, CABA. LGBTQ+ friendly. 5.0★',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-body bg-eggplant text-cream antialiased">
        {children}
      </body>
    </html>
  )
}
