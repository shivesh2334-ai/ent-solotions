import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'], display: 'swap' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-plex-mono', weight: ['400', '500', '600'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ent-solotions.vercel.app'),
  title: 'ENT Solution | Dr. Arijit Chakraborty — Senior ENT Consultant, Shalimar Bagh, Delhi',
  description: 'ENT Solution is the Shalimar Bagh clinic of Dr. Arijit Chakraborty, MBBS, DLO, MS (ENT), Senior ENT Consultant. Ear, nose, throat and head & neck care in Delhi. Book by appointment on WhatsApp.',
  keywords: ['ENT doctor Shalimar Bagh', 'ENT Solution Delhi', 'Dr Arijit Chakraborty', 'ENT consultant Delhi', 'FESS surgery Delhi', 'micro ear surgery Delhi', 'audiometry Shalimar Bagh'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ENT Solution — Dr. Arijit Chakraborty, Senior ENT Consultant',
    description: 'Ear, nose, throat and head & neck care in Shalimar Bagh, Delhi. By prior appointment only.',
    url: '/',
    siteName: 'ENT Solution',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-body bg-cream text-ink antialiased`}>{children}</body>
    </html>
  );
}
