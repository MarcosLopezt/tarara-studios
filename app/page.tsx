import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import QuienesSomos from '@/components/QuienesSomos'
import SalasDeEnsayo from '@/components/SalasDeEnsayo'
import EscuelaDeMusica from '@/components/EscuelaDeMusica'
import Ensamble from '@/components/Ensamble'
import Resenas from '@/components/Resenas'
import Inclusion from '@/components/Inclusion'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MusicSchool'],
      '@id': 'https://tararastudio.com.ar/#business',
      name: 'Tarará Studio',
      description:
        'Escuela de música y sala de ensayo en Palermo, Buenos Aires. Clases de canto, guitarra, ensamble y más.',
      url: 'https://tararastudio.com.ar',
      telephone: '+54-11-3912-8186',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Raúl Scalabrini Ortiz 868',
        addressLocality: 'Buenos Aires',
        addressRegion: 'Ciudad Autónoma de Buenos Aires',
        addressCountry: 'AR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -34.594,
        longitude: -58.437,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        closes: '23:30',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '47',
        bestRating: '5',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'LGBTQ+ Friendly', value: true },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Transgender Safe Space',
          value: true,
        },
        { '@type': 'LocationFeatureSpecification', name: 'Child Friendly', value: true },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Wheelchair Accessible Parking',
          value: true,
        },
        { '@type': 'LocationFeatureSpecification', name: 'Online Classes', value: true },
      ],
      sameAs: ['https://www.instagram.com/tararastudio'],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <QuienesSomos />
        <SalasDeEnsayo />
        <EscuelaDeMusica />
        <Ensamble />
        <Resenas />
        <Inclusion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
