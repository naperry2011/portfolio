'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* Marks [data-reveal] elements with data-in as they scroll into view. CSS in globals.css does the animating. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-in])'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.setAttribute('data-in', ''));
      return;
    }

    // Anything already on screen is marked before the hidden state switches on, so nothing flashes
    const pending = els.filter((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.setAttribute('data-in', '');
        return false;
      }
      return true;
    });
    document.documentElement.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-in', '');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
