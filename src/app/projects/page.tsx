'use client';

import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/MotionWrapper';
import RevealImage from '@/components/RevealImage';
import TiltCard from '@/components/TiltCard';

interface Project {
  n: string;
  title: string;
  kind: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  image: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    n: '01',
    kind: 'BRAND',
    title: 'Rooted Legacy',
    tagline: 'An Indianapolis urban farm growing food, classes, and gathering space.',
    description:
      'A community-focused web presence for an Indianapolis-based urban farm. The site introduces the farm, surfaces gardening classes and seasonal events, distributes information about produce shares, and integrates live weather data and mapping so visitors can plan a trip. Designed to feel personal and rooted rather than corporate — the brand is about land, neighborhood, and the people who tend it.',
    role: 'DESIGN & DEVELOPMENT',
    year: '2025',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'OpenWeather API', 'Google Maps', 'Vercel'],
    image: '/projects/rooted-legacy.jpg',
    liveUrl: 'https://rooted-legacy-phi.vercel.app/',
  },
  {
    n: '02',
    kind: 'ADVISORY',
    title: 'Reality Saving',
    tagline: 'Strategic budgeting and financial systems for small businesses and professionals.',
    description:
      'A financial advisory platform that helps clients move from reactive spending to intentional planning. The site presents a clear diagnostic → design → implementation → monitoring framework, distinct service tracks for business advisory and personal finance, and a path for prospects to start a strategy conversation. Built with Astro for a fast, content-first delivery.',
    role: 'DESIGN & DEVELOPMENT',
    year: '2025',
    stack: ['Astro', 'Tailwind CSS', 'Vercel'],
    image: '/projects/reality-saving.webp',
    liveUrl: 'https://reality-saving.vercel.app/',
  },
  {
    n: '03',
    kind: 'PRODUCT',
    title: 'The Motions',
    tagline: 'A solopreneur brand companion built on the Mo Town universe.',
    description:
      'A narrative-driven brand companion for solopreneurs. The Motions maps the internal psychological states of independent work through a cast of character archetypes — from Quake (anxiety) to Flo (flow). The site introduces the Mo Town universe, runs a 90-second motion-finding quiz, and gates access to a comprehensive workbook with 8 modules and 216 paths. Built as a digital product surface, not a marketing site.',
    role: 'DESIGN & DEVELOPMENT',
    year: '2025',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    image: '/projects/the-motions.webp',
    liveUrl: 'https://the-motions.vercel.app/',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top title block */}
        <div className="flex items-end justify-between pt-12 pb-3">
          <span className="label">003 / PROJECTS — INDEX</span>
          <span className="label">{projects.length} ENTRIES</span>
        </div>
        <div className="rule" />

        {/* Page hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 sm:py-28"
        >
          <p className="label mb-6">SELECTED WORK</p>
          <h1 className="font-serif hero-opsz text-ink text-5xl sm:text-6xl md:text-7xl leading-[1] tracking-tight">
            Projects.
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mt-8">
            A few of the sites and products I&apos;ve built recently. Each one was
            scoped, designed, and shipped end-to-end.
          </p>
        </motion.section>

        {/* Project plates */}
        <div className="space-y-24">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <MotionDiv
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <TiltCard>
                  <div className="flex items-end justify-between pb-3">
                    <span className="label label-ink">{p.n} / 03</span>
                    <span className="label">{p.kind} — {p.year}</span>
                  </div>
                  <div className="rule" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 items-start">
                    <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[5/4] overflow-hidden bg-surface border border-rule">
                        <RevealImage
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      </div>
                    </div>

                    <div className={`lg:col-span-5 space-y-5 ${reverse ? 'lg:order-1' : ''}`}>
                      <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ink">
                        {p.title}
                      </h2>
                      <p className="text-base text-ink leading-relaxed">{p.tagline}</p>
                      <p className="text-sm text-muted leading-relaxed">{p.description}</p>
                    </div>
                  </div>

                  <div className="rule" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="label border border-rule px-2 py-1">{t}</span>
                      ))}
                    </div>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label label-ink border-b border-accent pb-0.5 hover:text-accent transition-colors self-start"
                    >
                      VISIT SITE →
                    </a>
                  </div>
                </TiltCard>
              </MotionDiv>
            );
          })}
        </div>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-16 border-t border-rule text-center"
        >
          <p className="label mb-4">END OF INDEX</p>
          <p className="text-muted mb-8 text-lg">Have a project in mind?</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide bg-ink text-background hover:opacity-90 transition-opacity"
          >
            Start a Conversation <span className="ml-2">→</span>
          </a>
        </motion.section>

        <div className="h-32" />
      </div>
    </div>
  );
}
