import { CSSProperties, ReactNode } from 'react';

type Variant = 'plain' | 'tone' | 'sun' | 'speed' | 'ink';

const variants: Record<Variant, string> = {
  plain: 'bg-surface',
  tone: 'tone',
  sun: 'tone-sun',
  speed: 'speed',
  ink: 'bg-ink text-background',
};

interface PanelProps {
  variant?: Variant;
  as?: 'div' | 'article' | 'section' | 'aside';
  className?: string;
  /* Used to pass a project's color as the `--c` custom property */
  style?: CSSProperties;
  children: ReactNode;
}

export default function Panel({ variant = 'plain', as: Tag = 'div', className = '', style, children }: PanelProps) {
  return (
    <Tag className={`panel ${variants[variant]} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
