import { CSSProperties } from 'react';

interface TickRuleProps {
  /** Spacing between ticks in pixels. Default 24. */
  step?: number;
  /** Tick mark color. Default 'var(--muted)'. */
  color?: string;
  /** Optional className for layout. */
  className?: string;
}

/**
 * Vertical scale-rule of tick marks - evokes the side of a drafting ruler.
 * Renders a 4px-wide column with repeating 1px horizontal ticks at `step`
 * interval. Used along the left edge of the Approach and Now frames to
 * extend the architectural-drawing metaphor.
 */
export default function TickRule({
  step = 24,
  color = 'var(--muted)',
  className = '',
}: TickRuleProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(to bottom, ${color} 0 1px, transparent 1px ${step}px)`,
    backgroundSize: `100% ${step}px`,
    backgroundRepeat: 'repeat-y',
  };
  return (
    <div
      aria-hidden
      className={`w-1 opacity-40 ${className}`}
      style={style}
    />
  );
}
