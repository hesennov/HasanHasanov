// ============================================================
// Portfolio Data — Single source of truth for all content
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
  metrics?: { label: string; value: string }[];
  challenges?: string[];
}

export type ProjectCategory = 'All' | 'Frontend' | 'Full Stack' | 'AI/ML';

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: SkillCategory;
  color: string;
}

export type SkillCategory = 'Frontend' | 'State & Data' | 'UI & Styling' | 'Tools & DevOps' | 'Backend';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

// ---------------------------------------------------------------
// PERSONAL INFO
// ---------------------------------------------------------------
export const personalInfo = {
  name: 'Hasan Hasanov',
  title: 'Middle React Developer',
  roles: [
    'React Developer',
    'Frontend Engineer',
    'UI Architect',
    'Full Stack Developer',
  ],
  bio: `Passionate React developer with 3+ years of experience crafting high-performance,
    scalable web applications. I specialize in building complex SPAs with Redux Toolkit,
    implementing pixel-perfect UIs with Tailwind CSS & Framer Motion, and integrating AI
    services and payment systems into production apps.`,
  shortBio: 'Building performant React apps with clean architecture and exceptional UX.',
  location: 'Azerbaijan 🇦🇿',
  email: 'hasan@hasanov.dev',
  available: true,
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'GitHub Commits', value: '1.2k+' },
    { label: 'Happy Clients', value: '20+' },
  ],
};

// ---------------------------------------------------------------
// SOCIAL LINKS
// ---------------------------------------------------------------
export const socials: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/hesennov', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://mx.linkedin.com/in/hesennov', icon: 'linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com/hesennov', icon: 'instagram' },
];

// ---------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------
export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 92, icon: '⚛️', category: 'Frontend', color: '#61dafb' },
  { name: 'TypeScript', level: 85, icon: '🔷', category: 'Frontend', color: '#3178c6' },
  { name: 'JavaScript (ES2024)', level: 90, icon: '🟨', category: 'Frontend', color: '#f7df1e' },
  { name: 'React Router DOM', level: 88, icon: '🛣️', category: 'Frontend', color: '#ca4245' },
  { name: 'Framer Motion', level: 78, icon: '🎞️', category: 'Frontend', color: '#ff0055' },
  { name: 'React Hook Form', level: 82, icon: '📋', category: 'Frontend', color: '#ec5990' },
  // State & Data
  { name: 'Redux Toolkit', level: 88, icon: '🔴', category: 'State & Data', color: '#764abc' },
  { name: 'React Query', level: 80, icon: '🔄', category: 'State & Data', color: '#ff4154' },
  { name: 'Zustand', level: 75, icon: '🐻', category: 'State & Data', color: '#443c28' },
  { name: 'Axios / Fetch', level: 90, icon: '🌐', category: 'State & Data', color: '#5a29e4' },
  // UI & Styling
  { name: 'Tailwind CSS', level: 90, icon: '🌊', category: 'UI & Styling', color: '#06b6d4' },
  { name: 'Shadcn UI / Radix', level: 85, icon: '🎨', category: 'UI & Styling', color: '#000000' },
  { name: 'CSS / SCSS', level: 87, icon: '🎭', category: 'UI & Styling', color: '#264de4' },
  { name: 'Styled Components', level: 78, icon: '💅', category: 'UI & Styling', color: '#db7093' },
  // Tools & DevOps
  { name: 'Git / GitHub', level: 88, icon: '🌿', category: 'Tools & DevOps', color: '#f05032' },
  { name: 'Vite', level: 85, icon: '⚡', category: 'Tools & DevOps', color: '#646cff' },
  { name: 'Docker', level: 65, icon: '🐳', category: 'Tools & DevOps', color: '#2496ed' },
  { name: 'Jest / RTL', level: 72, icon: '🧪', category: 'Tools & DevOps', color: '#c21325' },
  // Backend
  { name: 'Node.js / Express', level: 75, icon: '🟢', category: 'Backend', color: '#339933' },
  { name: 'REST APIs', level: 88, icon: '🔌', category: 'Backend', color: '#ff6c37' },
  { name: 'Stripe Integration', level: 80, icon: '💳', category: 'Backend', color: '#635bff' },
  { name: 'Firebase', level: 72, icon: '🔥', category: 'Backend', color: '#ffca28' },
];

// ---------------------------------------------------------------
// EXPERIENCE
// ---------------------------------------------------------------
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'GökTürk AI',
    role: 'Frontend Lead / Full Stack',
    period: '2024 — Present',
    type: 'Full-time',
    description: 'Led development of an AI-powered photo generation platform serving thousands of users globally.',
    achievements: [
      'Architected the entire frontend with React + Redux Toolkit + TypeScript',
      'Integrated Google Gemini AI API for image generation with retry logic & error handling',
      'Implemented Stripe payment system with webhooks & credit management',
      'Built a comprehensive admin dashboard with real-time analytics',
      'Optimized image upload pipeline — reduced API tokens by 60% via client-side compression',
      'Implemented SEO strategy achieving first-page Google rankings',
    ],
    tech: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Gemini AI', 'Node.js'],
  },
  {
    id: 'exp-2',
    company: 'Freelance',
    role: 'React Developer',
    period: '2023 — 2024',
    type: 'Freelance',
    description: 'Delivered 10+ production React applications for clients across e-commerce, SaaS, and fintech sectors.',
    achievements: [
      'Built scalable SPAs with React Router DOM & lazy loading for optimal performance',
      'Implemented complex form flows with React Hook Form + Zod validation',
      'Developed reusable component libraries used across multiple projects',
      'Integrated 3rd-party APIs (payment gateways, maps, analytics)',
      'Maintained 95%+ client satisfaction rate with on-time delivery',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'RTK Query', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'exp-3',
    company: 'Tech Startup',
    role: 'Junior → Middle React Developer',
    period: '2022 — 2023',
    type: 'Full-time',
    description: 'Grew from junior to middle in one year, taking ownership of key product features.',
    achievements: [
      'Refactored legacy class components to functional components + hooks',
      'Introduced Redux Toolkit, cutting boilerplate code by 40%',
      'Implemented CI/CD pipelines with GitHub Actions',
      'Mentored 2 junior developers on React best practices',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'CSS Modules', 'Git'],
  },
];

