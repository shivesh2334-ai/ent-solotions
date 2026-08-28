import { announcements } from '@/lib/data';

export default function AnnouncementStrip() {
  return (
    <div className="bg-teal-950 text-cream/90 text-xs sm:text-sm font-mono">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
        {announcements.map((note, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}
