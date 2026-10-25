interface SectionHeadingProps {
  id: string;
  title: string;
  note?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({ id, title, note, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-4 border-ink pb-3">
      <Tag id={id} className="font-display text-4xl sm:text-5xl">
        {title}
      </Tag>
      {note && <p className="font-pixel text-sm text-muted">{note}</p>}
    </div>
  );
}
