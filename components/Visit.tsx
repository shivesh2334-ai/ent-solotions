import { clinic, whatsappLink } from '@/lib/data';
import WaveformDivider from './WaveformDivider';

export default function Visit() {
  const mapsQuery = encodeURIComponent(`${clinic.name}, ${clinic.address}`);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section id="visit" className="bg-sage">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <p className="font-mono eyebrow uppercase text-xs text-amber-600 mb-4">Visit the clinic</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-teal-950 mb-10">
          Address &amp; Appointment Timings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-2xl border border-teal-900/10 p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-teal-950 mb-3">Address</h3>
            <p className="text-ink/80 leading-relaxed mb-5">
              {clinic.name}
              <br />
              {clinic.address}
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-800 hover:text-teal-950 underline underline-offset-4"
            >
              Open in Google Maps →
            </a>

            <div className="mt-7 pt-7 border-t border-teal-900/10 space-y-2 font-mono text-sm">
              <p>
                <span className="text-ink/50">Phone: </span>
                <a href={`tel:${clinic.phoneIntl}`} className="text-teal-900 hover:underline">
                  {clinic.phone}
                </a>
              </p>
              <p>
                <span className="text-ink/50">Email: </span>
                <a href={`mailto:${clinic.email}`} className="text-teal-900 hover:underline break-all">
                  {clinic.email}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-teal-950 text-cream rounded-2xl p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold mb-1">Appointment Timings</h3>
            <p className="text-cream/60 text-sm mb-6">Walk-ins are not seen — please book ahead.</p>

            <div className="space-y-3 font-mono text-sm">
              {clinic.timings.map((t) => (
                <div
                  key={t.slot}
                  className="flex items-center justify-between border-b border-cream/10 pb-3"
                >
                  <span className="text-cream/60">{t.slot}</span>
                  <span className="text-cream">{t.hours}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-1">
                <span className="text-cream/60">Sunday</span>
                <span className="text-amber-400">{clinic.closed}</span>
              </div>
            </div>

            <WaveformDivider className="my-7 justify-start" color="text-cream/25" />

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 text-sm font-medium hover:brightness-95 transition"
            >
              Book your appointment on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
