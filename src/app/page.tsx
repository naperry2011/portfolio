import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaAws, FaDocker, FaNode, FaReact, FaCogs } from "react-icons/fa";
import {
  SiKubernetes,
  SiAnsible,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTerraform,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiGrafana,
} from "react-icons/si";
import { MotionDiv } from "@/components/MotionWrapper";

interface Skill {
  name: string;
  icon: ReactNode;
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-3 px-4 py-3 border border-border rounded-md bg-surface hover:border-muted transition-colors">
    <div className="text-lg text-muted">{skill.icon}</div>
    <span className="text-sm text-foreground">{skill.name}</span>
  </div>
);

const featuredProjects = [
  {
    title: "Rooted Legacy",
    tagline: "Indianapolis urban farm — community wellness & food education.",
    image: "/projects/rooted-legacy.jpg",
    url: "https://rooted-legacy-phi.vercel.app/",
  },
  {
    title: "Reality Saving",
    tagline: "Financial advisory for small businesses and working professionals.",
    image: "/projects/reality-saving.webp",
    url: "https://reality-saving.vercel.app/",
  },
  {
    title: "The Motions",
    tagline: "A solopreneur brand companion built on the Mo Town universe.",
    image: "/projects/the-motions.webp",
    url: "https://the-motions.vercel.app/",
  },
];

export default function Home() {
  const developmentSkills: Skill[] = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Python", icon: <SiPython /> },
  ];

  const cloudSkills: Skill[] = [
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Ansible", icon: <SiAnsible /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Grafana", icon: <SiGrafana /> },
  ];

  const databaseSkills: Skill[] = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ];

  const platformSkills: Skill[] = [
    { name: "GoHighLevel CRM Development", icon: <FaCogs /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[88vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <p className="eyebrow mb-8">Software &amp; Cloud Consulting</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-foreground">
            Independent software and cloud development for teams that need to ship.
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
            I build production-ready web applications and cloud infrastructure for founders,
            small businesses, and consultancies. Modern stacks, careful design, no theatrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              View Projects
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide border border-border text-foreground hover:border-muted transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="divider max-w-5xl mx-auto" />

      {/* Introduction */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Approach</p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-foreground">
                Modern engineering, delivered with care.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-muted leading-relaxed">
              <p>
                I work end-to-end across the stack — from product surfaces in Next.js and React
                to cloud infrastructure on AWS, with type safety and testability as defaults.
              </p>
              <p>
                Most engagements look like this: a discovery conversation, a shaped scope, a
                small set of weekly checkpoints, and a working deployment at the end. I write
                code you can read and hand off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider max-w-5xl mx-auto" />

      {/* Skills */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-6">Capabilities</p>
          <h2 className="font-serif text-3xl sm:text-4xl mb-16 text-foreground">
            Tools &amp; technologies I work with.
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted mb-6">
                Web &amp; Software Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {developmentSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted mb-6">
                Cloud Architecture &amp; DevOps
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cloudSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted mb-6">
                Database Systems
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {databaseSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted mb-6">
                Platforms &amp; CRM
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platformSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider max-w-5xl mx-auto" />

      {/* Featured Projects */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Featured projects.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex text-sm text-muted hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <MotionDiv
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden border border-border bg-surface">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{project.tagline}</p>
                </a>
              </MotionDiv>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex text-sm text-muted hover:text-foreground transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
