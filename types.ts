import React from 'react';

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  featured: boolean;
  category: string;
  imageUrl?: string;
  screenshots?: { url: string; alt: string }[];
  demoUrl?: string;
  codeUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
  highlights?: string[];
  challenges?: string[];
  metrics?: {
    performance?: {
      loadTime?: string;
      apiResponse?: string;
      lighthouse?: {
        performance: number;
        accessibility: number;
        seo: number;
        bestPractices: number;
      };
    };
    development?: {
      timeToComplete?: string;
      commitCount?: number | string;
      bugsFixed?: number;
      featuresDelivered?: number;
    };
    learning?: {
      newTechnologies?: string[];
      technicalChallenges?: string[];
      timeInvested?: {
        research?: string;
        implementation?: string;
      };
    };
  };
  futureGoals?: string[];
  documentation?: {
    setup?: string;
    api?: string;
    usage?: string;
  };
  content?: React.ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  duration: string;
  degree: string;
}

export interface Social {
  name: string;
  link: string;
  label: string;
}

export interface PlaygroundItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  techStack: string[];
  images?: string[];
  longDescription?: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}
