/* Arcade continue-screen countdown, 9 to 0 on a loop. Decorative only. */
export default function Countdown({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`countdown font-display ${className}`}>
      <span className="countdown-strip">
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </span>
  );
}
