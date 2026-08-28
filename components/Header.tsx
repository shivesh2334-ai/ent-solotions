import { clinic, whatsappLink } from '@/lib/data';
import Image from 'next/image';

export default function Header() {
  const nav = [
    { href: '#doctor', label: 'Doctor' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Clinic' },
    { href: '#visit', label: 'Visit' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-teal-900/10 bg-white/95 shadow-[0_1px_12px_rgba(8,47,52,.05)] backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="ENT Solution home">
          <Image src="/images/logo.png" alt="" width={44} height={44} priority className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" />
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-lg font-semibold tracking-tight text-teal-950 sm:text-xl">{clinic.name}</p>
            <p className="hidden font-mono text-[9px] uppercase tracking-[.12em] text-teal-800/75 sm:block">Ear · Nose · Throat · Head &amp; Neck</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex" aria-label="Main navigation">
          {nav.map((item) => <a key={item.href} href={item.href} className="rounded-md px-1 py-2 transition-colors hover:text-teal-800">{item.label}</a>)}
        </nav>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center rounded-full bg-teal-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800 sm:px-5 sm:text-sm">
          <span className="sm:hidden">Book visit</span><span className="hidden sm:inline">Book on WhatsApp</span>
        </a>
      </div>
      <nav className="flex h-10 items-center justify-around border-t border-teal-900/5 bg-white px-3 text-xs font-medium text-teal-900 md:hidden" aria-label="Mobile navigation">
        {nav.map((item) => <a key={item.href} href={item.href} className="px-3 py-2">{item.label}</a>)}
      </nav>
    </header>
  );
}
