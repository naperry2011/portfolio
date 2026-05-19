'use client';

import { motion } from 'framer-motion';

interface Props {
  text: string;
  /** stagger between chars in seconds */
  stagger?: number;
  /** initial delay */
  delay?: number;
  className?: string;
}

/**
 * Splits text into spans and reveals each char with a stagger.
 * Fraunces weight morphs from 300 → 600 across the reveal.
 */
export default function SplitText({ text, stagger = 0.04, delay = 0, className = '' }: Props) {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          aria-hidden
          initial={{ y: '0.4em', opacity: 0, fontWeight: 300 }}
          animate={{ y: 0, opacity: 1, fontWeight: 600 }}
          transition={{
            duration: 0.8,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}
