import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        teal: { 950: '#082F34', 900: '#0B4147', 800: '#0F5961', 700: '#16727B' },
        cream: '#F8FAFB',
        paper: '#EEF3F5',
        sage: '#E7F1F0',
        ink: '#15292D',
        amber: { 400: '#D9A75D', 500: '#C78A32', 600: '#A96712' },
        coral: '#C85D49',
        whatsapp: '#128C7E',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: { clinical: '0 18px 50px -28px rgba(8,47,52,.35)' },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        waveform: { '0%, 100%': { transform: 'scaleY(.4)' }, '50%': { transform: 'scaleY(1)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { waveform: 'waveform 1.2s ease-in-out infinite', fadeUp: 'fadeUp .6s ease-out forwards' },
    },
  },
  plugins: [],
};

export default config;
