# Architect Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Land the "Architect" redesign on the existing 4-page Next.js 15 portfolio in three sequenced tiers — T1 ships the visual foundation + IA, T2 adds signature interactions, T3 adds the Spec view overlay.

**Architecture:** Static Next.js 15 App Router site. Design tokens centralized in `src/app/globals.css` + `tailwind.config.ts`. A new reusable `<Frame>` component encapsulates the title-block motif. Every page rewrites its layout to use frames while preserving existing content. T2 adds client-only components (cursor, magnetic CTA, kinetic hero). T3 adds a Spec overlay. No new dependencies.

**Tech Stack:** Next.js 15.5.18 (App Router), React 19, TypeScript, Tailwind CSS 3, Framer Motion 12 (already installed), `next/font/google` (Fraunces + Geist + Geist Mono, already loaded), Web View Transitions API (T2, native).

**Design source:** [docs/plans/2026-05-19-architect-redesign-design.md](2026-05-19-architect-redesign-design.md)

**Verification pattern (used at every task):**
1. Make the change (paste exact code from this plan)
2. Run `npm run lint` — expect `✔ No ESLint warnings or errors`
3. Run `npm run build` — expect `✓ Compiled successfully` and 4 routes prerendering as static (5 if a new page is added; none should be added)
4. If the task changes a visible surface, also run `npm run dev` and spot-check the listed pages
5. Commit with the provided message

**Branch convention:** Work on `main` (small solo repo); push to remote (Vercel will deploy). Commit at every task. Do not batch.

---

## TIER 1 — Foundation (must ship together)

### Task 1: Update design tokens (palette + scale)

**Files:**
- Modify: `src/app/globals.css` (full rewrite of `:root` + utilities)

**Step 1: Replace the file contents**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0a0a0c;
  --ink: #f4f0e8;
  --muted: #8a8a90;
  --rule: #1c1c20;
  --surface: #111114;
  --accent: #b8966d;

  /* Scroll-driven hero opsz axis (T2 will animate this; T1 sets default) */
  --hero-opsz: 144;
}

html {
  background: var(--background);
}

body {
  color: var(--ink);
  background: var(--background);
  min-height: 100vh;
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  font-feature-settings: "tnum" 1, "cv01" 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--accent);
  color: var(--background);
}

