'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks: [string, string][] = [
  ['QUESTS', '/'],
  ['QUEST LOG', '/projects'],
  ['PLAYER', '/about'],
  ['CONTACT', '/contact'],
];

function Cursor({ active }: { active: boolean }) {
  return (
    <span aria-hidden className={`text-accent ${active ? 'visible' : 'invisible'}`}>
      ▶{' '}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-ink bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-3 hover:text-accent">
            <span className="font-display text-xl sm:text-2xl">CYBERLOUNGE</span>
            <span lang="ja" className="hidden text-xs text-muted sm:inline">
              サイバーラウンジ
            </span>
          </Link>

          <div className="hidden items-center font-pixel md:flex">
            {navLinks.map(([name, path]) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  aria-current={active ? 'page' : undefined}
                  className="px-3 py-3 hover:text-accent"
                >
                  <Cursor active={active} />
                  {name}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="px-2 py-3 font-pixel hover:text-accent md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute left-0 right-0 top-16 border-b-2 border-ink bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 font-pixel text-lg sm:px-6">
            {navLinks.map(([name, path]) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className="block py-3 hover:text-accent"
                >
                  <Cursor active={active} />
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
