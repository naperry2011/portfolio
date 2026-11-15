import type { Status } from '@/data/projects';

const tones = {
  active: 'text-accent',
  cleared: 'text-cleared',
  neutral: 'text-muted',
};

interface StatusTagProps {
  status: Status;
  className?: string;
  /* Cleared statuses render as a tilted rubber stamp */
  stamp?: boolean;
}

export default function StatusTag({ status, className = '', stamp = false }: StatusTagProps) {
  const stamped = stamp && status.tone === 'cleared';
  return (
    <span
      className={`font-pixel text-sm ${tones[status.tone]} ${
        stamped ? 'rounded-sm border-2 border-cleared px-2 py-1 [rotate:-4deg]' : ''
      } ${className}`}
    >
      {status.label}
    </span>
  );
}
