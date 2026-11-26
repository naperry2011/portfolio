import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Countdown from '@/components/Countdown';
import JsonLd from '@/components/JsonLd';
import Panel from '@/components/Panel';
import SectionHeading from '@/components/SectionHeading';
import { BOOKING_URL, comparison, packages, steps } from '@/data/packages';
import { PERSON_ID, SITE_URL, pageMeta } from '@/lib/seo';

const DESCRIPTION =
  'Three ready-to-launch websites for personal trainers, customized with your photos, story, colors and programs. Try each live demo, then book a free call.';

export const metadata: Metadata = pageMeta('/trainer-websites', 'Websites for personal trainers | Cyberlounge', DESCRIPTION);

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': SITE_URL + '/trainer-websites#service',
  url: SITE_URL + '/trainer-websites',
  name: 'Websites for personal trainers',
  serviceType: 'Website design and development',
  description: DESCRIPTION,
  provider: { '@id': PERSON_ID },
  audience: { '@type': 'Audience', audienceType: 'Personal trainers and fitness coaches' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Trainer website packages',
    itemListElement: packages.map((pkg) => ({
      '@type': 'Offer',
      name: pkg.name,
      description: pkg.tagline,
      ...(pkg.price ? { price: pkg.price.replace(/[^0-9.]/g, ''), priceCurrency: 'USD' } : {}),
    })),
  },
};

function BookButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`pressable inline-block border-[3px] border-ink bg-sun px-5 py-3 font-pixel text-xl shadow-[7px_7px_0_var(--c)] ${className}`}
      style={{ '--c': 'var(--accent)' } as CSSProperties}
    >
      <span aria-hidden className="blink text-accent">
        ▶{' '}
      </span>
      BOOK A FREE CALL
    </a>
  );
}

export default function TrainerWebsites() {
  return (
    <div className="overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <header className="pb-20">
          <p className="font-pixel text-muted">FILE 05 / ITEM SHOP</p>
          <h1 className="mt-3 font-display text-[clamp(32px,7vw,88px)] leading-[1.02]">
            WEBSITES FOR PERSONAL TRAINERS
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
            Three ready-to-launch sites, customized with your photos, story, colors and programs. Click through each
            live demo first, then book a call when you know which one fits.
          </p>
          <p className="mt-8">
            <BookButton />
          </p>
        </header>

        <section aria-labelledby="packages-h" className="pb-24">
          <SectionHeading
            id="packages-h"
            title="PACKAGES"
            note="three tiers, each with a live demo"
            color="var(--sun)"
            ghost="ショップ"
          />
          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Panel
                key={pkg.name}
                as="article"
                reveal
                className="flex flex-col p-6 shadow-[8px_8px_0_var(--c)]"
                style={{ '--c': pkg.color } as CSSProperties}
              >
                <p className="self-start border-2 border-ink bg-[var(--c)] px-2 py-0.5 font-pixel">{pkg.tier}</p>
                <h3 className="mt-4 font-display text-4xl uppercase">{pkg.name}</h3>
                <p className="mt-2 text-lg font-bold">{pkg.tagline}</p>
                <p className="mt-2 leading-relaxed text-body">Best for: {pkg.bestFor}</p>
                <ul className="mt-5 space-y-2 border-t-2 border-dashed border-rule pt-5 leading-relaxed">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ▶
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 font-pixel text-xl">{pkg.price ?? 'PRICE: QUOTED ON THE CALL'}</p>
                <a
                  href={pkg.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 border-[3px] border-ink px-4 py-2.5 text-center font-pixel text-lg hover:bg-[var(--c)]"
                >
                  VIEW LIVE DEMO<span className="sr-only">: {pkg.name}</span>
                </a>
              </Panel>
            ))}
          </div>
        </section>

        <section aria-labelledby="compare-h" className="pb-24">
          <SectionHeading id="compare-h" title="COMPARE" note="what each tier includes" color="var(--mint)" />
          <div className="overflow-x-auto border-4 border-t-0 border-ink bg-surface">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b-4 border-ink font-pixel">
                  <th scope="col" className="px-4 py-3 font-normal">
                    FEATURE
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} scope="col" className="w-24 px-2 py-3 text-center font-normal uppercase">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, from]) => (
                  <tr key={feature} className="border-b-2 border-dashed border-rule last:border-b-0">
                    <th scope="row" className="px-4 py-3 font-medium">
                      {feature}
                    </th>
                    {packages.map((pkg, i) => (
                      <td key={pkg.name} className="px-2 py-3 text-center">
                        {i >= from ? (
                          <>
                            <span
                              aria-hidden
                              className="inline-block h-4 w-4 border-2 border-ink align-middle"
                              style={{ backgroundColor: pkg.color }}
                            />
                            <span className="sr-only">Included</span>
                          </>
                        ) : (
                          <>
                            <span aria-hidden className="text-muted">
                              -
                            </span>
                            <span className="sr-only">Not included</span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="how-h" className="pb-20">
          <SectionHeading id="how-h" title="HOW IT WORKS" note="three steps" color="var(--lilac)" ghost="スタート" />
          <ol className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map(([title, body], i) => (
              <li key={title}>
                <Panel reveal className="h-full p-6 shadow-[6px_6px_0_var(--ink)]">
                  <p className="font-pixel text-accent">STAGE {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 font-display text-2xl">{title}</h3>
                  <p className="mt-3 leading-relaxed text-body">{body}</p>
                </Panel>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div aria-hidden className="halftone-fade" />
      <section aria-labelledby="continue-h" className="bg-ink px-4 pb-24 pt-16 text-center text-background sm:px-6">
        <h2 id="continue-h" className="font-display text-[clamp(40px,9vw,120px)] leading-none">
          CONTINUE?
        </h2>
        <p className="mt-4">
          <Countdown className="text-[clamp(48px,8vw,96px)] text-sun" />
        </p>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#d8d8de]">
          Not sure which package fits? Tell me about your business on a call. It is 15 minutes and free.
        </p>
        <p className="mt-9">
          <BookButton className="text-ink" />
        </p>
      </section>
      <JsonLd data={serviceJsonLd} />
    </div>
  );
}
