import { ReactNode } from 'react';

type Variant = 'plain' | 'tone' | 'speed' | 'ink';

const variants: Record<Variant, string> = {
  plain: 'bg-surface',
  tone: 'tone',
  speed: 'speed',
  ink: 'bg-ink text-background',
};

interface PanelProps {
  variant?: Variant;
  as?: 'div' | 'article' | 'section' | 'aside';
  className?: string;
  children: ReactNode;
}

export default function Panel({ variant = 'plain', as: Tag = 'div', className = '', children }: PanelProps) {
  return <Tag className={`panel ${variants[variant]} ${className}`}>{children}</Tag>;
}