@layer utilities {
  .font-serif {
    font-family: var(--font-serif), Georgia, serif;
    font-feature-settings: "ss01", "ss02";
  }

  .font-mono {
    font-family: var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  /* Title-block mono labels (eyebrows, corner metadata) */
  .label {
    font-family: var(--font-mono), ui-monospace, SFMono-Regular, monospace;
    font-size: 0.6875rem;       /* 11px */
    line-height: 1;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  .label-ink {
    color: var(--ink);
  }

  /* Hairline rule used inside frames and between sections */
  .rule {
    height: 1px;
    background: var(--rule);
    width: 100%;
  }

  /* Hero variable-font axis target */
  .hero-opsz {
    font-variation-settings: "opsz" var(--hero-opsz);
  }

  /* Magnetic / accent link affordance */
  .link-accent {
    color: var(--accent);
    transition: opacity 200ms ease;
  }
  .link-accent:hover {
    opacity: 0.8;
  }
}
```

**Step 2: Verify**
- `npm run lint` → clean
- `npm run build` → clean

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): adopt Architect palette + base utilities

Switch background to #0a0a0c, ink to #f4f0e8 paper-cream, accent to
oxidized brass #b8966d. Add .label (mono small-caps), .rule, .hero-opsz
utilities for the title-block frame motif.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Update Tailwind config (color tokens + type scale)

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Replace the file contents**

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        ink: "var(--ink)",
        foreground: "var(--ink)",   // alias for any leftover references
        muted: "var(--muted)",
        rule: "var(--rule)",
        surface: "var(--surface)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      // Strict 1.250 (major third) scale
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],     // 11
        xs:   ["0.8125rem", { lineHeight: "1.125rem" }],  // 13
        sm:   ["0.875rem",  { lineHeight: "1.375rem" }],  // 14
        base: ["1rem",      { lineHeight: "1.625rem" }],  // 16
        lg:   ["1.125rem",  { lineHeight: "1.75rem" }],   // 18
        xl:   ["1.25rem",   { lineHeight: "1.75rem" }],   // 20
        "2xl":["1.5rem",    { lineHeight: "2rem" }],      // 24
        "3xl":["1.875rem",  { lineHeight: "2.25rem" }],   // 30
        "4xl":["2.375rem",  { lineHeight: "2.625rem" }],  // 38
        "5xl":["3.25rem",   { lineHeight: "3.25rem" }],   // 52
        "6xl":["4.5rem",    { lineHeight: "1" }],         // 72
        "7xl":["6rem",      { lineHeight: "1" }],         // 96
        "8xl":["8rem",      { lineHeight: "1" }],         // 128
        "9xl":["10.5rem",   { lineHeight: "1" }],         // 168 — for hero
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.16em",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

**Step 2: Verify**
- `npm run lint` → clean
- `npm run build` → clean (some pages will show un-themed `text-foreground` etc. — that's fine because we aliased `foreground` to `ink`)

**Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat(design): extend Tailwind theme with Architect tokens

Add ink/muted/rule/surface/accent color tokens (CSS-var-backed).
Replace fontSize scale with strict 1.250 major-third ratio plus a 9xl
size for hero kinetic typography.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Create the `<Frame>` component

**Files:**
- Create: `src/components/Frame.tsx`

**Step 1: Write the file**

```tsx
import { ReactNode, HTMLAttributes } from "react";

interface FrameProps extends HTMLAttributes<HTMLElement> {
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  /** Hide the top hairline rule (e.g. when stacking frames). */
  noTopRule?: boolean;
  /** Hide the bottom hairline rule. */
  noBottomRule?: boolean;
  /** Render as <section> instead of the default <article>. */
  as?: "article" | "section" | "div";
  children: ReactNode;
}

/**
 * Title-block frame motif (architectural drawing block).
 * Corners hold metadata labels; content sits between two hairlines.
 */
export default function Frame({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  noTopRule = false,
  noBottomRule = false,
  as: Tag = "article",
  children,
  className = "",
  ...rest
}: FrameProps) {
  return (
    <Tag className={`relative ${className}`} {...rest}>
      {/* Top corner labels */}
      {(topLeft || topRight) && (
        <div className="flex items-end justify-between pb-3">
          <span className="label">{topLeft}</span>
          <span className="label label-ink">{topRight}</span>
        </div>
      )}

      {!noTopRule && <div className="rule" />}

      <div className="py-10 sm:py-14">{children}</div>

      {!noBottomRule && <div className="rule" />}

      {(bottomLeft || bottomRight) && (
        <div className="flex items-start justify-between pt-3">
          <span className="label">{bottomLeft}</span>
          <span className="label">{bottomRight}</span>
        </div>
      )}
    </Tag>
  );
}
```

**Step 2: Verify**
- `npm run lint` → clean
- `npm run build` → clean (component not yet imported anywhere)

**Step 3: Commit**

```bash
git add src/components/Frame.tsx
git commit -m "feat(ui): add <Frame> title-block component

Reusable architectural drawing frame with topLeft/topRight/bottomLeft/
bottomRight corner-metadata slots and two hairline rules around the
content area.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Rewrite Navbar (paper-cream ink, no changes to IA)

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Replace the file contents**

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks: [string, string][] = [
    ['Home', '/'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-md border-b border-rule z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-ink hover:text-accent transition-colors"
          >
            Cyberlounge
          </Link>

          <div className="hidden sm:flex items-center space-x-10">
            {navLinks.map(([name, path]) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative text-sm tracking-wide transition-colors ${
                    active ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-muted hover:text-ink transition-colors p-2"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-background border-b border-rule">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(([name, path]) => {
                const active = pathname === path;
                return (
                  <Link
                    key={path}
                    href={path}
                    onClick={() => setOpen(false)}
                    className={`block px-2 py-3 text-base tracking-wide border-l-2 ${
                      active
                        ? 'text-ink border-accent'
                        : 'text-muted border-transparent hover:text-ink'
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
```

**Step 2: Verify** `npm run lint` && `npm run build`

**Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "refactor(ui): swap Navbar tokens to ink/muted/rule

No IA change; aligns Navbar to the Architect token palette.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Rewrite Footer (paper-cream ink, title-block treatment)

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Replace the file contents**

```tsx
'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between pb-3">
          <span className="label">FOOTER — 005</span>
          <span className="label label-ink">REV {year}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
        </div>
        <div className="rule" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl text-ink hover:text-accent transition-colors">
              Cyberlounge
            </Link>
            <p className="text-muted max-w-xs leading-relaxed text-sm">
              Independent software and cloud development for teams that need to ship.
            </p>
          </div>

          <div>
            <h3 className="label mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted hover:text-ink transition-colors text-sm">About</Link></li>
              <li><Link href="/projects" className="text-muted hover:text-ink transition-colors text-sm">Projects</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-ink transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="label mb-4">Connect</h3>
            <div className="flex space-x-5">
              <a href="https://github.com/naperry2011" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/naperry2011/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="mailto:perry.ai2011@gmail.com" className="text-muted hover:text-accent transition-colors" aria-label="Email">
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="rule" />
        <div className="flex items-center justify-between pt-3">
          <span className="label">© {year} CYBERLOUNGE</span>
          <span className="label">ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Verify** lint + build

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(ui): adopt Architect title-block treatment in Footer

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Rewrite Home page (`/`)

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace the file contents**

```tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaAws, FaDocker, FaNode, FaReact, FaCogs } from "react-icons/fa";
import {
  SiKubernetes, SiAnsible, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiTerraform, SiNextdotjs, SiMongodb, SiPostgresql, SiPython, SiGrafana,
} from "react-icons/si";
import { MotionDiv } from "@/components/MotionWrapper";
import Frame from "@/components/Frame";

interface Skill {
  name: string;
  icon: ReactNode;
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-3 px-4 py-3 border border-rule bg-surface hover:border-muted transition-colors">
    <div className="text-lg text-muted">{skill.icon}</div>
    <span className="text-sm text-ink">{skill.name}</span>
  </div>
);

const featuredProjects = [
  {
    title: "Rooted Legacy",
    tagline: "Indianapolis urban farm — community wellness & food education.",
    image: "/projects/rooted-legacy.jpg",
    url: "https://rooted-legacy-phi.vercel.app/",
    kind: "BRAND — 2025",
    n: "01",
  },
  {
    title: "Reality Saving",
    tagline: "Financial advisory for small businesses and working professionals.",
    image: "/projects/reality-saving.webp",
    url: "https://reality-saving.vercel.app/",
    kind: "ADVISORY — 2025",
    n: "02",
  },
  {
    title: "The Motions",
    tagline: "A solopreneur brand companion built on the Mo Town universe.",
    image: "/projects/the-motions.webp",
    url: "https://the-motions.vercel.app/",
    kind: "PRODUCT — 2025",
    n: "03",
  },
];

const development: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Python", icon: <SiPython /> },
];
const cloud: Skill[] = [
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Ansible", icon: <SiAnsible /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Grafana", icon: <SiGrafana /> },
];
const database: Skill[] = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];
const platforms: Skill[] = [
  { name: "GoHighLevel CRM Development", icon: <FaCogs /> },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top title block */}
        <div className="flex items-end justify-between pt-12 pb-3">
          <span className="label">001 / NICHOLAS PERRY</span>
          <span className="label label-ink hidden sm:inline">INDEX — HOME</span>
          <span className="label">REV 2026.05</span>
        </div>
        <div className="rule" />

        {/* Hero */}
        <section className="py-24 sm:py-32">
          <h1
            className="font-serif hero-opsz text-ink leading-[0.95] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Nicholas<br />Perry
          </h1>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="label mb-4">PRACTICE</p>
              <p className="text-lg sm:text-xl text-ink leading-relaxed">
                Independent software &amp; cloud development. I build production-ready
                web applications and infrastructure for founders, small businesses,
                and consultancies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide bg-ink text-background hover:opacity-90 transition-opacity"
                >
                  View Projects <span className="ml-2">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide border border-rule text-ink hover:border-muted transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <Frame
          as="section"
          topLeft="02 / CAPABILITIES"
          topRight="STACK"
          bottomLeft="REV 2026.05"
          bottomRight="INDEX C"
        >
          <div className="space-y-12">
            <div>
              <p className="label mb-5">Web &amp; Software Development</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {development.map((s) => <SkillCard key={s.name} skill={s} />)}
              </div>
            </div>
            <div>
              <p className="label mb-5">Cloud Architecture &amp; DevOps</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cloud.map((s) => <SkillCard key={s.name} skill={s} />)}
              </div>
            </div>
            <div>
              <p className="label mb-5">Database Systems</p>
              <div className="grid grid-cols-2 gap-3">
                {database.map((s) => <SkillCard key={s.name} skill={s} />)}
              </div>
            </div>
            <div>
              <p className="label mb-5">Platforms &amp; CRM</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms.map((s) => <SkillCard key={s.name} skill={s} />)}
              </div>
            </div>
          </div>
        </Frame>

        {/* Selected work */}
        <Frame
          as="section"
          topLeft="03 / SELECTED WORK"
          topRight="2025"
          bottomLeft="03 PROJECTS"
          bottomRight={<Link href="/projects" className="link-accent">VIEW ALL →</Link>}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((p, i) => (
              <MotionDiv
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-end justify-between pb-2">
                    <span className="label">{p.n} / 03</span>
                    <span className="label">{p.kind}</span>
                  </div>
                  <div className="rule" />
                  <div className="relative aspect-[4/3] my-3 overflow-hidden bg-surface">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{p.tagline}</p>
                </a>
              </MotionDiv>
            ))}
          </div>
        </Frame>

        <div className="h-32" />
      </div>
    </div>
  );
}
```

**Step 2: Verify**
- `npm run lint` && `npm run build` → clean
- `npm run dev` → load `/`, confirm:
  - Top title-block strip is visible
  - Hero "Nicholas / Perry" renders in massive Fraunces serif
  - Capabilities frame has all four skill groups including Platforms & CRM with GoHighLevel
  - Selected Work frame shows three projects with corner metadata
  - Footer is correct

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): rewrite as Architect-style framed page

Top title-block strip, kinetic-ready hero (static opsz for T1),
Capabilities frame with four skill groups, Selected Work frame
with three live projects.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Rewrite About page (`/about`)

**Files:**
- Modify: `src/app/about/page.tsx`

**Step 1: Replace the file contents**

```tsx
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
      'Deployed and supported retail systems software and technology',
      'Managed POS systems, fuel systems, and back-office infrastructure',
      'Enhanced documentation and process improvement initiatives',
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
  { n: '02', title: 'Quality compounds', body: "Type safety, tests, and observability aren't overhead — they're what lets future changes happen quickly." },
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
                src="/profile-cyber.jpg"
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
                Building and optimizing infrastructure with AWS, Terraform, and
                modern DevOps practices.
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
```

**Step 2: Verify**
- lint + build clean
- `/about` renders portrait-on-left dossier-on-right hero, three framed sections (Expertise, Experience, Practice). No "Beyond Tech" section.

**Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat(about): rewrite as Architect-style framed dossier

Top title block, portrait+dossier hero, three framed sections
(Expertise, Experience, Practice). Drop the Beyond Tech section
per design.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Rewrite Projects page (`/projects`)

**Files:**
- Modify: `src/app/projects/page.tsx`

**Step 1: Replace the file contents**

```tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/MotionWrapper';

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
                <div className="flex items-end justify-between pb-3">
                  <span className="label label-ink">{p.n} / 03</span>
                  <span className="label">{p.kind} — {p.year}</span>
                </div>
                <div className="rule" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 items-start">
                  <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface border border-rule">
                      <Image
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
```

**Step 2: Verify**
- lint + build clean
- `/projects` shows three plates, each with corner metadata, alternating image left/right, stack chips + Visit Site link in bottom rail.

**Step 3: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat(projects): rewrite as Architect framed plates

Top title block, 'Projects.' hero, three project plates with corner
metadata, alternating image side, stack chips + Visit Site link in
bottom rail.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: Rewrite Contact page (`/contact`)

**Files:**
- Modify: `src/app/contact/page.tsx`

**Step 1: Replace the file contents**

```tsx
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaCalendar } from 'react-icons/fa';

const channels = [
  { n: '01', icon: <FaGithub />, label: 'GitHub',   detail: '@naperry2011',          href: 'https://github.com/naperry2011' },
  { n: '02', icon: <FaLinkedin />, label: 'LinkedIn', detail: 'in/naperry2011',       href: 'https://www.linkedin.com/in/naperry2011/' },
  { n: '03', icon: <FaMedium />,   label: 'Medium',   detail: '@naperry2011',         href: 'https://medium.com/@naperry2011' },
  { n: '04', icon: <FaEnvelope />, label: 'Email',    detail: 'perry.ai2011@gmail.com', href: 'mailto:perry.ai2011@gmail.com' },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top title block */}
        <div className="flex items-end justify-between pt-12 pb-3">
          <span className="label">004 / CONTACT — START A CONVERSATION</span>
          <span className="label">REV 2026.05</span>
        </div>
        <div className="rule" />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 sm:py-28"
        >
          <p className="label mb-6">CONTACT</p>
          <h1 className="font-serif hero-opsz text-ink text-5xl sm:text-6xl md:text-7xl leading-[1] tracking-tight">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mt-8">
            Have a project in mind or need a second set of hands? Book a 15-minute intro
            call, or reach me through any of the channels below.
          </p>
        </motion.section>

        {/* Contact card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: schedule */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="flex items-end justify-between pb-2">
              <span className="label label-ink">A — SCHEDULE</span>
              <span className="label">15 MIN · FREE</span>
            </div>
            <div className="rule" />
            <div className="py-10 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
                Book a consultation.
              </h2>
              <p className="text-muted leading-relaxed">
                Free intro call to discuss your project. We&apos;ll cover requirements,
                possible solutions, and rough timeline.
              </p>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span> Discuss your project requirements</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span> Explore potential solutions</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span> Review timeline and budget</li>
              </ul>
              <a
                href="https://cal.com/cybercap2011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide bg-ink text-background hover:opacity-90 transition-opacity"
              >
                <FaCalendar className="w-4 h-4" />
                Schedule Meeting
              </a>
            </div>
            <div className="rule" />
            <div className="flex items-start justify-between pt-3">
              <span className="label">CAL.COM</span>
              <span className="label">CYBERCAP2011</span>
            </div>
          </motion.div>

          {/* Right: channels */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-end justify-between pb-2">
              <span className="label label-ink">B — CHANNELS</span>
              <span className="label">{channels.length}</span>
            </div>
            <div className="rule" />
            <div className="py-3 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 border border-rule bg-surface hover:border-muted transition-colors group"
                >
                  <span className="label">{c.n}</span>
                  <div className="text-lg text-muted group-hover:text-accent transition-colors">{c.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-ink">{c.label}</p>
                    <p className="label">{c.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="h-32" />
      </div>
    </div>
  );
}
```

**Step 2: Verify**
- lint + build clean
- `/contact` shows top title block, "Let's talk." hero, two-column contact card (schedule + channels). No "What I help with" section.

**Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat(contact): rewrite as Architect framed contact card

Top title block, 'Let\\'s talk.' hero, two-column card (schedule
left / channels right). Drop the redundant services section.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: Update root layout (paper-cream selection + metadata)

**Files:**
- Modify: `src/app/layout.tsx`

The current layout is already correct except (optionally) bump the body class. Verify that the `html` element receives the three font CSS variables and the body has `antialiased`. No code change required if the current layout matches; if it does, skip to commit a no-op or just skip this task. Otherwise:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberlounge.net"),
  title: "Cyberlounge | Software & Cloud Consulting",
  description: "Independent software and cloud development for teams that need to ship.",
  openGraph: {
    title: "Cyberlounge | Software & Cloud Consulting",
    description: "Independent software and cloud development for teams that need to ship.",
    url: "https://cyberlounge.net",
    siteName: "Cyberlounge",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Cyberlounge — Software & Cloud Consulting" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberlounge | Software & Cloud Consulting",
    description: "Independent software and cloud development for teams that need to ship.",
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

(Difference from current: adds `metadataBase` to silence the Next build warning.)

**Step 2: Verify**
- `npm run build` → no "metadataBase property in metadata export is not set" warning

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "chore(layout): set metadataBase to silence Next build warning

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: Final T1 verification + doc refresh

**Files:**
- Modify: `docs/ai/memory.md`, `docs/ai/tasks.md`, `CODE_MAP.md`

**Step 1: Final build verification**

```bash
npm run lint
npm run build
```

Expected: clean lint; all 4 routes prerender as static.

**Step 2: Visual smoke test**
Run `npm run dev` and walk all four pages at 1440px and 375px:
- Hero serif renders correctly at all sizes
- Title-block strips appear at the top of every page
- Frames render with corner metadata + hairline rules
- Navbar active-state underline in accent color
- Footer title block + hairlines visible
- No `text-primary`, `text-foreground/80` style classes broken (cross-check with grep below)

```bash
# These should all return 0 matches:
grep -r "neon-glow\|text-gradient\|cyber-grid" src/
grep -r "border-primary\|bg-primary\|text-primary" src/
```

**Step 3: Patch the AI docs**

Append to `docs/ai/memory.md` under "Implementation History":

```markdown
### 2026-05-19 — Tier 1 Architect redesign foundation
**What was built:** New design tokens (paper-cream ink #f4f0e8, oxidized-brass accent #b8966d, refined dark background #0a0a0c). Strict 1.250 type scale. Reusable `<Frame>` component for the title-block motif. All 4 pages (Home / About / Projects / Contact) rewritten with framed sections, corner metadata, and the architectural "title block" treatment. Navbar and Footer updated for the new palette.
**Why:** Position site as "digital architect with defined taste" — visible system, deliberate ratios.
**Files affected:** `src/app/globals.css`, `tailwind.config.ts`, `src/components/{Frame,Navbar,Footer}.tsx`, `src/app/{layout,page,about,projects,contact}/*.tsx`.
```

Update `docs/ai/tasks.md` — move T1 items to Recently Completed, leave T2/T3 as "Up Next".

Update `CODE_MAP.md` — under "Site Shell / Layout" Primary Files, add `src/components/Frame.tsx`.

**Step 4: Commit**

```bash
git add docs/ai/memory.md docs/ai/tasks.md CODE_MAP.md
git commit -m "docs: record Tier 1 Architect redesign

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## TIER 2 — Signature interactions

> Ship T2 only after T1 is merged + visually approved.

### Task 12: Custom cursor

**Files:**
- Create: `src/components/Cursor.tsx`
- Modify: `src/app/layout.tsx` (mount the cursor)

**Step 1: Write `Cursor.tsx`**

```tsx
'use client';

import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch + reduced-motion.
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [role="button"], [data-cursor="hover"]'));
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height,border-radius] duration-150 ease-out ${
        hovering ? 'w-8 h-8 rounded-full bg-ink/90' : 'w-3 h-3 rounded-full bg-ink'
      }`}
    />
  );
}
```

**Step 2: Mount it in layout**

In `src/app/layout.tsx`, import and place inside `<body>` BEFORE `<Navbar />`:

```tsx
import Cursor from "@/components/Cursor";
// ...
<body className="antialiased">
  <Cursor />
  <Navbar />
  ...
</body>
```

**Step 3: Verify**
- lint + build clean
- `npm run dev`: cursor appears on desktop, hides on touch device emulation, scales over links/buttons
- `prefers-reduced-motion: reduce` (DevTools rendering emulation) → cursor absent

**Step 4: Commit**

```bash
git add src/components/Cursor.tsx src/app/layout.tsx
git commit -m "feat(t2): custom cursor with hover state

Hides on touch and prefers-reduced-motion. Mix-blend-difference so
it reads on both dark backgrounds and project images.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 13: Magnetic button wrapper

**Files:**
- Create: `src/components/Magnetic.tsx`
- Modify: `src/app/page.tsx`, `src/app/contact/page.tsx`, `src/app/projects/page.tsx`

**Step 1: Write `Magnetic.tsx`**

```tsx
'use client';

import { useRef, ReactNode } from 'react';

export default function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className ?? ''}`}
    >
      {children}
    </span>
  );
}
```

**Step 2: Wrap primary CTAs**

In `src/app/page.tsx`, wrap the two hero CTAs:

```tsx
import Magnetic from "@/components/Magnetic";
// ...
<Magnetic><Link href="/projects" className="...">View Projects →</Link></Magnetic>
<Magnetic><Link href="/contact" className="...">Get in Touch</Link></Magnetic>
```

In `src/app/contact/page.tsx`, wrap the "Schedule Meeting" anchor.
In `src/app/projects/page.tsx`, wrap the closing "Start a Conversation" anchor.

**Step 3: Verify**
- lint + build clean
- Hover the wrapped CTAs: they tilt toward cursor; respect reduced-motion.

**Step 4: Commit**

```bash
git add src/components/Magnetic.tsx src/app/page.tsx src/app/contact/page.tsx src/app/projects/page.tsx
git commit -m "feat(t2): magnetic primary CTAs

