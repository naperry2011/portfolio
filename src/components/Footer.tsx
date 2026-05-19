'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between pb-3">
          <span className="label">FOOTER — 005</span>
          <span className="label label-ink">REV {year}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
        </div>
        <div className="rule" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl text-ink hover:text-accent transition-colors">
              Cyberlounge
            </Link>
            <p className="text-muted max-w-xs leading-relaxed text-sm">
              Independent software and cloud development for teams that need to ship.
            </p>
          </div>

          <div>
            <h3 className="label mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted hover:text-ink transition-colors text-sm">About</Link></li>
              <li><Link href="/projects" className="text-muted hover:text-ink transition-colors text-sm">Projects</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-ink transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="label mb-4">Connect</h3>
            <div className="flex space-x-5">
              <a href="https://github.com/naperry2011" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/naperry2011/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="mailto:perry.ai2011@gmail.com" className="text-muted hover:text-accent transition-colors" aria-label="Email">
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="rule" />
        <div className="flex items-center justify-between pt-3">
          <span className="label">© {year} CYBERLOUNGE</span>
          <span className="label">ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
