import type { CSSProperties } from 'react';

interface SectionHeadingProps {
  id: string;
  title: string;
  note?: string;
  as?: 'h1' | 'h2';
  /* Fill color of the XP bar under the heading */
  color?: string;
}

export default function SectionHeading({ id, title, note, as: Tag = 'h2', color = 'var(--accent)' }: SectionHeadingProps) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-3">
        <Tag id={id} className="font-display text-4xl sm:text-5xl">
          {title}
        </Tag>
        {note && <p className="font-pixel text-sm text-muted">{note}</p>}
      </div>
      {/* XP bar: ink track with a colored fill */}
      <div aria-hidden className="h-2.5 bg-ink">
        <div className="h-full w-[38%] border-r-4 border-ink bg-[var(--c)]" style={{ '--c': color } as CSSProperties} />
      </div>
    </div>
  );
}