Adds a <Magnetic> wrapper that pulls children toward the cursor on
hover. Wraps the hero CTAs on /, the schedule CTA on /contact, and
the closing CTA on /projects.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 14: Kinetic hero name (scroll-driven `opsz`)

**Files:**
- Create: `src/components/KineticHero.tsx`
- Modify: `src/app/page.tsx` (use the new component for the hero name)

**Step 1: Write `KineticHero.tsx`**

```tsx
'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-driven Fraunces opsz axis: as the user scrolls the first viewport,
 * the heading's opsz axis grows from 8 → 144 (refined → display).
 */
export default function KineticHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / vh));
      const opsz = 8 + (144 - 8) * progress;
      el.style.setProperty('--hero-opsz', String(opsz));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="font-serif hero-opsz text-ink leading-[0.95] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
    >
      {children}
    </h1>
  );
}
```

**Step 2: Use in home hero**

In `src/app/page.tsx`, replace the existing hero `<h1>` with `<KineticHero>Nicholas<br />Perry</KineticHero>`.

**Step 3: Verify**
- lint + build clean
- `/`: scrolling the first viewport visibly refines the hero letterforms (opsz axis change).

**Step 4: Commit**

```bash
git add src/components/KineticHero.tsx src/app/page.tsx
git commit -m "feat(t2): scroll-driven kinetic hero name

Uses Fraunces opsz variable axis to refine letterforms as the
visitor commits to scrolling the first viewport.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 15: Page transitions via View Transitions API

**Files:**
- Modify: `next.config.ts` (enable view transitions)
- Modify: `src/app/globals.css` (define the transition keyframes)

**Step 1: Enable in `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { viewTransition: true },
};

