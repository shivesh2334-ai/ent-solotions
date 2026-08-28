import { clinic, whatsappLink } from '@/lib/data';
import Image from 'next/image';

function LogoMark() {
  return (
    <Image src="/images/logo.png" alt="ENT Solution logo" width={40} height={40} className="object-contain" />
  );
}

export default function Header() {
  const nav = [
    { href: '#doctor', label: 'Doctor' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#visit', label: 'Visit' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-teal-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="leading-tight">
            <p className="font-display font-semibold text-lg sm:text-xl text-teal-950 tracking-tight">
              {clinic.name}
            </p>
            <p className="font-mono text-[10px] sm:text-xs text-teal-800/70 eyebrow uppercase">
              Ear · Nose · Throat · Head &amp; Neck
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-teal-800 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-teal-900 text-cream px-4 sm:px-5 py-2.5 text-sm font-medium hover:bg-teal-800 transition-colors"
        >
          Book on WhatsApp
        </a>
      </div>
    </header>
  );
}
