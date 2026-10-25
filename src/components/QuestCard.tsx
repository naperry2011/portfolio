import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Project } from '@/data/projects';
import Panel from './Panel';
import StatusTag from './StatusTag';

interface QuestCardProps {
  project: Project;
  className?: string;
  /* Projects page shows the longer write-up */
  detailed?: boolean;
  priority?: boolean;
}

export default function QuestCard({ project, className = '', detailed = false, priority = false }: QuestCardProps) {
  return (
    <Panel
      as="article"
      className={`flex flex-col shadow-[8px_8px_0_var(--c)] ${className}`}
      style={{ '--c': project.color } as CSSProperties}
    >
      {/* Grows past 1024:500 when the card is stretched, so spare height shows more art instead of white space */}
      <div className="relative aspect-[1024/500] flex-1 border-b-4 border-ink" style={{ backgroundColor: project.artBg }}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-contain"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-2xl uppercase sm:text-3xl">{project.title}</h3>
          <StatusTag status={project.status} />
        </div>
        <p className="mt-3 text-lg leading-relaxed text-body">
          {detailed ? project.description : project.blurb}
        </p>
        <p className="mt-3 font-pixel text-sm text-muted">
          {project.meta}
          {project.links.map((link) => (
            <span key={link.href}>
              {' / '}
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink underline hover:text-accent">
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </Panel>
  );
}