export default nextConfig;
```

**Step 2: Define transition CSS** — append to `src/app/globals.css`:

```css
@layer utilities {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 350ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  ::view-transition-old(root) { animation-name: vt-fade-out; }
  ::view-transition-new(root) { animation-name: vt-fade-in; }

  @keyframes vt-fade-out {
    to { opacity: 0; transform: translateY(-6px); }
  }
  @keyframes vt-fade-in {
    from { opacity: 0; transform: translateY(6px); }
  }
}
```

**Step 3: Wrap router transitions** — create `src/app/template.tsx`:

```tsx
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    // No-op marker so React keys distinct render trees per pathname.
  }, [pathname]);

  return <>{children}</>;
}
```

The actual route-change-with-view-transition wiring is provided by Next 15.5 when `experimental.viewTransition` is on; navigations automatically run inside `document.startViewTransition` when supported. The CSS above defines what that transition looks like.

**Step 4: Verify**
- lint + build clean
- Click between `/`, `/projects`, `/about`, `/contact`. On Chromium-based browsers the transition is a smooth fade+slide; on Firefox/Safari (no support) navigation is instant — graceful fallback.

**Step 5: Commit**

```bash
git add next.config.ts src/app/globals.css src/app/template.tsx
git commit -m "feat(t2): cross-page view transitions

