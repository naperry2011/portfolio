import Image from 'next/image';
import Link from 'next/link';
import Panel from '@/components/Panel';
import QuestCard from '@/components/QuestCard';
import QuestLogRow from '@/components/QuestLogRow';
import SectionHeading from '@/components/SectionHeading';
import StatusTag from '@/components/StatusTag';
import { apps, sideStory, sites } from '@/data/projects';

export default function Home() {
  const [lead, second, ...rest] = apps;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="flex flex-wrap gap-3.5 pb-24 pt-8">
          <Panel variant="speed" className="min-w-0 flex-[999_1_560px] px-[clamp(14px,4vw,40px)] py-[clamp(20px,5vw,56px)]">
            <div className="max-w-2xl border-[3px] border-ink bg-background px-[clamp(16px,3vw,30px)] py-[clamp(18px,3vw,28px)]">
              <p className="font-pixel text-muted">FILE 01 / PLAYER</p>
              <h1 className="mt-3 font-display text-[clamp(38px,7.5vw,104px)] leading-[0.95]">
                NICHOLAS
                <br />
                PERRY
              </h1>
              <p className="mt-5 text-xl font-medium leading-relaxed">
                I build apps and websites. Anime and games are where most of the ideas come from.
              </p>
            </div>
          </Panel>
          <div className="flex flex-[1_1_300px] flex-col gap-3.5">
            <Panel variant="ink" className="px-6 py-5">
              <p className="font-pixel text-accent">NOW PLAYING</p>
              <p className="mt-2 text-lg leading-relaxed">
                Two cookout card games, a reading journal, and an app that pays you to poop.
              </p>
            </Panel>
            <Panel variant="tone" className="flex flex-1 flex-col justify-end px-6 py-5">
              <p className="self-start rounded-[18px_18px_18px_4px] border-2 border-ink bg-surface px-3 py-2 font-bold">
                SRE by day. Save point after hours.
              </p>
            </Panel>
          </div>
        </section>

        {/* Main quests */}
        <section aria-labelledby="quests-h" className="pb-24">
          <SectionHeading id="quests-h" title="MAIN QUESTS" note="apps in active development" />
          <div className="mt-7 flex flex-wrap gap-3.5">
            <QuestCard project={lead} className="min-w-0 flex-[999_1_600px]" priority />
            <QuestCard project={second} className="min-w-0 flex-[1_1_340px]" />
          </div>
          <div className="mt-3.5 flex flex-wrap gap-3.5">
            {rest.map((app) => (
              <QuestCard key={app.slug} project={app} className="min-w-0 flex-[1_1_380px]" />
            ))}
          </div>
        </section>

        {/* Side story */}
        <section aria-labelledby="side-h" className="flex flex-wrap gap-3.5 pb-24">
          <Panel className="relative aspect-[16/10] min-w-0 flex-[999_1_560px]">
            <Image
              src={sideStory.image}
              alt={sideStory.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top"
            />
          </Panel>
          <Panel variant="tone" className="flex flex-[1_1_320px] flex-col justify-center gap-4 p-7">
            <p className="font-pixel text-muted">SIDE STORY</p>
            <h2 id="side-h" className="self-start bg-surface px-1.5 font-display text-4xl leading-tight">
              BEATS &amp; BACKLOG
            </h2>
            <p className="border-2 border-ink bg-surface px-4 py-3.5 text-lg leading-relaxed">{sideStory.blurb}</p>
            <p className="font-pixel">
              <StatusTag status={sideStory.status} />
              {' / '}
              <a href={sideStory.links[0].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                {sideStory.links[0].label}
              </a>
            </p>
          </Panel>
        </section>

        {/* Quest log */}
        <section aria-labelledby="log-h" className="pb-24">
          <SectionHeading id="log-h" title="QUEST LOG" note="sites and client work" />
          <ul className="border-4 border-t-0 border-ink bg-surface">
            {sites.map((site) => (
              <QuestLogRow key={site.slug} project={site} />
            ))}
          </ul>
          <p className="mt-4 text-right font-pixel">
            <Link href="/projects" className="underline hover:text-accent">
              FULL QUEST LOG ▶
            </Link>
          </p>
        </section>
      </div>

      {/* Continue */}
      <section aria-labelledby="continue-h" className="bg-ink px-4 py-24 text-center text-background sm:px-6">
        <h2 id="continue-h" className="font-display text-[clamp(40px,9vw,120px)] leading-none">
          CONTINUE?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#d8d8de]">
          Got an app, a site, or an idea you can&apos;t stop thinking about? Pick an option.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-x-10 gap-y-3 font-pixel text-xl sm:text-2xl">
          <a href="https://cal.com/cybercap2011" target="_blank" rel="noopener noreferrer" className="px-2 py-3 hover:text-accent">
            <span aria-hidden className="text-accent">▶ </span>
            BOOK A CALL
          </a>
          <Link href="/contact" className="px-2 py-3 hover:text-accent">
            OTHER WAYS IN
          </Link>
        </div>
      </section>
    </>
  );
}
