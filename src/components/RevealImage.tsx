'use client';

import Image, { ImageProps } from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props extends Omit<ImageProps, 'style'> {
  fit?: 'cover' | 'contain';
}

/**
 * Project image wrapper. Starts desaturated/dim, blooms to full color
 * when scrolled into view. `objectFit` is applied via inline style so it
 * is guaranteed to take effect regardless of className specificity.
 */
export default function RevealImage({ fit = 'contain', ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full"
      animate={{
        filter: inView ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.7)',
      }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image {...props} alt={props.alt} style={{ objectFit: fit }} />
    </motion.div>
  );
}