Enables Next 15.5 experimental.viewTransition + defines fade+slide
keyframes for the root transition. Progressive enhancement —
unsupported browsers navigate instantly.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 16: Refined frame-on-hover

**Files:**
- Modify: `src/app/page.tsx` (Selected Work frames), `src/app/projects/page.tsx` (project plates)

Add a CSS-only hover treatment on each framed project card: corner metadata moves slightly outward and ink saturates. Implement by appending to `src/app/globals.css`:

```css
@layer utilities {
  .frame-hoverable .label { transition: transform 250ms ease, color 250ms ease; }
  .frame-hoverable:hover .label-tl { transform: translate(-2px, -2px); }
  .frame-hoverable:hover .label-tr { transform: translate( 2px, -2px); }
  .frame-hoverable:hover .label-bl { transform: translate(-2px,  2px); }
  .frame-hoverable:hover .label-br { transform: translate( 2px,  2px); }
  .frame-hoverable:hover .label    { color: var(--ink); }
}
```

In `src/app/page.tsx` Selected Work card and `src/app/projects/page.tsx` project plate:
- Add `frame-hoverable` to the outer card wrapper.
- Add `label-tl` / `label-tr` / `label-bl` / `label-br` classes to the four corner labels.

**Step 2: Verify**
- lint + build clean
- Hover over a project plate: corner metadata nudges outward and brightens.

