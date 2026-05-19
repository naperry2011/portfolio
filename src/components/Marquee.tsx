'use client';

import { motion } from 'framer-motion';

interface Props {
  items: string[];
  duration?: number;
  className?: string;
}

export default function Marquee({ items, duration = 40, className = '' }: Props) {
  const looped = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-rule py-8 ${className}`}>
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {looped.map((item, i) => (
          <span key={`${item}-${i}`} className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink/70 tracking-tight">
            {item} <span className="text-accent">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
