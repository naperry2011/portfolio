import type { Metadata } from 'next';
import QuestCard from '@/components/QuestCard';
import QuestLogRow from '@/components/QuestLogRow';
import SectionHeading from '@/components/SectionHeading';
import { apps, sideStory, sites } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Quest Log | Cyberlounge',
  description: 'Every app and site Nicholas Perry is building or has shipped.',
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6">
      <header className="pb-16">
        <p className="font-pixel text-muted">FILE 02 / SAVE DATA</p>
        <h1 className="mt-3 font-display text-[clamp(44px,8vw,112px)] leading-[0.95]">QUEST LOG</h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed">
          Everything I&apos;m building or have shipped: apps first, then sites and client work.
        </p>
      </header>

      <section aria-labelledby="apps-h" className="pb-24">
        <SectionHeading id="apps-h" title="MAIN QUESTS" note="apps in active development" />
        <div className="mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {apps.map((app, i) => (
            <QuestCard key={app.slug} project={app} detailed priority={i < 2} />
          ))}
        </div>
      </section>

      <section aria-labelledby="side-h" className="pb-24">
        <SectionHeading id="side-h" title="SIDE STORY" note="anime, games and music" />
        <ul className="border-4 border-t-0 border-ink bg-surface">
          <QuestLogRow project={sideStory} detailed />
        </ul>
      </section>

      <section aria-labelledby="sites-h">
        <SectionHeading id="sites-h" title="SITES" note="live, in progress and client work" />
        <ul className="border-4 border-t-0 border-ink bg-surface">
          {sites.map((site) => (
            <QuestLogRow key={site.slug} project={site} detailed />
          ))}
        </ul>
      </section>
    </div>
  );
}
