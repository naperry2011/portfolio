'use client';

import { FaServer, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Frame from '@/components/Frame';

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
    dates: 'AUG 2024 — PRESENT',
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
    dates: 'MAR 2024 — NOV 2024',
    body: 'Intensive cloud internship focused on Linux, AWS, Python, Containers, Terraform, and AI integration. Worked on real-world projects with industry mentorship.',
  },
  {
    title: 'IT Engineer',
    org: 'Devoted Health',
    dates: 'SEP 2023 — 2024',
    body: [
      'Optimized cloud integration with SSO and enhanced security protocols',
      'Managed Jira boards and GitHub repositories for cross-functional teams',
      'Pioneered Chromebook deployment and network infrastructure improvements',
    ],
  },
  {
    title: 'IT Engineer',
    org: 'Circle K IT Retail Systems',
    dates: 'MAR 2022 — SEP 2023',
    body: [
      'Deployed and supported retail software and the technology behind it',
      'Managed POS systems, fuel systems, and back-office infrastructure',
      'Improved documentation and drove process-improvement initiatives',
    ],
  },
  {
    title: 'Service Desk Tier 1-2',
    org: 'Belltechlogix',
    dates: 'MAR 2020 — MAR 2022',
    body: 'Provided technical support using ServiceNow, handling system configurations, user support, and detailed documentation of all interactions.',
  },
];

const practice = [
  { n: '01', title: 'Clarity first', body: "A clearly scoped problem is half the solution. I start every engagement with shaping and tradeoffs." },
  { n: '02', title: 'Quality compounds', body: "Type safety, tests, and observability aren't overhead — they're what let future changes ship quickly." },
  { n: '03', title: 'Ship, then refine', body: "Working software in production beats elegant software on a branch. Iterate from real feedback." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top title block */}
        <div className="flex items-end justify-between pt-12 pb-3">
          <span className="label">002 / ABOUT — NICHOLAS PERRY</span>
          <span className="label">REV 2026.05</span>
        </div>
        <div className="rule" />

        {/* Hero: portrait + dossier */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-5">
            <div className="flex items-end justify-between pb-2">
              <span className="label">PLATE I</span>
              <span className="label">PORTRAIT</span>
            </div>
            <div className="rule" />
            <div className="relative aspect-[3/4] my-3 border border-rule bg-surface overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Nicholas Perry"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 33vw"
              />
            </div>
            <div className="rule" />
            <div className="flex items-start justify-between pt-2">
              <span className="label">NICHOLAS PERRY</span>
              <span className="label">SRE · ENGINEER</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="label">DOSSIER</p>
            <p className="text-2xl sm:text-3xl text-ink font-serif leading-tight">
              An engineer bridging product, infrastructure, and reliability.
            </p>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Since 2018 I&apos;ve worked across the tech stack — starting in service
                desk and endpoint support, moving through retail systems and IT
                engineering, and arriving at cloud and reliability work.
              </p>
              <p>
                I treat technology as a craft. Whether I&apos;m architecting a cloud
                system or shipping a product surface, the goal is the same: a clear
                plan, working software, and code that a future engineer can pick up
                without friction.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Expertise */}
        <Frame
          as="section"
          topLeft="03 / EXPERTISE"
          topRight="DOMAINS"
          className="mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 border border-rule bg-surface">
              <FaCloud className="text-2xl text-muted mb-6" />
              <h3 className="font-serif text-xl text-ink mb-3">Cloud &amp; DevOps</h3>
              <p className="text-sm text-muted leading-relaxed">
                Building and optimizing infrastructure with AWS and Terraform,
                guided by modern DevOps practices.
              </p>
            </div>
            <div className="p-8 border border-rule bg-surface">
              <FaServer className="text-2xl text-muted mb-6" />
              <h3 className="font-serif text-xl text-ink mb-3">Infrastructure &amp; SRE</h3>
              <p className="text-sm text-muted leading-relaxed">
                Ensuring reliability and performance through monitoring, automation,
                and incident response.
              </p>
            </div>
          </div>
        </Frame>

        {/* Timeline */}
        <Frame
          as="section"
          topLeft="04 / EXPERIENCE"
          topRight={`${timeline.length} ENTRIES`}
          bottomLeft="REV 2026.05"
          bottomRight="ASC"
          className="mt-16"
        >
          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <div key={`${entry.org}-${entry.title}`} className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-rule last:border-0 last:pb-0">
                <div className="lg:col-span-3">
                  <span className="label label-ink">{String(timeline.length - i).padStart(2, '0')}</span>
                  <p className="label mt-2">{entry.dates}</p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-serif text-xl text-ink mb-1">{entry.title}</h3>
                  <p className="text-sm text-muted mb-4">{entry.org}</p>
                  {Array.isArray(entry.body) ? (
                    <ul className="text-sm text-muted leading-relaxed list-disc ml-4 space-y-1">
                      {entry.body.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted leading-relaxed">{entry.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Frame>

        {/* Practice */}
        <Frame
          as="section"
          topLeft="05 / PRACTICE"
          topRight="3 PRINCIPLES"
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practice.map((p) => (
              <div key={p.title} className="p-8 border border-rule bg-surface">
                <span className="label">{p.n}</span>
                <h3 className="font-serif text-lg text-ink mt-3 mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Frame>

        <div className="h-32" />
      </div>
    </div>
  );
}
