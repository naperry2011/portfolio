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
                <TiltCard>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-end justify-between pb-2">
                      <span className="label">{p.n} / 03</span>
                      <span className="label">{p.kind}</span>
                    </div>
                    <div className="rule" />
                    <div className="relative aspect-square my-3 overflow-hidden bg-surface">
                      <RevealImage
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
                </TiltCard>
              </MotionDiv>
            ))}
          </div>
        </Frame>

        <div className="h-32" />
      </div>
    </div>
  );
}
