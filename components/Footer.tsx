import { clinic } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-cream/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <p>
          © {new Date().getFullYear()} {clinic.name} — {clinic.doctor}
        </p>
        <p>All patients seen by prior appointment · Face mask required</p>
      </div>
    </footer>
  );
}
