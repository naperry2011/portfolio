'use client';

import { FaServer, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineEntry {
  title: string;
  org: string;
  dates: string;
  body: string | string[];
}

const timeline: TimelineEntry[] = [
  {
    title: 'Site Reliability Engineer',
    org: 'PNC',
    dates: 'August 2024 — Present',
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
    dates: 'March 2024 — November 2024',
    body: 'Intensive cloud internship focused on Linux, AWS, Python, Containers, Terraform, and AI integration. Worked on real-world projects with industry mentorship.',
  },
  {
    title: 'IT Engineer',
    org: 'Devoted Health',
    dates: 'September 2023 — 2024',
    body: [
      'Optimized cloud integration with SSO and enhanced security protocols',
      'Managed Jira boards and GitHub repositories for cross-functional teams',
      'Pioneered Chromebook deployment and network infrastructure improvements',
    ],
  },
  {
    title: 'IT Engineer',
    org: 'Circle K IT Retail Systems',
    dates: 'March 2022 — September 2023',
    body: [
      'Deployed and supported retail systems software and technology',
      'Managed POS systems, fuel systems, and back-office infrastructure',
      'Enhanced documentation and process improvement initiatives',
    ],
  },
  {
    title: 'Service Desk Tier 1-2',
    org: 'Belltechlogix',
    dates: 'March 2020 — March 2022',
    body: 'Provided technical support using ServiceNow, handling system configurations, user support, and detailed documentation of all interactions.',
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="eyebrow mb-6">About</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6">
          Nicholas Perry.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          An engineer bridging product, infrastructure, and reliability — currently based in the
          US, working across software and cloud.
        </p>
      </motion.div>

      {/* Journey */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="relative w-full max-w-xs aspect-[3/4] border border-border bg-surface overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Nicholas Perry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 33vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="eyebrow">The journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-foreground">
            From helpdesk to infrastructure.
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Since 2018 I&apos;ve worked across the tech stack — starting in service desk and
              endpoint support, moving through retail systems and IT engineering, and arriving
              at cloud and reliability work.
            </p>
            <p>
              I treat technology as a craft. Whether I&apos;m architecting a cloud system or
              shipping a product surface, the goal is the same: a clear plan, working software,
              and code that a future engineer can pick up without friction.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Expertise */}
      <section className="mb-32">
        <p className="eyebrow mb-8">Expertise</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 border border-border bg-surface">
            <FaCloud className="text-2xl text-muted mb-6" />
            <h3 className="font-serif text-xl text-foreground mb-3">Cloud &amp; DevOps</h3>
            <p className="text-sm text-muted leading-relaxed">
              Building and optimizing infrastructure with AWS, Terraform, and modern DevOps
              practices.
            </p>
          </div>
          <div className="p-8 border border-border bg-surface">
            <FaServer className="text-2xl text-muted mb-6" />
            <h3 className="font-serif text-xl text-foreground mb-3">Infrastructure &amp; SRE</h3>
            <p className="text-sm text-muted leading-relaxed">
              Ensuring reliability and performance through monitoring, automation, and incident
              response.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-32">
        <p className="eyebrow mb-8">Experience</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12">
          Professional timeline.
        </h2>
        <div className="space-y-12">
          {timeline.map((entry) => (
            <div
              key={`${entry.org}-${entry.title}`}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[4.5px] rounded-full bg-accent" />
              <p className="eyebrow mb-2">{entry.dates}</p>
              <h3 className="font-serif text-xl text-foreground mb-1">{entry.title}</h3>
              <p className="text-sm text-muted mb-4">{entry.org}</p>
              {Array.isArray(entry.body) ? (
                <ul className="text-sm text-muted leading-relaxed list-disc ml-4 space-y-1">
                  {entry.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted leading-relaxed">{entry.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-32">
        <p className="eyebrow mb-8">Principles</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12">
          How I work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-border bg-surface">
            <h3 className="font-serif text-lg text-foreground mb-3">Clarity first</h3>
            <p className="text-sm text-muted leading-relaxed">
              A clearly scoped problem is half the solution. I start every engagement with
              shaping and tradeoffs.
            </p>
          </div>
          <div className="p-8 border border-border bg-surface">
            <h3 className="font-serif text-lg text-foreground mb-3">Quality compounds</h3>
            <p className="text-sm text-muted leading-relaxed">
              Type safety, tests, and observability aren&apos;t overhead — they&apos;re what lets
              future changes happen quickly.
            </p>
          </div>
          <div className="p-8 border border-border bg-surface">
            <h3 className="font-serif text-lg text-foreground mb-3">Ship, then refine</h3>
            <p className="text-sm text-muted leading-relaxed">
              Working software in production beats elegant software on a branch. Iterate from
              real feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Tech */}
      <section>
        <p className="eyebrow mb-8">Beyond tech</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12">
          Off the clock.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-border bg-surface">
            <h3 className="font-serif text-lg text-foreground mb-3">Gaming</h3>
            <p className="text-sm text-muted mb-4 leading-relaxed">
              Lifelong gamer drawn to deep narratives and challenging gameplay.
            </p>
            <ul className="text-sm text-muted space-y-1">
              <li>Bloodborne</li>
              <li>Tekken 3</li>
              <li>Persona 5</li>
              <li>Metal Gear Solid 3</li>
              <li>Onimusha 2</li>
            </ul>
          </div>
          <div className="p-8 border border-border bg-surface">
            <h3 className="font-serif text-lg text-foreground mb-3">Anime</h3>
            <p className="text-sm text-muted mb-4 leading-relaxed">
              Appreciator of compelling storytelling and artistic animation.
            </p>
            <ul className="text-sm text-muted space-y-1">
              <li>Yu Yu Hakusho</li>
              <li>Your Lie in April</li>
              <li>Food Wars</li>
              <li>Fullmetal Alchemist: Brotherhood</li>
              <li>Blue Giant</li>
            </ul>
          </div>
          <div className="p-8 border border-border bg-surface">
            <h3 className="font-serif text-lg text-foreground mb-3">Manga</h3>
            <p className="text-sm text-muted mb-4 leading-relaxed">
              Immersed in the world of visual storytelling.
            </p>
            <ul className="text-sm text-muted space-y-1">
              <li>Kingdom</li>
              <li>Diamond no Ace</li>
              <li>Wind Breaker</li>
              <li>Sakamoto Days</li>
              <li>Demon Slayer</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
