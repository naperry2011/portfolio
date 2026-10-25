import Image from 'next/image';
import type { Project } from '@/data/projects';
import StatusTag from './StatusTag';

interface QuestLogRowProps {
  project: Project;
  /* Projects page shows the longer write-up and a bigger screenshot */
  detailed?: boolean;
}

export default function QuestLogRow({ project, detailed = false }: QuestLogRowProps) {
  const link = project.links[0];
  return (
    <li className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b-2 border-dashed border-rule px-5 py-4 last:border-b-0">
      <div className={`relative aspect-[16/10] shrink-0 border-2 border-ink ${detailed ? 'w-full sm:w-64' : 'w-36'}`}>
        <Image
          src={project.image}
          alt={detailed ? project.imageAlt : ''}
          fill
          sizes={detailed ? '(max-width: 640px) 100vw, 256px' : '144px'}
          className="object-cover object-top"
        />
      </div>
      <div className="min-w-0 flex-[999_1_260px]">
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold underline hover:text-accent"
        >
          {project.title}
        </a>
        <p className="mt-1 leading-relaxed text-body">{detailed ? project.description : project.blurb}</p>
        {detailed && <p className="mt-2 font-pixel text-sm text-muted">{project.meta}</p>}
      </div>
      <StatusTag status={project.status} className="shrink-0" />
    </li>
  );
}
