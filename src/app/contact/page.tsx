'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaCalendar } from 'react-icons/fa';

const channels = [
  { n: '01', icon: <FaGithub />, label: 'GitHub',   detail: '@naperry2011',          href: 'https://github.com/naperry2011' },
  { n: '02', icon: <FaLinkedin />, label: 'LinkedIn', detail: 'in/naperry2011',       href: 'https://www.linkedin.com/in/naperry2011/' },
  { n: '03', icon: <FaMedium />,   label: 'Medium',   detail: '@naperry2011',         href: 'https://medium.com/@naperry2011' },
  { n: '04', icon: <FaEnvelope />, label: 'Email',    detail: 'perry.ai2011@gmail.com', href: 'mailto:perry.ai2011@gmail.com' },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top title block */}
        <div className="flex items-end justify-between pt-12 pb-3">
          <span className="label">004 / CONTACT — START A CONVERSATION</span>
          <span className="label">REV 2026.05</span>
        </div>
        <div className="rule" />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 sm:py-28"
        >
          <p className="label mb-6">CONTACT</p>
          <h1 className="font-serif hero-opsz text-ink text-5xl sm:text-6xl md:text-7xl leading-[1] tracking-tight">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mt-8">
            Have a project in mind or need a second set of hands? Book a 15-minute intro
            call, or reach me through any of the channels below.
          </p>
        </motion.section>

        {/* Contact card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: schedule */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="flex items-end justify-between pb-2">
              <span className="label label-ink">A — SCHEDULE</span>
              <span className="label">15 MIN · FREE</span>
            </div>
            <div className="rule" />
            <div className="py-10 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
                Book a consultation.
              </h2>
              <p className="text-muted leading-relaxed">
                A free intro call to discuss your project. We&apos;ll cover requirements,
                possible solutions, and a rough timeline.
              </p>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span> Discuss your project requirements</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span> Explore potential solutions</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span> Review timeline and budget</li>
              </ul>
              <a
                href="https://cal.com/cybercap2011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide bg-ink text-background hover:opacity-90 transition-opacity"
              >
                <FaCalendar className="w-4 h-4" />
                Schedule Meeting
              </a>
            </div>
            <div className="rule" />
            <div className="flex items-start justify-between pt-3">
              <span className="label">CAL.COM</span>
              <span className="label">CYBERCAP2011</span>
            </div>
          </motion.div>

          {/* Right: channels */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-end justify-between pb-2">
              <span className="label label-ink">B — CHANNELS</span>
              <span className="label">{channels.length}</span>
            </div>
            <div className="rule" />
            <div className="py-3 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 border border-rule bg-surface hover:border-muted transition-colors group"
                >
                  <span className="label">{c.n}</span>
                  <div className="text-lg text-muted group-hover:text-accent transition-colors">{c.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-ink">{c.label}</p>
                    <p className="label">{c.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="h-32" />
      </div>
    </div>
  );
}
