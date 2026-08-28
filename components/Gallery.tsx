'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: dir * Math.min(track.clientWidth * .88, 760), behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase text-amber-600 eyebrow">Inside the clinic</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">A clean, equipped space for your care</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-base">Explore the consultation, diagnostic and procedure facilities at ENT Solution.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {([-1, 1] as const).map((dir) => (
              <button key={dir} onClick={() => scrollBy(dir)} aria-label={dir < 0 ? 'Previous gallery images' : 'Next gallery images'}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-900/20 bg-white text-lg text-teal-950 transition hover:border-teal-800 hover:bg-sage">
                {dir < 0 ? '←' : '→'}
              </button>
            ))}
          </div>
        </div>
        <div ref={trackRef} role="region" aria-label="Clinic photo gallery" className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5">
          {galleryImages.map((img, index) => (
            <figure key={img.src} className="group relative aspect-[4/3] w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl border border-teal-900/10 bg-paper shadow-clinical sm:w-[48%] lg:w-[32%]">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width:640px) 88vw,(max-width:1024px) 48vw,32vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]" priority={index < 2} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-950/85 to-transparent px-4 pb-4 pt-12">
                <figcaption className="text-sm font-semibold text-white">{img.alt}</figcaption>
              </div>
            </figure>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-1.5 sm:hidden" aria-hidden="true">
          {galleryImages.map((img) => <span key={img.src} className="h-1.5 w-1.5 rounded-full bg-teal-800/30" />)}
        </div>
        <p className="mt-5 text-center text-xs leading-relaxed text-ink/50 sm:text-left">Images are representative; the current clinic setup may vary.</p>
      </div>
    </section>
  );
}
