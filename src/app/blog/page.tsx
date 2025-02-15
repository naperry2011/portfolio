'use client';

import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/MotionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaTag, FaMedium } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Types for Medium posts
interface MediumPost {
  title: string;
  content: string;
  thumbnail: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/medium-posts');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch posts');
        }

        // Limit to 6 posts
        setPosts(data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

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
          Tech <span className="text-gradient neon-glow">Insights</span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Exploring software development, cloud architecture, and technology innovations
        </p>
      </motion.div>

      {/* Error Message */}
      {error && (
        <div className="text-center mb-8 p-4 border border-secondary/20 bg-secondary/5 rounded-lg">
          <p className="text-secondary">{error}</p>
          <p className="text-sm text-foreground/60 mt-2">
            Check out my Medium profile at{' '}
            <a 
              href="https://medium.com/@naperry2011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              medium.com/@naperry2011
            </a>
          </p>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {loading ? (
          // Show only 6 loading skeletons
          [...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-48 bg-primary/10 rounded-lg mb-4"></div>
              <div className="h-4 bg-primary/10 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-primary/10 rounded w-1/2"></div>
            </div>
          ))
        ) : (
          posts.map((post, index) => (
            <MotionDiv
              key={post.link}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden border border-primary/20 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-all"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to default image if the Medium image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = '/blog/default-thumbnail.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <FaMedium className="w-6 h-6 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Date & Categories */}
                  <div className="flex items-center text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <FaTag className="text-primary/60" />
                      <span>{post.categories?.[0] || 'Technology'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt - Removed line-clamp-3 and added better content handling */}
                  {post.content && (
                    <p className="text-foreground/60">
                      {post.content}
                    </p>
                  )}

                  {/* Read on Medium Button */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border border-primary/20 bg-primary/5 text-primary group-hover:border-primary/50 transition-all">
                    <FaMedium className="w-4 h-4" />
                    <span>Read on Medium</span>
                  </div>
                </div>
              </a>
            </MotionDiv>
          ))
        )}
      </div>

      {/* Read More Button */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="https://medium.com/@naperry2011"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all group"
        >
          <span>Read More on Medium</span>
          <FaMedium className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  );
} 