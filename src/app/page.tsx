import Link from "next/link";
import RevealImage from "@/components/RevealImage";
import { ReactNode } from "react";
import { FaAws, FaDocker, FaNode, FaReact, FaCogs } from "react-icons/fa";
import {
  SiKubernetes, SiAnsible, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiTerraform, SiNextdotjs, SiMongodb, SiPostgresql, SiPython, SiGrafana,
} from "react-icons/si";
import { MotionDiv } from "@/components/MotionWrapper";
import Frame from "@/components/Frame";
import SplitText from "@/components/SplitText";
import Marquee from "@/components/Marquee";
import TiltCard from "@/components/TiltCard";
import ReactiveText from "@/components/ReactiveText";
import LeaderLine from "@/components/LeaderLine";
import TickRule from "@/components/TickRule";
import DirectionalArrow from "@/components/DirectionalArrow";

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

interface ApproachPrinciple {
  n: string;
  keyword: string;
  detail: string;
  title: string;
  body: string;
}

const approach: ApproachPrinciple[] = [
  {
    n: "01",
    keyword: "DISCOVERY",
    detail: "DETAIL A",
    title: "Shape before scope.",
    body: "A clear problem statement is the first deliverable. We don't agree on a deadline until we agree on what we're actually building.",
  },
  {
    n: "02",
    keyword: "FIRST DEMO",
    detail: "DETAIL B",
    title: "Working surface by week one.",
    body: "You see something deployed and clickable within the first week of any engagement. No three-week silences before the first demo.",
  },
  {
    n: "03",
    keyword: "CHANNEL",
    detail: "DETAIL C",
    title: "One channel, one source of truth.",
    body: "One Slack, Discord, or email thread per project. Decisions get written down where you can find them later, not buried in DMs.",
  },
  {
    n: "04",
    keyword: "EXIT",
    detail: "DETAIL D",
    title: "The handoff is part of the engagement.",
    body: "When we wrap, you get the code, the docs, the operational runbook, and an exit walkthrough. No dependence on me to keep things running.",
  },
];

interface NowRow {
  label: string;
  body: string;
}

const now: NowRow[] = [
  {
    label: "CURRENTLY SHIPPING",
    body: "Cyberlounge.net redesign. The Architect design system + Expressive motion layer.",
  },
  {
    label: "CURRENTLY LEARNING",
    body: "Variable-font axes, View Transitions API, and where editorial systems meet product surfaces.",
  },
  {
    label: "THINKING ABOUT",
    body: "How design-engineering taste compounds across projects; the line between visible system and expressive layer.",
  },
  {
    label: "OPEN TO",
    body: "Independent engagements where craft is valued and shipping cadence matters. Audits, six-week builds, fractional engineering retainers.",
  },
  {
    label: "NOT TAKING ON",
    body: "Long fixed-bid projects without weekly checkpoints. \"Rebuild our entire stack\" jobs without a discovery phase first.",
  },
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
          <h1 className="font-serif hero-opsz text-ink leading-[0.95] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <SplitText text="Nicholas" />
            <br />
            <SplitText text="Perry" delay={0.3} />
          </h1>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="label mb-4">PRACTICE</p>
              <ReactiveText
                text="Independent software & cloud development. I build production-ready web applications and infrastructure for founders, small businesses, and consultancies."
                className="text-lg sm:text-xl text-ink leading-relaxed"
              />
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

        {/* Marquee */}
        <Marquee items={['INDEPENDENT', 'SHIP', 'CRAFT', 'SYSTEMS']} className="my-16" />

        {/* Approach */}
        <Frame
          as="section"
          topLeft="02 / APPROACH"
          topRight="4 ITERATIONS"
          bottomLeft="4 PRINCIPLES"
          bottomRight="ENGAGEMENT"
        >
          <div className="relative">
            {/* Scale-rule tick marks down the left edge */}
            <TickRule className="absolute left-0 top-0 h-full hidden sm:block" />

            <div className="sm:pl-8 space-y-12">
              {approach.map((p, i) => (
                <div
                  key={p.n}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-12 last:pb-0 border-b border-dashed border-rule last:border-0"
                >
                  {/* Margin annotation block */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="label label-ink">FIG. {i + 1}</span>
                    <p className="label">{p.keyword}</p>
                  </div>

                  {/* Body block */}
                  <div className="lg:col-span-9 relative">
                    {/* DETAIL annotation top-right */}
                    <span className="label absolute top-0 right-0 hidden sm:inline">
                      ─ {p.detail} ─
                    </span>

                    {/* Ghosted huge numeral */}
                    <span
                      aria-hidden
                      className="absolute -top-4 -left-2 font-serif text-8xl sm:text-9xl text-ink/[0.05] leading-none select-none pointer-events-none"
                    >
                      {p.n}
                    </span>

                    {/* Leader line from margin to title (desktop only) */}
                    <LeaderLine className="absolute -top-2 -left-32 w-32 h-20 hidden lg:block" />

                    <h3 className="relative font-serif text-2xl sm:text-3xl text-ink leading-tight mb-4 mt-8 sm:mt-4">
                      {p.title}
                    </h3>
                    <p className="relative text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Frame>

        {/* Capabilities */}
        <Frame
          as="section"
          topLeft="03 / CAPABILITIES"
          topRight="STACK"
          bottomLeft="REV 2026.05"
          bottomRight="INDEX C"
          className="mt-16"
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
          topLeft="04 / SELECTED WORK"
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
                <TiltCard>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-end justify-between pb-2">
                      <span className="label">{p.n} / 03</span>
                      <span className="label">{p.kind}</span>
                    </div>
                    <div className="rule" />
                    <div className="relative aspect-square my-3 overflow-hidden bg-surface flex items-center justify-center p-4">
                      <RevealImage
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{p.tagline}</p>
                  </a>
                </TiltCard>
              </MotionDiv>
            ))}
          </div>
        </Frame>

        {/* Now */}
        <Frame
          as="section"
          topLeft="05 / NOW"
          topRight="REV 2026.05"
          bottomLeft="WHAT'S ALIVE"
          bottomRight="NEXT REFRESH 2026.08"
          className="mt-16"
        >
          <div className="relative">
            {/* Scale-rule tick marks down the left edge */}
            <TickRule className="absolute left-0 top-0 h-full hidden sm:block" />

            <div className="sm:pl-8 space-y-6">
              {now.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-6 last:pb-0 border-b border-dotted border-rule last:border-0"
                >
                  <div className="lg:col-span-4 flex items-center gap-3">
                    <DirectionalArrow />
                    <span className="label label-ink">{row.label}</span>
                  </div>
                  <p className="lg:col-span-8 text-sm sm:text-base text-ink leading-relaxed">
                    {row.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Frame>

        <div className="h-32" />
      </div>
    </div>
  );
}
