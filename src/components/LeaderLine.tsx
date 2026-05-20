'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface LeaderLineProps {
  /** Optional className for absolute positioning by the parent. */
  className?: string;
}

/**
 * Hand-drawn-feeling leader line that connects a margin annotation to
 * a principle title. Inline SVG with a single path; on scroll-into-view
 * the path draws itself in via stroke-dashoffset animation.
 *
 * Positioned absolutely by the parent. The SVG is 120x80 and the path
 * starts on the left edge and curves up-and-right to terminate near the
 * top-right, ending in a small tick mark.
 *
 * Respects prefers-reduced-motion by skipping the draw-in animation
 * (the line still renders, just appears instantly).
 */
export default function LeaderLine({ className = '' }: LeaderLineProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Path length is the explicit value used for dasharray; chosen empirically
  // to comfortably exceed the actual stroke length of the curve below.
  const PATH_LENGTH = 220;

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 120 80"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ color: 'var(--accent)' }}
    >
      <motion.path
        d="M0 70 Q 40 70, 60 40 T 110 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={PATH_LENGTH}
        initial={{ strokeDashoffset: reduced ? 0 : PATH_LENGTH }}
        animate={{ strokeDashoffset: inView ? 0 : PATH_LENGTH }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Terminal tick mark at the end of the curve */}
      <motion.line
        x1="106"
        y1="6"
        x2="114"
        y2="14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
    </svg>
  );
}
