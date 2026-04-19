import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'center', className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
          <span className="w-6 h-px bg-blue-400" />
          {eyebrow}
          <span className="w-6 h-px bg-blue-400" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h2>
      {description && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
