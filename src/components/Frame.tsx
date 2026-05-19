'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FrameProps {
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  noTopRule?: boolean;
  noBottomRule?: boolean;
  as?: 'article' | 'section' | 'div';
  children: ReactNode;
  className?: string;
}

const lineVariants = {
  hidden: { scaleX: 0 },
  show:   { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Frame({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  noTopRule = false,
  noBottomRule = false,
  as: Tag = 'article',
  children,
  className = '',
}: FrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const TagAny = Tag as React.ElementType;

  return (
    <TagAny ref={ref} className={`relative ${className}`}>
      {(topLeft || topRight) && (
        <div className="flex items-end justify-between pb-3">
          <span className="label">{topLeft}</span>
          <span className="label label-ink">{topRight}</span>
        </div>
      )}
      {!noTopRule && (
        <motion.div
          className="rule origin-left"
          variants={lineVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        />
      )}
      <div className="py-10 sm:py-14">{children}</div>
      {!noBottomRule && (
        <motion.div
          className="rule origin-right"
          variants={lineVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.15 }}
        />
      )}
      {(bottomLeft || bottomRight) && (
        <div className="flex items-start justify-between pt-3">
          <span className="label">{bottomLeft}</span>
          <span className="label">{bottomRight}</span>
        </div>
      )}
    </TagAny>
  );
}
