'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-primary/20">
      <div className="absolute inset-0 cyber-grid"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-gradient neon-glow">
              &lt;CYBERLOUNGE/&gt;
            </Link>
            <p className="text-foreground/60 max-w-xs">
              Crafting digital experiences through innovative software solutions and cloud architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/naperry2011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/naperry2011/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:perry.ai2011@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Email Contact"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Cyberlounge. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 