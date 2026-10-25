import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

export const metadata: Metadata = {
  title: 'Continue? | Cyberlounge',
  description: 'Book a call with Nicholas Perry, or reach out by email, GitHub, LinkedIn or Medium.',
};

/* Hover colors are light enough for ink text */
const options = [
  { label: 'BOOK A CALL', detail: '15 minutes, free, on Cal.com', href: 'https://cal.com/cybercap2011', color: 'var(--sun)' },
  { label: 'SEND AN EMAIL', detail: 'perry.ai2011@gmail.com', href: 'mailto:perry.ai2011@gmail.com', color: '#ff8a7a' },
  { label: 'GITHUB', detail: '@naperry2011', href: 'https://github.com/naperry2011', color: 'var(--lilac)' },
  { label: 'LINKEDIN', detail: 'in/naperry2011', href: 'https://www.linkedin.com/in/naperry2011/', color: '#8fb3ff' },
  { label: 'MEDIUM', detail: '@naperry2011', href: 'https://medium.com/@naperry2011', color: 'var(--mint)' },
];

export default function Contact() {
  return (
    <section className="bg-ink px-4 pb-28 pt-20 text-background sm:px-6">
      <div className="mx-auto max-w-3xl text-center [container-type:inline-size]">
        <p className="font-pixel text-[#a8a8b3]">FILE 04 / CONTINUE</p>
        <h1 className="mt-4 font-display text-[clamp(32px,12.5cqi,112px)] leading-none">CONTINUE?</h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#d8d8de]">
          Got an app, a site, or an idea you can&apos;t stop thinking about? Pick an option. A quick call is
          the fastest way in.
        </p>
      </div>

      <ul className="mx-auto mt-14 max-w-xl border-4 border-background">
        {options.map((option, i) => {
          const external = option.href.startsWith('http');
          return (
            <li key={option.label} className="border-b-2 border-dashed border-[#55555f] last:border-b-0">
              <a
                href={option.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-4 hover:bg-[var(--c)] hover:text-ink focus-visible:bg-[var(--c)] focus-visible:text-ink"
                style={{ '--c': option.color } as CSSProperties}
              >
                <span className="font-pixel text-xl sm:text-2xl">
                  <span
                    aria-hidden
                    className={`text-accent ${i === 0 ? '' : 'invisible group-hover:visible group-focus-visible:visible'}`}
                  >
                    ▶{' '}
                  </span>
                  {option.label}
                </span>
                <span className="text-sm text-[#a8a8b3] group-hover:text-ink group-focus-visible:text-ink">
                  {option.detail}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