**Step 3: Commit**

```bash
git add src/app/globals.css src/app/page.tsx src/app/projects/page.tsx
git commit -m "feat(t2): refined frame-on-hover corner reveals

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## TIER 3 — Spec view overlay

> Ship T3 after T2 is approved.

### Task 17: SpecView overlay component

**Files:**
- Create: `src/components/SpecView.tsx`
- Modify: `src/app/layout.tsx` (mount at root)

**Step 1: Write `SpecView.tsx`**

```tsx
'use client';

import { useEffect, useState } from 'react';

/**
 * Architect's "Spec view" — toggle-able overlay that exposes the
 * 12-column grid, baseline rhythm, and major spacing tokens.
 *
 * Toggle: click [SPEC] in the bottom-right corner, OR press "g s".
 */
export default function SpecView() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    let lastKey = '';
    let timer: ReturnType<typeof setTimeout>;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target?.matches('input, textarea, [contenteditable=true]')) return;
      const k = e.key.toLowerCase();
      if (lastKey === 'g' && k === 's') {
        setOn((v) => !v);
        lastKey = '';
        return;
      }
      lastKey = k;
      clearTimeout(timer);
      timer = setTimeout(() => (lastKey = ''), 800);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        className="fixed bottom-4 right-4 z-[60] label border border-rule bg-background/90 backdrop-blur px-3 py-2 hover:text-ink transition-colors"
        aria-pressed={on}
        aria-label="Toggle spec view"
      >
        [ {on ? 'SPEC · ON' : 'SPEC'} ]
      </button>

      {on && (
        <div className="pointer-events-none fixed inset-0 z-[55]" aria-hidden>
          {/* 12-col grid (within max-w-6xl container = 1152px) */}
          <div className="absolute inset-x-0 top-0 bottom-0 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-accent/[0.06] border-x border-accent/20" />
              ))}
            </div>
          </div>
          {/* Baseline (every 8px) */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, var(--accent) 0 1px, transparent 1px 8px)',
            }}
          />
          {/* Corner readout */}
          <div className="absolute top-4 left-4 label">SPEC VIEW · 12 COL · 8PX BASELINE</div>
          <div className="absolute top-4 right-4 label">PRESS G THEN S TO TOGGLE</div>
        </div>
      )}
    </>
  );
}
```

**Step 2: Mount it** — in `src/app/layout.tsx`, add `<SpecView />` inside `<body>` (after `<Navbar />`):

```tsx
import SpecView from "@/components/SpecView";
// ...
<body className="antialiased">
  <Cursor />
  <Navbar />
  <main className="pt-16">{children}</main>
  <Footer />
  <SpecView />
