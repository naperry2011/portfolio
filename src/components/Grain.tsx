'use client';

import { useEffect, useState } from 'react';

export default function Grain() {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d', { alpha: true })!;

    const draw = () => {
      const img = ctx.createImageData(size, size);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.floor(Math.random() * 255);
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      setUrl(c.toDataURL('image/png'));
    };

    draw();
    const id = setInterval(draw, 120);
    return () => clearInterval(id);
  }, []);

  if (!url) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: `url(${url})`, backgroundRepeat: 'repeat' }}
    />
  );
}
