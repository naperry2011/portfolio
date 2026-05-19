'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks: [string, string][] = [
    ['Home', '/'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-md border-b border-rule z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-ink hover:text-accent transition-colors"
          >
            Cyberlounge
          </Link>

          <div className="hidden sm:flex items-center space-x-10">
            {navLinks.map(([name, path]) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative text-sm tracking-wide transition-colors ${
                    active ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-muted hover:text-ink transition-colors p-2"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-background border-b border-rule">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(([name, path]) => {
                const active = pathname === path;
                return (
                  <Link
                    key={path}
                    href={path}
                    onClick={() => setOpen(false)}
                    className={`block px-2 py-3 text-base tracking-wide border-l-2 ${
                      active
                        ? 'text-ink border-accent'
                        : 'text-muted border-transparent hover:text-ink'
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
