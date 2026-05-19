'use client';

import Image, { ImageProps } from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Project image wrapper. Starts desaturated/dim, blooms to full color
 * when scrolled into view. Passes all props (including `className`) through
 * to next/image so `object-cover` / `object-contain` actually take effect.
 */
export default function RevealImage(props: ImageProps) {
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
      <Image {...props} alt={props.alt} />
    </motion.div>
  );
}
