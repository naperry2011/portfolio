import Image from "next/image";
import { FaAws, FaDocker, FaGithub, FaNode, FaReact, FaDatabase, FaRobot, FaTerminal, FaCode, FaRocket } from "react-icons/fa";
import { SiKubernetes, SiAnsible, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTerraform, SiNextdotjs, SiMongodb, SiPostgresql, SiPython, SiGrafana, SiCanva, SiSupabase } from "react-icons/si";
import { BsCursorFill, BsStars, BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { MotionDiv } from '@/components/MotionWrapper';

export default function Home() {
  const developmentSkills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
    { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" />, level: 95 },
    { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" />, level: 90 },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 88 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-foreground" />, level: 85 },
    { name: 'Node.js', icon: <FaNode className="text-[#339933]" />, level: 87 },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 82 },
  ];

  const cloudSkills = [
    { name: 'AWS', icon: <FaAws className="text-[#FF9900]" />, level: 85 },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, level: 88 },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" />, level: 82 },
    { name: 'Ansible', icon: <SiAnsible className="text-[#EE0000]" />, level: 80 },
    { name: 'Terraform', icon: <SiTerraform className="text-[#7B42BC]" />, level: 78 },
    { name: 'Grafana', icon: <SiGrafana className="text-[#F46800]" />, level: 75 },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" />, level: 83 },
  ];

  const aiTools = [
    {
      name: 'Midjourney',
      icon: <BsStars className="text-[#7289DA]" />,
      description: 'Advanced AI image generation for creating stunning visuals and design concepts.',
    },
    {
      name: 'Claude.ai',
      icon: <FaRobot className="text-[#7C3AED]" />,
      description: 'AI language model for enhanced code generation, analysis, and problem-solving.',
    },
    {
      name: 'Cursor',
      icon: <BsCursorFill className="text-[#FF4A4A]" />,
      description: 'AI-powered code editor that accelerates development with intelligent suggestions.',
    },
    {
      name: 'Canva',
      icon: <SiCanva className="text-[#00C4CC]" />,
      description: 'Design platform with AI capabilities for creating professional graphics and layouts.',
    },
    {
      name: 'Supabase',
      icon: <SiSupabase className="text-[#3ECF8E]" />,
      description: 'Open-source Firebase alternative with AI-enhanced database management.',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 cyber-grid"></div>
      
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full py-12 sm:py-20 relative">
          <div className="text-center mb-8 sm:mb-16">
            <div className="mb-4 sm:mb-8 inline-block">
              <span className="text-sm font-mono text-primary/80 animate-pulse">&gt; initializing system...</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              WELCOME TO{" "}
              <span className="text-gradient neon-glow">&lt;CYBERLOUNGE/&gt;</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              <span className="font-mono text-primary">&gt;</span> Your gateway to innovative software solutions.
              Step into a world where code meets creativity, and digital dreams become reality.
            </p>
            
            {/* Quick Stats - Update grid for better mobile layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
                <FaCode className="text-3xl mb-2 mx-auto text-primary" />
                <h3 className="font-semibold text-gradient">Full-Stack Dev</h3>
                <p className="text-sm text-foreground/60">Modern web solutions</p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
                <FaTerminal className="text-3xl mb-2 mx-auto text-primary" />
                <h3 className="font-semibold text-gradient">Cloud Expert</h3>
                <p className="text-sm text-foreground/60">Scalable architecture</p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all group">
                <FaRocket className="text-3xl mb-2 mx-auto text-primary" />
                <h3 className="font-semibold text-gradient">AI Enhanced</h3>
                <p className="text-sm text-foreground/60">Future-ready solutions</p>
              </div>
            </div>

            {/* Update button layout for mobile */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded border border-primary bg-background hover:bg-primary/10 transition-colors neon-border tracking-wider group"
              >
                <span>INITIALIZE CONTACT</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded border border-accent/50 hover:border-accent hover:bg-accent/5 transition-colors tracking-wider group"
              >
                <span>VIEW PROJECTS</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <BsArrowDownCircle className="text-2xl text-primary/80" />
            <span className="block text-sm text-foreground/60 mt-2">Explore Skills</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient neon-glow">Digital Innovation Hub</span>
                </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Welcome to my digital workshop, where I combine cutting-edge technologies 
                with creative problem-solving to build exceptional software solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                From modern web applications to robust cloud architectures, I leverage 
                the power of AI and industry best practices to create scalable, 
                efficient, and future-ready solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-gradient mb-2">Modern Stack</h3>
                <p className="text-sm text-foreground/60">
                  Using the latest technologies to build fast, responsive applications
                </p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-gradient mb-2">Cloud Native</h3>
                <p className="text-sm text-foreground/60">
                  Scalable solutions built for the modern cloud environment
                </p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-gradient mb-2">AI Powered</h3>
                <p className="text-sm text-foreground/60">
                  Leveraging AI to enhance development and solutions
                </p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-all">
                <h3 className="font-semibold text-gradient mb-2">Best Practices</h3>
                <p className="text-sm text-foreground/60">
                  Following industry standards for reliable, maintainable code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Skills Sections */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Your existing skills sections here */}
          <div className="space-y-16">
            {/* Web & Software Development Skills */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                <span className="text-gradient neon-glow">WEB & SOFTWARE DEVELOPMENT</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {developmentSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Cloud & DevOps Skills */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                <span className="text-gradient neon-glow">CLOUD ARCHITECTURE & DEVOPS</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {cloudSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                <span className="text-gradient neon-glow">DATABASE SYSTEMS</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {databaseSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* AI Tools Section */}
            <div className="mt-20 relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                <span className="text-gradient neon-glow">AI AUGMENTED DEVELOPMENT</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-6 rounded-lg border border-primary/20 bg-background/40 backdrop-blur-sm 
                             hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl transform group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-semibold tracking-wide text-gradient">{tool.name}</h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="h-1 w-full bg-gradient-to-r from-gradient-start to-gradient-end opacity-0 
                                  group-hover:opacity-100 transition-opacity mt-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Section */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-primary/20 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-all group">
                <h3 className="text-xl font-bold mb-4 text-gradient group-hover:neon-glow">Full-Stack Development</h3>
                <p className="text-foreground/80">
                  Crafting seamless, responsive, and modern web applications using cutting-edge technologies
                  and best practices in both frontend and backend development.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-primary/20 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-all group">
                <h3 className="text-xl font-bold mb-4 text-gradient group-hover:neon-glow">Cloud Architecture</h3>
                <p className="text-foreground/80">
                  Designing and implementing robust cloud infrastructures with AWS, containerization,
                  and modern DevOps practices for scalable and secure solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient neon-glow">Projects</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Building innovative solutions with modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            {/* Pantry Chef */}
            <MotionDiv 
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-all">
                <Image
                  src="/pantry-chef.jpg"
                  alt="Pantry Chef Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-2 text-gradient">Pantry Chef</h3>
                  <p className="text-sm text-foreground/80">
                    Smart recipe recommendations based on your pantry ingredients
                  </p>
                </div>
              </div>
              <Link 
                href="/projects/pantry-chef"
                className="absolute inset-0 z-10"
                aria-label="View Pantry Chef Project"
              />
            </MotionDiv>

            {/* Fit-Hero */}
            <MotionDiv 
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-all">
                <Image
                  src="/fit-hero.jpg"
                  alt="Fit-Hero Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-2 text-gradient">Fit-Hero</h3>
                  <p className="text-sm text-foreground/80">
                    Comprehensive fitness tracking and workout monitoring
                  </p>
                </div>
              </div>
              <Link 
                href="/projects/fit-hero"
                className="absolute inset-0 z-10"
                aria-label="View Fit-Hero Project"
              />
            </MotionDiv>

            {/* Jiive */}
            <MotionDiv 
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-all">
                <Image
                  src="/jiive.jpg"
                  alt="Jiive Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-2 text-gradient">Jiive</h3>
                  <p className="text-sm text-foreground/80">
                    Location-based music discovery and sharing platform
                  </p>
                </div>
              </div>
              <Link 
                href="/projects/jiive"
                className="absolute inset-0 z-10"
                aria-label="View Jiive Project"
              />
            </MotionDiv>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all group"
            >
              View More Projects
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Skill Card Component
const SkillCard = ({ skill }: { skill: { name: string; icon: JSX.Element; level: number } }) => (
  <div className="flex items-center gap-4 p-4 border border-primary/20 rounded-lg bg-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all group">
    <div className="text-primary">
      {skill.icon}
    </div>
    <span className="font-medium group-hover:text-primary transition-colors">
      {skill.name}
    </span>
  </div>
);
