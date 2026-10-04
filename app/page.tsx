import { siteUrl } from '@/lib/site';
import AnnouncementStrip from '@/components/AnnouncementStrip';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { clinic } from '@/lib/data';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: clinic.name,
  url: siteUrl,
  telephone: clinic.phoneIntl,
  email: clinic.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'BC-36(A), East, Near Gate No-2, Shalimar Bagh',
    addressLocality: 'Delhi',
    postalCode: '110088',
    addressCountry: 'IN',
  },
  medicalSpecialty: 'Otolaryngologic',
  physician: {
    '@type': 'Physician',
    name: clinic.doctor,
    medicalSpecialty: 'Otolaryngologic',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <main id="top">
        <AnnouncementStrip />
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Visit />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
