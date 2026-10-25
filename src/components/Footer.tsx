import Link from 'next/link';

const external: [string, string][] = [
  ['GITHUB', 'https://github.com/naperry2011'],
  ['LINKEDIN', 'https://www.linkedin.com/in/naperry2011/'],
  ['MEDIUM', 'https://medium.com/@naperry2011'],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-4 py-8 font-pixel text-sm sm:px-6">
        <Link href="/" className="hover:text-accent">
          © {year} CYBERLOUNGE
        </Link>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {external.map(([name, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="py-2 underline hover:text-accent">
              {name}
            </a>
          ))}
          <a href="mailto:perry.ai2011@gmail.com" className="py-2 underline hover:text-accent">
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
