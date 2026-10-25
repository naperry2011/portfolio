import type { Metadata } from 'next';
import Image from 'next/image';
import Panel from '@/components/Panel';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Player | Cyberlounge',
  description: 'Nicholas Perry: SRE by day, building apps and websites after hours.',
};

interface SaveEntry {
  title: string;
  org: string;
  dates: string;
  body: string | string[];
}

const saves: SaveEntry[] = [
  {
    title: 'Site Reliability Engineer',
    org: 'PNC',
    dates: 'AUG 2024 - PRESENT',
    body: [
      'Drive engineering stability through analytics and metrics',
      'Implement monitoring systems and SLA/SLO management',
      'Lead performance tuning and complex incident response',
      'Mentor junior team members on infrastructure best practices',
    ],
  },
  {
    title: 'DevOps Engineer Intern',
    org: 'Level Up in Tech',
    dates: 'MAR 2024 - NOV 2024',
    body: 'Intensive cloud internship focused on Linux, AWS, Python, Containers, Terraform, and AI integration. Worked on real-world projects with industry mentorship.',
  },
  {
    title: 'IT Engineer',
    org: 'Devoted Health',
    dates: 'SEP 2023 - 2024',
    body: [
      'Optimized cloud integration with SSO and enhanced security protocols',
      'Managed Jira boards and GitHub repositories for cross-functional teams',
      'Pioneered Chromebook deployment and network infrastructure improvements',
    ],
  },
  {
    title: 'IT Engineer',
    org: 'Circle K IT Retail Systems',
    dates: 'MAR 2022 - SEP 2023',
    body: [
      'Deployed and supported retail software and the technology behind it',
      'Managed POS systems, fuel systems, and back-office infrastructure',
      'Improved documentation and drove process-improvement initiatives',
    ],
  },
  {
    title: 'Service Desk Tier 1-2',
    org: 'Belltechlogix',
    dates: 'MAR 2020 - MAR 2022',
    body: 'Provided technical support using ServiceNow, handling system configurations, user support, and detailed documentation of all interactions.',
  },
];

/* Light enough to keep ink text above 4.5:1 */
const saveColors = ['var(--sun)', 'var(--mint)', 'var(--mustard)', 'var(--lilac)', '#ff8fb1'];

const stats: [string, string][] = [
  ['CLASS', 'Builder / SRE'],
  ['APPS', 'Flutter, SwiftUI'],
  ['WEB', 'Next.js, Astro, TypeScript'],
  ['INFRA', 'AWS, Terraform, Docker'],
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6">
      <header className="pb-12">
        <p className="font-pixel text-muted">FILE 03 / PLAYER PROFILE</p>
        <h1 className="mt-3 font-display text-[clamp(44px,8vw,112px)] leading-[0.95]">PLAYER</h1>
      </header>

      <section aria-label="Character sheet" className="flex flex-wrap gap-5 pb-24">
        <Panel className="relative aspect-[3/4] w-full flex-[1_1_300px] shadow-[8px_8px_0_var(--lilac)] sm:max-w-sm">
          <Image
            src="/profile.jpg"
            alt="Portrait of Nicholas Perry"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover grayscale"
          />
        </Panel>
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-5">
          <Panel className="p-6 shadow-[8px_8px_0_var(--sun)] sm:p-8">
            <h2 className="font-display text-3xl sm:text-4xl">NICHOLAS PERRY</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-body">
              <p>
                I came up through help desks and retail IT, moved into cloud and DevOps, and now I&apos;m an
                SRE. The day job is keeping big systems upright, so I know how things break.
              </p>
              <p>
                After hours I build apps and websites: card games from the cookout, tools for people I know,
                and whatever the latest anime or game put in my head.
              </p>
            </div>
          </Panel>
          <Panel variant="ink" as="aside" className="p-6 shadow-[8px_8px_0_var(--mint)]">
            <p className="font-pixel text-sun">STATS</p>
            <dl className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 font-pixel sm:grid-cols-2">
              {stats.map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="w-16 shrink-0 text-[#a8a8b3]">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </div>
      </section>

      <section aria-labelledby="saves-h">
        <SectionHeading id="saves-h" title="SAVE HISTORY" note="where the XP came from" color="var(--lilac)" />
        <ol className="border-4 border-t-0 border-ink bg-surface">
          {saves.map((save, i) => (
            <li
              key={`${save.org}-${save.title}`}
              className="flex flex-wrap gap-x-8 gap-y-3 border-b-2 border-dashed border-rule px-5 py-6 last:border-b-0"
            >
              <div className="w-44 shrink-0 font-pixel">
                <p
                  className="inline-block border-2 border-ink px-2 py-0.5"
                  style={{ backgroundColor: saveColors[i % saveColors.length] }}
                >
                  SAVE {String(saves.length - i).padStart(2, '0')}
                </p>
                <p className="mt-1 text-sm text-muted">{save.dates}</p>
              </div>
              <div className="min-w-0 flex-[999_1_320px]">
                <h3 className="text-xl font-bold">{save.title}</h3>
                <p className="text-muted">{save.org}</p>
                {Array.isArray(save.body) ? (
                  <ul className="ml-5 mt-3 list-disc space-y-1 leading-relaxed text-body">
                    {save.body.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 leading-relaxed text-body">{save.body}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
