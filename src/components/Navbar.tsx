'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    ['HOME', '/'],
    ['ABOUT', '/about'],
    ['PROJECTS', '/projects'],
    ['BLOG', '/blog'],
    ['CONTACT', '/contact'],
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-primary/20 z-50">
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-gradient neon-glow"
              onMouseEnter={() => setIsHovered('logo')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="tracking-wider">&lt;CYBERLOUNGE/&gt;</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {navLinks.map(([name, path]) => (
                <Link
                  key={path}
                  href={path}
                  className={`relative px-3 py-1 transition-all duration-300 tracking-wider
                    ${pathname === path ? 'text-primary neon-glow' : 'text-foreground/80'}
                    hover:text-primary`}
                  onMouseEnter={() => setIsHovered(path)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {name}
                  {(pathname === path || isHovered === path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gradient-start to-gradient-end neon-glow" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground/80 hover:text-primary transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-primary/20">
          {navLinks.map(([name, path]) => (
            <Link
              key={path}
              href={path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                ${pathname === path ? 'text-primary bg-primary/10 neon-glow' : 'text-foreground/80'}
                hover:text-primary hover:bg-primary/5`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 