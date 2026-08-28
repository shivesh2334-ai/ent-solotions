import AnnouncementStrip from '@/components/AnnouncementStrip';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
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
  );
}
