import { clinic, whatsappLink } from '@/lib/data';

function LogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#124F53" strokeWidth="1.5" />
      <path
        d="M12 22c0-5 3.5-9 8-9s8 4 8 9-3 7-5.5 7c-1.7 0-2.5-1.2-2.5-3v-4"
        stroke="#C98A3E"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="19.5" cy="22" r="1.6" fill="#124F53" />
    </svg>
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
