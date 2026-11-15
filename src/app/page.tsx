import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import Countdown from '@/components/Countdown';
import Panel from '@/components/Panel';
import QuestCard from '@/components/QuestCard';
import QuestLogRow from '@/components/QuestLogRow';
import SectionHeading from '@/components/SectionHeading';
import StatusTag from '@/components/StatusTag';
import TypeLine from '@/components/TypeLine';
import { apps, sideStory, sites } from '@/data/projects';

/* Slam-in order for the hero panels */
const slam = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Home() {
  const [lead, second, ...rest] = apps;

  return (
    <div className="overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero: manga splash page */}
        <section className="relative grid grid-cols-1 gap-4 pb-24 pt-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <span
            aria-hidden
            lang="ja"
            className="sfx slam absolute -top-1 right-0 z-10 hidden text-[clamp(56px,7vw,96px)] [rotate:9deg] lg:block"
            style={slam(6)}
          >
            ドン!
          </span>

          <Panel
            className="slam speed-spin min-w-0 px-[clamp(14px,4vw,40px)] py-[clamp(20px,5vw,52px)]"
            style={slam(0)}
          >
            <div
              className="slam border-[3px] border-ink bg-background px-[clamp(16px,3vw,30px)] py-[clamp(18px,3vw,28px)] shadow-[8px_8px_0_var(--accent)] [container-type:inline-size]"
              style={slam(3)}
            >
              <p className="font-pixel text-muted">FILE 01 / PLAYER</p>
              <h1 className="mt-3 font-display text-[clamp(32px,13.5cqi,112px)] leading-[0.95]">
                NICHOLAS
                <br />
                PERRY
              </h1>
              {/* RPG dialogue box */}
              <p className="relative mt-5 border-[3px] border-ink bg-surface px-4 pb-6 pt-3 font-pixel text-lg leading-relaxed shadow-[inset_0_0_0_2px_var(--surface),inset_0_0_0_4px_var(--ink)]">
                <TypeLine text="I build apps and websites. Anime and games are where most of the ideas come from." />
                <span aria-hidden className="blink absolute bottom-1.5 right-3 text-accent">
                  ▼
                </span>
              </p>
            </div>
          </Panel>

          {/* The player */}
          <Panel
            className="slam relative aspect-[4/5] overflow-hidden shadow-[10px_10px_0_var(--accent)] [rotate:1.5deg] lg:row-span-2 lg:aspect-auto lg:min-h-[420px]"
            style={slam(1)}
          >
            <Image
              src="/profile.jpg"
              alt="Portrait of Nicholas Perry"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover contrast-125 grayscale"
            />
            <div aria-hidden className="halftone absolute inset-0" />
            <p className="absolute bottom-3 left-3 border-2 border-ink bg-sun px-2.5 py-1 font-pixel text-sm">
              PLAYER 1 <span aria-hidden className="blink text-accent">▶</span> READY
            </p>
          </Panel>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Panel variant="ink" className="slam px-6 py-5 shadow-[6px_6px_0_var(--cobalt)]" style={slam(4)}>
              <p className="font-pixel text-sun">NOW PLAYING</p>
              <p className="mt-2 text-lg leading-relaxed">
                Two cookout card games, a reading journal, and an app that pays you to poop.
              </p>
            </Panel>
            <Panel variant="sun" className="slam flex flex-col justify-end px-6 py-5" style={slam(5)}>
              <p className="self-start rounded-[18px_18px_18px_4px] border-2 border-ink bg-surface px-3 py-2 font-bold">
                SRE by day. Save point after hours.
              </p>
            </Panel>
          </div>
        </section>

        {/* Main quests */}
        <section aria-labelledby="quests-h" className="pb-24">
          <SectionHeading id="quests-h" title="MAIN QUESTS" note="apps in active development" color="var(--accent)" ghost="クエスト" />
          <div className="mt-7 flex flex-wrap gap-5">
            <QuestCard project={lead} className="min-w-0 flex-[999_1_600px]" priority />
            <QuestCard project={second} className="min-w-0 flex-[1_1_340px]" />
          </div>
          <div className="mt-5 flex flex-wrap gap-5">
            {rest.map((app) => (
              <QuestCard key={app.slug} project={app} className="min-w-0 flex-[1_1_380px]" />
            ))}
          </div>
        </section>

        {/* Side story */}
        <section aria-labelledby="side-h" className="flex flex-wrap gap-5 pb-24">
          <Panel reveal className="relative aspect-[16/10] min-w-0 flex-[999_1_560px] shadow-[8px_8px_0_var(--mustard)]">
            <Image
              src={sideStory.image}
              alt={sideStory.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top"
            />
          </Panel>
          <Panel
            reveal
            variant="tone"
            className="flex flex-[1_1_320px] flex-col justify-center gap-4 p-7 shadow-[8px_8px_0_var(--ink)]"
            style={{ backgroundColor: 'color-mix(in srgb, var(--mustard) 45%, white)' }}
          >
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
        <section aria-labelledby="log-h" className="pb-16">
          <SectionHeading id="log-h" title="QUEST LOG" note="sites and client work" color="var(--cobalt)" ghost="ログ" />
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
      <div aria-hidden className="halftone-fade" />
      <section aria-labelledby="continue-h" className="bg-ink px-4 pb-24 pt-16 text-center text-background sm:px-6">
        <h2 id="continue-h" className="font-display text-[clamp(40px,9vw,120px)] leading-none">
          CONTINUE?
        </h2>
        <p className="mt-4">
          <Countdown className="text-[clamp(48px,8vw,96px)] text-sun" />
        </p>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#d8d8de]">
          Got an app, a site, or an idea you can&apos;t stop thinking about? Pick an option.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-x-10 gap-y-3 font-pixel text-xl sm:text-2xl">
          <a href="https://cal.com/cybercap2011" target="_blank" rel="noopener noreferrer" className="px-2 py-3 hover:text-sun">
            <span aria-hidden className="blink text-accent">▶ </span>
            BOOK A CALL
          </a>
          <Link href="/contact" className="px-2 py-3 hover:text-sun">
            OTHER WAYS IN
          </Link>
        </div>
      </section>
    </div>
  );
}
