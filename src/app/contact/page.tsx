'use client';

import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaCalendar,
  FaCode,
  FaLaptopCode,
  FaServer,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Full Stack Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: <FaServer />,
    title: 'Cloud Architecture',
    description: 'Scalable and secure cloud solutions on AWS and other cloud platforms.',
  },
  {
    icon: <FaCode />,
    title: 'Technical Consulting',
    description: 'Expert guidance on technology choices and implementation strategies.',
  },
];

const channels = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    detail: 'Code and contributions',
    href: 'https://github.com/naperry2011',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    detail: 'Professional background',
    href: 'https://www.linkedin.com/in/naperry2011/',
  },
  {
    icon: <FaMedium />,
    label: 'Medium',
    detail: 'Technical writing',
    href: 'https://medium.com/@naperry2011',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    detail: 'perry.ai2011@gmail.com',
    href: 'mailto:perry.ai2011@gmail.com',
  },
];

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="eyebrow mb-6">Contact</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6">
          Let&apos;s talk.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Have a project in mind or need a second set of hands? Send a note or book a
          15-minute intro call to talk it through.
        </p>
      </motion.div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-24"
      >
        <p className="eyebrow mb-8">What I help with</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 border border-border bg-surface"
            >
              <div className="text-2xl text-muted mb-6">{service.icon}</div>
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Two-column: Schedule + Connect */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 border border-border bg-surface"
        >
          <p className="eyebrow mb-6">Book a call</p>
          <h2 className="font-serif text-2xl text-foreground mb-4">
            Schedule a 15-minute consultation.
          </h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Free intro call to discuss your project. We&apos;ll cover requirements, possible
            solutions, and rough timeline.
          </p>
          <ul className="space-y-3 mb-8 text-sm text-muted">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              Discuss your project requirements
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              Explore potential solutions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              Review timeline and budget
            </li>
          </ul>
          <a
            href="https://cal.com/cybercap2011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            <FaCalendar className="w-4 h-4" />
            Schedule Meeting
          </a>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          <p className="eyebrow mb-6">Or find me elsewhere</p>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 border border-border bg-surface hover:border-muted transition-colors group"
            >
              <div className="text-xl text-muted group-hover:text-accent transition-colors">
                {c.icon}
              </div>
              <div>
                <p className="text-sm text-foreground">{c.label}</p>
                <p className="text-xs text-muted">{c.detail}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
