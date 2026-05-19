'use client';

import { useEffect, useRef } from 'react';

interface Props {
  text: string;
  className?: string;
}

/**
 * Each word is a span that displaces slightly toward the cursor when
 * the cursor is near. Subtle — max ~10px translation, falls off with
 * inverse-square distance.
 */
export default function ReactiveText({ text, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = ref.current;
    if (!root) return;
    const spans = Array.from(root.querySelectorAll<HTMLSpanElement>('[data-word]'));

    let raf = 0;
    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const tick = () => {
      for (const s of spans) {
        const r = s.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const d2 = dx * dx + dy * dy;
        const max2 = 240 * 240;
        if (d2 < max2) {
          const f = (1 - d2 / max2) * 0.04;
          s.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
        } else {
          s.style.transform = '';
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const words = text.split(' ');
  return (
    <div ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} data-word className="inline-block transition-transform duration-100 ease-out will-change-transform">
          {w}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </div>
  );
}
