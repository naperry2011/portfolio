'use client';

import { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  /** Maximum tilt in degrees */
  max?: number;
  className?: string;
}

/**
 * Subtle 3D tilt under cursor. CSS perspective + transform.
 * Disabled under prefers-reduced-motion.
 */
export default function TiltCard({ children, max = 6, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) scale(1.01)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
