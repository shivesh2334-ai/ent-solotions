import Image from 'next/image';
import { clinic, whatsappLink } from '@/lib/data';
import WaveformDivider from './WaveformDivider';

const badges = ['MBBS', 'DLO', 'MS (ENT)'];

export default function Hero() {
  return (
    <section id="doctor" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 sm:pt-20 pb-16 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
        <div className="animate-fadeUp">
          <p className="font-mono eyebrow uppercase text-xs text-amber-600 mb-4">
            {clinic.title}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-teal-950 font-semibold tracking-tight">
            {clinic.doctor}
          </h1>

          <div className="flex flex-wrap gap-2 mt-5">
            {badges.map((b) => (
              <span
                key={b}
                className="font-mono text-xs px-3 py-1 rounded-full border border-teal-900/25 text-teal-900 bg-sage"
              >
                {b}
              </span>
            ))}
          </div>

          <p className="mt-6 text-ink/75 text-base sm:text-lg leading-relaxed max-w-xl">
            Consultation, diagnostics and surgical care for the ear, nose, throat and head &amp; neck —
            from routine ear cleaning to functional endoscopic sinus surgery, at{' '}
            {clinic.name} in Shalimar Bagh, Delhi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 text-sm font-medium hover:brightness-95 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.28.53-.35.71-.35.18 0 .35.002.5.01.16.008.38-.06.6.45.24.56.79 1.94.86 2.08.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
              </svg>
              Book an appointment
            </a>
            <a
              href={`tel:${clinic.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-teal-900/30 text-teal-950 px-6 py-3.5 text-sm font-medium hover:bg-teal-900/5 transition"
            >
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-10">
            <WaveformDivider className="justify-start" color="text-teal-800/50" />
          </div>
        </div>

        <div className="relative animate-fadeUp mx-auto md:mx-0" style={{ animationDelay: '0.12s' }}>
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden bg-sage border border-teal-900/10 shadow-[0_20px_60px_-25px_rgba(13,59,62,0.45)]">
            <Image src="/images/doctor-portrait.jpg" alt={clinic.doctor} fill className="object-cover" priority />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden sm:block bg-cream border border-teal-900/10 rounded-2xl px-5 py-3 shadow-lg">
            <p className="font-mono text-[10px] uppercase eyebrow text-teal-800/70">By appointment</p>
            <p className="font-display text-xl font-semibold text-teal-950">Shalimar Bagh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
