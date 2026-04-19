import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'default';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

const variantClasses = {
  blue:    'bg-blue-500/15 text-blue-300 border border-blue-500/20',
  violet:  'bg-violet-500/15 text-violet-300 border border-violet-500/20',
  cyan:    'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20',
  emerald: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20',
  orange:  'bg-orange-500/15 text-orange-300 border border-orange-500/20',
  pink:    'bg-pink-500/15 text-pink-300 border border-pink-500/20',
  default: 'bg-white/5 text-slate-300 border border-white/10',
} as const;

const dotColors = {
  blue: 'bg-blue-400', violet: 'bg-violet-400', cyan: 'bg-cyan-400',
  emerald: 'bg-emerald-400', orange: 'bg-orange-400', pink: 'bg-pink-400', default: 'bg-slate-400',
} as const;

export function Badge({ children, variant = 'default', size = 'sm', className, dot = false }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 rounded-full font-medium',
      size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
      variantClasses[variant],
      className
    )}>
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />}
      {children}
    </span>
  );
}