</body>
```

**Step 3: Verify**
- lint + build clean
- `npm run dev`: bottom-right `[ SPEC ]` button toggles the overlay. Press `g` then `s` — also toggles. Overlay shows 12-col guides + 8px baseline. Hidden by default; persists in DOM not in localStorage (intentional: it's a power-user moment, not a sticky setting).

**Step 4: Commit**

```bash
git add src/components/SpecView.tsx src/app/layout.tsx
git commit -m "feat(t3): Spec view overlay (the Architect's signature)

Toggle in bottom-right corner or press 'g s'. Reveals the 12-column
grid + 8px baseline rhythm on the current page. The visible system.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 18: Final docs refresh after T3

**Files:**
- Modify: `docs/ai/memory.md`, `docs/ai/tasks.md`, `CODE_MAP.md`, `docs/ai/decisions.md`

**Step 1: Append to `decisions.md`**

```markdown
## ADR-005: Architect redesign — visible system motif

**Date:** 2026-05-19
**Status:** Accepted (extends ADR-003)

**Context**
After the minimal-dark-editorial pass shipped, the user wanted a sharper, more distinctive identity — positioning as a "digital architect with defined taste" rather than a generic developer.

**Decision**
Adopt a visible-system aesthetic centered on three signature elements: a title-block frame motif (corner metadata + hairlines on every meaningful surface), scroll-driven kinetic typography (Fraunces opsz axis), and a toggle-able Spec view overlay that exposes the 12-col grid + 8px baseline on demand.

**Consequences**
- **Positive:** A memorable, ownable identity. The site signals systems thinking the moment a visitor scrolls or hovers.
- **Negative:** Heavier visual language than the previous pass. Every new section must be designed to fit inside a frame.
- **Neutral:** No new deps — implemented entirely with framer-motion (already installed) + web platform (View Transitions API, variable fonts).

**Alternatives considered**
- Quiet Authority (refined editorial) — too generic
- The OS (themed interface) — too high-risk for solo maintenance
```

