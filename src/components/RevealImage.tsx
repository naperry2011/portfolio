'use client';

import Image, { ImageProps } from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function RevealImage(props: ImageProps & { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { className = '', ...rest } = props;

  return (
    <motion.div
      ref={ref}
      className={`relative h-full w-full ${className}`}
      animate={{
        filter: inView ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.7)',
      }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image {...rest} alt={rest.alt} />
    </motion.div>
  );
}
