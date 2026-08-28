'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div className="max-w-xl">
            <p className="font-mono eyebrow uppercase text-xs text-amber-600 mb-4">Inside the clinic</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-teal-950">
              Clinic &amp; Procedure Gallery
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll gallery left"
              className="w-11 h-11 rounded-full border border-teal-900/25 flex items-center justify-center hover:bg-teal-900/5 transition"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll gallery right"
              className="w-11 h-11 rounded-full border border-teal-900/25 flex items-center justify-center hover:bg-teal-900/5 transition"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        >
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] aspect-[4/3] rounded-2xl overflow-hidden bg-sage border border-teal-900/10"
            >
              {/*
                Upload matching files into /public/images (see /public/images/README.md).
                Once a file exists at this path, this will render the real photo automatically.
              */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 31vw"
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-mono text-[11px] text-teal-900/40 text-center px-4">
                  {img.alt}
                </span>
              </div>
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase bg-cream/90 text-teal-950 px-2.5 py-1 rounded-full">
                {img.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
