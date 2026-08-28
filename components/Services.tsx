import { serviceGroups } from '@/lib/data';
import WaveformDivider from './WaveformDivider';

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="#186A6E" strokeWidth="1.1" />
      <path d="M4.8 8.2 6.8 10.2 11.2 5.6" stroke="#C98A3E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-teal-950 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono eyebrow uppercase text-xs text-amber-400 mb-4">What we treat</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            ENT Services &amp; Procedures
          </h2>
        </div>

        <WaveformDivider className="mt-10 mb-10 justify-start" color="text-cream/25" />

        <div className="grid md:grid-cols-3 gap-6">
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="card-hover bg-teal-900/60 border border-cream/10 rounded-2xl p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] uppercase eyebrow text-amber-400 mb-2">
                {group.eyebrow}
              </p>
              <h3 className="font-display text-xl font-semibold mb-2">{group.title}</h3>
              <p className="text-cream/65 text-sm mb-5 leading-relaxed">{group.description}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream/85 leading-snug">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
