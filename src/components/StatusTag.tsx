import type { Status } from '@/data/projects';

const tones = {
  active: 'text-accent',
  cleared: 'text-cleared',
  neutral: 'text-muted',
};

export default function StatusTag({ status, className = '' }: { status: Status; className?: string }) {
  return <span className={`font-pixel text-sm ${tones[status.tone]} ${className}`}>{status.label}</span>;
}