**Step 2: Update `CODE_MAP.md`** — add to Site Shell / Layout Primary Files:
- `src/components/Frame.tsx`
- `src/components/Cursor.tsx`
- `src/components/Magnetic.tsx`
- `src/components/KineticHero.tsx`
- `src/components/SpecView.tsx`

**Step 3: Move all Architect tasks in `docs/ai/tasks.md` to Recently Completed.**

**Step 4: Append a final note to `docs/ai/memory.md` under Implementation History.**

**Step 5: Commit**

```bash
git add docs/ai/memory.md docs/ai/tasks.md docs/ai/decisions.md CODE_MAP.md
git commit -m "docs: record full Architect redesign (T1+T2+T3)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Out of Scope

- Light mode toggle
- New content surfaces (Principles, Stack, Blog)
- 3D / WebGL
- Real OG cover image (still user-supplied; out of code scope)
- Privacy/Terms pages
- Server-side contact form

---

## Plan Complete

Plan saved. The implementation covers 18 tasks across 3 tiers, with each task scoped to 2–10 minutes of editing + verify + commit.

**Recommended sequencing:** Land T1 (tasks 1–11) and push to Vercel. Sit with the foundation for a day or two before starting T2 — sometimes the foundation alone is already strong enough that some T2 moves feel like over-decoration. Then T2 (tasks 12–16). Then T3 (tasks 17–18).
