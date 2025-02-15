'use client';

import { FaServer, FaCloud, FaRobot, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <motion.div 
        className="mb-16 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          About <span className="text-gradient neon-glow">CYBERCAP</span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Bridging the gap between innovative ideas and cutting-edge technology solutions.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Personal Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-primary/20 group">
              <Image
                src="/profile-cyber.jpg"
                alt="Cyberpunk style portrait"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="prose dark:prose-invert max-w-none flex-1">
              <h2 className="text-2xl font-bold mb-4 text-gradient">The Journey</h2>
              <p className="text-foreground/80 leading-relaxed">
                Since 2018, I've been on an exciting journey through the tech landscape, 
                starting from helpdesk and evolving into a cloud and infrastructure specialist. 
                What drives me? The power to transform ideas into reality through code and innovation.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                I believe technology is more than just tools and systems - it's a canvas for creativity. 
                Whether I'm architecting cloud solutions or optimizing infrastructure, I bring both 
                technical expertise and creative problem-solving to every challenge.
              </p>
              <div className="mt-6 flex gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Creative Thinker
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Problem Solver
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Tech Enthusiast
                </span>
              </div>
            </div>
          </div>

          {/* Update Expertise Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
              <FaCloud className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-foreground/60">
                Building and optimizing infrastructure with AWS, Terraform, and modern DevOps practices
              </p>
            </div>
            <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
              <FaServer className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure & SRE</h3>
              <p className="text-foreground/60">
                Ensuring reliability and performance through monitoring and automation
              </p>
            </div>
          </div>

          {/* Add a "Why Tech?" Section */}
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Why Tech?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">01</span>
                  </div>
                </div>
                <p className="text-foreground/80">
                  The endless possibilities to create and innovate
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">02</span>
                  </div>
                </div>
                <p className="text-foreground/80">
                  The ability to turn complex problems into elegant solutions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">03</span>
                  </div>
                </div>
                <p className="text-foreground/80">
                  The continuous learning and evolution of technology
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Timeline */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">Professional Timeline</h2>
          <div className="space-y-12">
            {/* Current Role */}
            <div className="relative pl-8 border-l border-primary/20">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-primary/20 border border-primary"></div>
              <h3 className="text-xl font-semibold mb-2">Site Reliability Engineer</h3>
              <p className="text-foreground/60 mb-2">PNC | August 2024 - Present</p>
              <ul className="text-foreground/80 list-disc ml-4 space-y-2">
                <li>Drive engineering stability through analytics and metrics</li>
                <li>Implement robust monitoring systems and SLA/SLO management</li>
                <li>Lead performance tuning and complex incident response</li>
                <li>Mentor junior team members on infrastructure best practices</li>
              </ul>
            </div>

            {/* DevOps Internship */}
            <div className="relative pl-8 border-l border-primary/20">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-primary/20 border border-primary"></div>
              <h3 className="text-xl font-semibold mb-2">DevOps Engineer Intern</h3>
              <p className="text-foreground/60 mb-2">Level Up in Tech | March 2024 - November 2024</p>
              <p className="text-foreground/80">
                Participating in an intensive cloud internship program focusing on Linux, AWS, Python, 
                Containers, Terraform, and AI integration. Working on real-world projects with industry mentorship.
              </p>
            </div>

            {/* Devoted Health */}
            <div className="relative pl-8 border-l border-primary/20">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-primary/20 border border-primary"></div>
              <h3 className="text-xl font-semibold mb-2">IT Engineer</h3>
              <p className="text-foreground/60 mb-2">Devoted Health | September 2023 - 2024</p>
              <ul className="text-foreground/80 list-disc ml-4 space-y-2">
                <li>Optimized cloud integration with SSO and enhanced security protocols</li>
                <li>Managed Jira boards and GitHub repositories for cross-functional teams</li>
                <li>Pioneered Chromebook deployment and network infrastructure improvements</li>
              </ul>
            </div>

            {/* Circle K */}
            <div className="relative pl-8 border-l border-primary/20">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-primary/20 border border-primary"></div>
              <h3 className="text-xl font-semibold mb-2">IT Engineer</h3>
              <p className="text-foreground/60 mb-2">Circle K IT Retail Systems | March 2022 - September 2023</p>
              <ul className="text-foreground/80 list-disc ml-4 space-y-2">
                <li>Deployed and supported retail systems software and technology</li>
                <li>Managed POS systems, fuel systems, and back-office infrastructure</li>
                <li>Enhanced documentation and process improvement initiatives</li>
              </ul>
            </div>

            {/* Belltechlogix */}
            <div className="relative pl-8 border-l border-primary/20">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-primary/20 border border-primary"></div>
              <h3 className="text-xl font-semibold mb-2">Service Desk Tier 1-2</h3>
              <p className="text-foreground/60 mb-2">Belltechlogix | March 2020 - March 2022</p>
              <p className="text-foreground/80">
                Provided comprehensive technical support using ServiceNow, handling system configurations,
                user support, and maintaining detailed documentation of all interactions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Values */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-gradient text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
            <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
            <p className="text-foreground/80">
              Embracing new technologies and methodologies to deliver cutting-edge solutions
            </p>
          </div>
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
            <h3 className="text-xl font-semibold mb-4">Quality Driven</h3>
            <p className="text-foreground/80">
              Maintaining high standards in code quality and system architecture
            </p>
          </div>
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-foreground/80">
              Staying current with industry trends and emerging technologies
            </p>
          </div>
        </div>
      </motion.div>

      {/* Beyond Tech Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-gradient text-center">Beyond Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gaming Section */}
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              <h3 className="text-xl font-semibold text-gradient">Gaming Enthusiast</h3>
            </div>
            <p className="text-foreground/80 mb-4">Lifelong gamer with a passion for deep narratives and challenging gameplay.</p>
            <div className="space-y-2">
              <p className="text-primary font-medium">Top Games:</p>
              <ul className="text-foreground/70 space-y-1">
                <li className="group-hover:text-primary transition-colors">Bloodborne</li>
                <li className="group-hover:text-primary transition-colors">Tekken 3</li>
                <li className="group-hover:text-primary transition-colors">Persona 5</li>
                <li className="group-hover:text-primary transition-colors">Metal Gear 3: Snake Eater</li>
                <li className="group-hover:text-primary transition-colors">Onimusha 2</li>
              </ul>
            </div>
          </div>

          {/* Anime Section */}
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gradient">Anime Aficionado</h3>
            </div>
            <p className="text-foreground/80 mb-4">Appreciator of compelling storytelling and artistic animation.</p>
            <div className="space-y-2">
              <p className="text-primary font-medium">Favorite Series:</p>
              <ul className="text-foreground/70 space-y-1">
                <li className="group-hover:text-primary transition-colors">Yu Yu Hakusho</li>
                <li className="group-hover:text-primary transition-colors">Your Lie in April</li>
                <li className="group-hover:text-primary transition-colors">Food Wars</li>
                <li className="group-hover:text-primary transition-colors">Fullmetal Alchemist: Brotherhood</li>
                <li className="group-hover:text-primary transition-colors">Blue Giant</li>
              </ul>
            </div>
          </div>

          {/* Manga Section */}
          <div className="p-6 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-gradient">Manga Reader</h3>
            </div>
            <p className="text-foreground/80 mb-4">Immersed in the world of visual storytelling and artistic expression.</p>
            <div className="space-y-2">
              <p className="text-primary font-medium">Top Picks:</p>
              <ul className="text-foreground/70 space-y-1">
                <li className="group-hover:text-primary transition-colors">Kingdom</li>
                <li className="group-hover:text-primary transition-colors">Diamond no Ace</li>
                <li className="group-hover:text-primary transition-colors">Wind Breakers</li>
                <li className="group-hover:text-primary transition-colors">Sakamoto Days</li>
                <li className="group-hover:text-primary transition-colors">Demon Slayer</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 