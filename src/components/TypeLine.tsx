'use client';

import { useEffect, useState } from 'react';

interface TypeLineProps {
  text: string;
  /* ms before typing starts (lets the hero panels land first) */
  delay?: number;
  /* ms per character */
  speed?: number;
}

/* Types text out like game dialogue. The untyped remainder stays in the layout (invisible) so nothing reflows. */
export default function TypeLine({ text, delay = 1100, speed = 26 }: TypeLineProps) {
  const [count, setCount] = useState(text.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setCount(0);
    let i = 0;
    let tick: number | undefined;
    const start = window.setTimeout(() => {
      tick = window.setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) window.clearInterval(tick);
      }, speed);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(tick);
    };
  }, [text, delay, speed]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.slice(0, count)}
        <span className="invisible">{text.slice(count)}</span>
      </span>
    </>
  );
}
