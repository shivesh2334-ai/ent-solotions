const HEIGHTS = [6, 12, 18, 10, 22, 14, 8, 20, 12, 16, 6, 18, 10, 22, 8, 14, 20, 12, 6, 16];

export default function WaveformDivider({
  className = '',
  color = 'text-teal-800/40',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`waveform-rule ${color} ${className}`} aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <span
          key={i}
          style={{
            height: `${h}px`,
            animationDelay: `${(i % 6) * 0.09}s`,
          }}
          className="animate-waveform"
        />
      ))}
    </div>
  );
}
