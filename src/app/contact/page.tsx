'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaCalendar, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

export default function Contact() {
  const services = [
    {
      icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
      title: "Full Stack Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <FaServer className="w-8 h-8 text-primary" />,
      title: "Cloud Architecture",
      description: "Scalable and secure cloud solutions using AWS and other cloud platforms."
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology choices and implementation strategies."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Let's <span className="text-gradient neon-glow">Connect</span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <div
            key={service.title}
            className="p-6 border border-primary/20 rounded-lg bg-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all group"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-foreground/60">{service.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Schedule Meeting */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-6 border border-primary/20 rounded-lg bg-primary/5 backdrop-blur-sm">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all">
                <FaCode className="w-4 h-4 animate-pulse" />
                <span>Looking for a developer or consultant for a project?</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Schedule a Consultation</h2>
            <p className="text-foreground/60 mb-6 text-center">
              Book a free 15-minute introduction call to discuss your project ideas and explore how we can work together.
              During our call, we'll:
            </p>
            <ul className="space-y-3 mb-6 text-foreground/60">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Discuss your project requirements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Explore potential solutions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Review timeline and budget considerations
              </li>
            </ul>
            <a
              href="https://cal.com/cybercap2011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
            >
              <FaCalendar className="w-5 h-5" />
              <span>Schedule Meeting</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Social Links */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold">Connect With Me</h2>
          <div className="space-y-4">
            <a
              href="https://github.com/naperry2011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all group"
            >
              <FaGithub className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-sm text-foreground/60">Check out my code and contributions</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/naperry2011/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all group"
            >
              <FaLinkedin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">LinkedIn</h3>
                <p className="text-sm text-foreground/60">Connect professionally and view my experience</p>
              </div>
            </a>

            <a
              href="https://medium.com/@naperry2011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all group"
            >
              <FaMedium className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">Medium</h3>
                <p className="text-sm text-foreground/60">Read my technical articles and insights</p>
              </div>
            </a>

            <a
              href="mailto:perry.ai2011@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all group"
            >
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">Email</h3>
                <p className="text-sm text-foreground/60">perry.ai2011@gmail.com</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 