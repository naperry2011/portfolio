'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/MotionWrapper';

interface Project {
  title: string;
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
    title: 'Rooted Legacy',
    tagline: 'An Indianapolis urban farm growing food, classes, and gathering space.',
    description:
      'A community-focused web presence for an Indianapolis-based urban farm. The site introduces the farm, surfaces gardening classes and seasonal events, distributes information about produce shares, and integrates live weather data and mapping so visitors can plan a trip. Designed to feel personal and rooted rather than corporate — the brand is about land, neighborhood, and the people who tend it.',
    role: 'Design & Development',
    year: '2025',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'OpenWeather API', 'Google Maps', 'Vercel'],
    image: '/projects/rooted-legacy.jpg',
    liveUrl: 'https://rooted-legacy-phi.vercel.app/',
  },
  {
    title: 'Reality Saving',
    tagline: 'Strategic budgeting and financial systems for small businesses and professionals.',
    description:
      'A financial advisory platform that helps clients move from reactive spending to intentional planning. The site presents a clear diagnostic → design → implementation → monitoring framework, distinct service tracks for business advisory and personal finance, and a path for prospects to start a strategy conversation. Built with Astro for a fast, content-first delivery.',
    role: 'Design & Development',
    year: '2025',
    stack: ['Astro', 'Tailwind CSS', 'Vercel'],
    image: '/projects/reality-saving.jpg',
    liveUrl: 'https://reality-saving.vercel.app/',
  },
  {
    title: 'The Motions',
    tagline: 'A solopreneur brand companion built on the Mo Town universe.',
    description:
      'A narrative-driven brand companion for solopreneurs. The Motions maps the internal psychological states of independent work through a cast of character archetypes — from Quake (anxiety) to Flo (flow). The site introduces the Mo Town universe, runs a 90-second motion-finding quiz, and gates access to a comprehensive workbook with 8 modules and 216 paths. Built as a digital product surface, not a marketing site.',
    role: 'Design & Development',
    year: '2025',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    image: '/projects/the-motions.jpg',
    liveUrl: 'https://the-motions.vercel.app/',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="eyebrow mb-6">Selected work</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6">
          Projects.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          A few of the sites and products I&apos;ve built recently. Each one was scoped, designed,
          and shipped end-to-end.
        </p>
      </motion.div>

      {/* Project Entries */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Copy */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="eyebrow">
                  {project.role} · {project.year}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-foreground">
                  {project.title}
                </h2>
                <p className="text-base text-foreground/90 leading-relaxed">
                  {project.tagline}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <p className="eyebrow mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs tracking-wide border border-border text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
                  >
                    Visit live site
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </MotionDiv>
          );
        })}
      </div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 pt-16 border-t border-border text-center"
      >
        <p className="text-muted mb-6">Have a project in mind?</p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          Start a Conversation
          <span className="ml-2">→</span>
        </a>
      </motion.div>
    </div>
  );
}