// ---------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------
export const projects: Project[] = [
  {
    id: 'gokturk-ai',
    title: 'GökTürk AI Photo Platform',
    description: 'AI-powered photo generation SaaS with Stripe payments, admin dashboard, and multi-category image generation.',
    longDescription: `A full-stack AI photo generation platform. Users purchase credits via Stripe, upload reference photos, 
      and the system generates AI-enhanced images using Google Gemini. Features real-time processing, admin analytics, 
      SEO optimization, and a responsive multi-language interface.`,
    tech: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Stripe', 'Gemini AI', 'PostgreSQL'],
    category: 'AI/ML',
    liveUrl: 'https://gokturkai.com',
    githubUrl: 'https://github.com/hesennov',
    featured: true,
    gradient: 'from-violet-500/20 via-blue-500/10 to-cyan-500/20',
    metrics: [
      { label: 'Users', value: '2,000+' },
      { label: 'Images Generated', value: '50k+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    challenges: [
      'Handling Gemini API timeouts with exponential backoff retry logic',
      'Stripe webhook reliability with idempotency keys',
      'Client-side image compression to reduce API costs by 60%',
    ],
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Admin Dashboard',
    description: 'Real-time admin panel with advanced data visualization, inventory management, and role-based access control.',
    longDescription: `A comprehensive e-commerce management system with real-time order tracking, 
      inventory management, revenue analytics, and multi-role access control. Built with performance 
      in mind — handles 10k+ products with virtualized lists.`,
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'React Query', 'TypeScript', 'Chart.js', 'WebSocket'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/hesennov',
    featured: true,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-violet-500/20',
    metrics: [
      { label: 'Products', value: '10k+' },
      { label: 'Daily Orders', value: '500+' },
      { label: 'Load Time', value: '<1.2s' },
    ],
  },
  {
    id: 'task-manager',
    title: 'Team Task Manager',
    description: 'Collaborative project management tool with drag & drop, real-time updates, and sprint planning.',
    longDescription: `A Jira-inspired task management application with Kanban boards, sprint planning, 
      team collaboration, and real-time updates via WebSockets. Features advanced filtering, 
      custom workflows, and detailed analytics.`,
    tech: ['React', 'Redux Toolkit', 'React Router DOM', 'Tailwind CSS', 'DnD Kit', 'TypeScript', 'WebSocket'],
    category: 'Frontend',
    githubUrl: 'https://github.com/hesennov',
    featured: false,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    metrics: [
      { label: 'Performance', value: '98/100' },
      { label: 'Accessibility', value: '96/100' },
    ],
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency portfolio tracker with price alerts, chart analysis, and portfolio optimization.',
    longDescription: `A sophisticated crypto tracking application with live price feeds, portfolio rebalancing suggestions, 
      technical chart analysis, and price alert notifications. Integrates with CoinGecko API.`,
    tech: ['React', 'RTK Query', 'TypeScript', 'Recharts', 'Tailwind CSS', 'CoinGecko API'],
    category: 'Frontend',
    liveUrl: 'https://crypto.hasanov.dev',
    githubUrl: 'https://github.com/hesennov',
    featured: false,
    gradient: 'from-yellow-500/20 via-orange-500/10 to-red-500/20',
  },
  {
    id: 'social-feed',
    title: 'Social Media Feed',
    description: 'Twitter-like social platform with infinite scroll, real-time notifications, and rich media support.',
    longDescription: `A full-featured social media application with infinite scrolling, 
      media uploads, real-time notifications, user following system, and trending topics. 
      Optimized with virtual scroll for handling thousands of posts.`,
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Socket.io', 'AWS S3', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/hesennov',
    featured: false,
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    description: 'You are looking at it! Built with the exact stack I use professionally — Vite, React, RTK, Tailwind CSS.',
    longDescription: `This portfolio itself is a demonstration of my frontend skills. 
      Features Redux state management, React Router lazy loading, Framer Motion animations, 
      Tailwind CSS custom design system, and Atomic React components.`,
    tech: ['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    category: 'Frontend',
    githubUrl: 'https://github.com/hesennov',
    featured: false,
    gradient: 'from-slate-500/20 via-gray-500/10 to-zinc-500/20',
  },
];

export const projectCategories: ProjectCategory[] = ['All', 'Frontend', 'Full Stack', 'AI/ML'];
export const skillCategories: SkillCategory[] = ['Frontend', 'State & Data', 'UI & Styling', 'Tools & DevOps', 'Backend'];
