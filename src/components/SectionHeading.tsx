import type { CSSProperties } from 'react';

interface SectionHeadingProps {
  id: string;
  title: string;
  note?: string;
  as?: 'h1' | 'h2';
  /* Fill color of the XP bar under the heading */
  color?: string;
  /* Large faint katakana behind the heading (decorative) */
  ghost?: string;
}

export default function SectionHeading({ id, title, note, as: Tag = 'h2', color = 'var(--accent)', ghost }: SectionHeadingProps) {
  return (
    <div className="relative">
      {ghost && (
        <span
          aria-hidden
          lang="ja"
          className="pointer-events-none absolute bottom-1 right-0 select-none whitespace-nowrap text-[clamp(64px,13vw,168px)] font-black leading-none text-ink opacity-[0.07]"
        >
          {ghost}
        </span>
      )}
      <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-3">
        <Tag id={id} className="font-display text-4xl sm:text-5xl">
          {title}
        </Tag>
        {note && <p className="font-pixel text-sm text-muted">{note}</p>}
      </div>
      {/* XP bar: ink track with a colored fill that grows in on scroll */}
      <div aria-hidden className="relative h-2.5 bg-ink">
        <div
          data-reveal="xp"
          className="h-full w-[38%] border-r-4 border-ink bg-[var(--c)]"
          style={{ '--c': color } as CSSProperties}
        />
      </div>
    </div>
  );
}
