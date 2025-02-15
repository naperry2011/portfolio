'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import { MotionDiv } from '@/components/MotionWrapper';

// Add interfaces for project and component props
interface StatusBadgeProps {
  status: 'completed' | 'in-progress' | 'planned';
}

interface FutureFeaturesProps {
  features: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  futureFeatures?: string[];
  github: string;
  live: string;
  status: string;
  isLive: boolean;
}

export default function Projects() {
  // Type the project arrays with Project interface
  const softwareProjects: Project[] = [
    {
      title: "Pantry Chef",
      description: "A modern recipe management application built with Next.js 14 and Supabase, offering a seamless experience for discovering and managing recipes based on available ingredients. Currently in active development with new features being added.",
      image: "/pantry-chef.jpg",
      tech: [
        "Next.js 14",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "PostgreSQL",
        "Vercel"
      ],
      features: [
        "Server-side rendering for optimal performance",
        "Type-safe development with TypeScript",
        "Real-time database updates with Supabase",
        "Responsive UI with custom Tailwind components",
        "Secure authentication system",
        "Toast notifications for better UX",
        "Automated deployment with Vercel",
        "Comprehensive recipe management system"
      ],
      github: "https://github.com/naperry2011/pantry-chef",
      live: "https://pantry-chef.cyberlounge.net",
      status: "In Progress",
      isLive: false
    },
    {
      title: "Fit-Hero",
      description: "A gamified fitness tracking application that transforms your health journey into an RPG adventure. Level up your character by completing workouts, meditation sessions, and reading goals. Currently in planning phase with initial UI/UX design.",
      image: "/fit-hero.jpg",
      tech: [
        "React.js",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "React Router"
      ],
      features: [
        "RPG-style character progression system",
        "Avatar customization based on achievements",
        "Workout tracking and level progression",
        "Community challenges and leaderboards",
        "Meditation and reading activity tracking",
        "Mobile-responsive design",
        "Real-time progress synchronization"
      ],
      futureFeatures: [
        "Mobile app development",
        "Wearables integration",
        "Multiplayer challenges",
        "Advanced leaderboard system"
      ],
      github: "https://github.com/naperry2011/fit-hero",
      live: "https://fit-hero.cyberlounge.net",
      status: "Planned",
      isLive: false
    }
  ];

  const cloudProjects: Project[] = [
    {
      title: "Gaming Leaderboard on AWS",
      description: "A serverless API system for tracking and displaying player high scores, built with AWS services and automated with Jenkins and Ansible. In planning phase with infrastructure design underway.",
      image: "/gaming-leaderboard.jpg",
      tech: ["AWS Lambda", "DynamoDB", "API Gateway", "Jenkins", "Ansible", "CloudWatch"],
      features: [
        "Serverless API implementation with Lambda",
        "Real-time data storage with DynamoDB",
        "Automated CI/CD pipeline with Jenkins",
        "Infrastructure as Code using Ansible",
        "Comprehensive monitoring with CloudWatch",
        "Automated testing and deployment"
      ],
      github: "https://github.com/naperry2011/gaming-leaderboard",
      live: "https://leaderboard-demo.cyberlounge.net",
      status: "Planned",
      isLive: false
    },
    {
      title: "Restaurant Order Analytics",
      description: "A real-time data streaming and analytics platform for restaurant order processing, featuring comprehensive visualization and monitoring capabilities. Currently in initial planning and architecture design phase.",
      image: "/restaurant-analytics.jpg",
      tech: ["AWS Kinesis", "PostgreSQL", "Grafana", "RabbitMQ", "Jenkins", "Ansible"],
      features: [
        "Real-time data streaming with Kinesis",
        "Advanced data visualization with Grafana",
        "Automated infrastructure deployment",
        "Scalable data storage with PostgreSQL",
        "Comprehensive monitoring system",
        "Automated CI/CD workflows"
      ],
      github: "https://github.com/naperry2011/restaurant-analytics",
      live: "https://analytics-demo.cyberlounge.net",
      status: "Planned",
      isLive: false
    }
  ];

  // Update the StatusBadge component with proper typing
  const StatusBadge = ({ status }: StatusBadgeProps) => {
    const getStatusColor = (status: StatusBadgeProps['status']) => {
      switch (status.toLowerCase()) {
        case 'completed':
          return 'bg-green-500/10 text-green-500 border-green-500/20';
        case 'in-progress':
          return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
        case 'planned':
          return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
        default:
          return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      }
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(status)}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Update the FutureFeatures component with proper typing
  const FutureFeatures = ({ features }: FutureFeaturesProps) => (
    <div>
      <h4 className="text-lg font-semibold mb-3 text-primary">Future Roadmap</h4>
      <div className="space-y-2">
        <ul className="list-disc list-inside text-foreground/70 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Add interface for ProjectSection props
  interface ProjectSectionProps {
    title: string;
    projects: Project[];
  }

  // Type the ProjectSection component
  const ProjectSection = ({ title, projects }: ProjectSectionProps) => (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="text-gradient neon-glow">{title}</span>
      </h2>
      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="relative h-[300px] rounded-lg overflow-hidden border border-primary/20 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-gradient">{project.title}</h3>
                  {project.status && <StatusBadge status={project.status} />}
                </div>
                
                <p className="text-foreground/80 text-lg">{project.description}</p>
                
                {/* Database Schema - Only for Pantry Chef */}
                {project.title === "Pantry Chef" && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Database Schema</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                        <span className="font-medium">recipes</span>
                      </div>
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                        <span className="font-medium">ingredients</span>
                      </div>
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                        <span className="font-medium">instructions</span>
                      </div>
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                        <span className="font-medium">saved_recipes</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm border border-primary/20 bg-primary/5 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
                  <ul className="list-disc list-inside text-foreground/80 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Future Features */}
                {project.futureFeatures && (
                  <FutureFeatures features={project.futureFeatures} />
                )}

                {/* Project Links - Only show if project is live */}
                {project.isLive && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all"
                    >
                      <FaGithub className="h-5 w-5" />
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all"
                    >
                      <FaLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  </div>
                )}

                {/* Optional: Add a "Coming Soon" message when project is not live */}
                {!project.isLive && (
                  <div className="mt-6 text-foreground/60 text-sm italic">
                    Project in development - links coming soon
                  </div>
                )}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );

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
          Featured <span className="text-gradient neon-glow">Projects</span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          From web applications to cloud infrastructure, exploring the full spectrum of modern technology.
        </p>
      </motion.div>

      {/* Software Development Projects */}
      <ProjectSection title="Software Development" projects={softwareProjects} />

      {/* Cloud & DevOps Projects */}
      <ProjectSection title="Cloud & DevOps" projects={cloudProjects} />
    </div>
  );
} 