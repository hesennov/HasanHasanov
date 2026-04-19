import { cn } from '@/utils/cn';
import { type ReactNode } from 'react';

/** Inline tech chip — pure Tailwind, zero MUI */
interface TechChipProps {
  label: string;
  className?: string;
}

export function TechChip({ label, className }: TechChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-[0.65rem] font-medium',
        'bg-navy-600/80 text-slate-400 border border-white/6',
        'hover:text-slate-300 hover:border-blue-500/20 transition-colors',
        className
      )}
    >
      {label}
    </span>
  );
}

/** Larger pill for skill groups */
interface SkillTagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  id?: string;
}

export function SkillTag({ label, active, onClick, id }: SkillTagProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
        active
          ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20'
          : 'glass-light text-slate-400 hover:text-white'
      )}
    >
      {label}
    </button>
  );
}

/** Achievement check item */
interface AchievementItemProps {
  text: string;
}

export function AchievementItem({ text }: AchievementItemProps) {
  return (
    <div className="flex items-start gap-2">
      <svg
        className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-xs text-slate-400 leading-relaxed">{text}</span>
    </div>
  );
}

/** Icon button (for social links, etc.) */
interface IconButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  id?: string;
  label?: string;
  className?: string;
  external?: boolean;
}

export function IconButton({ href, onClick, children, id, label, className, external }: IconButtonProps) {
  const cls = cn(
    'w-10 h-10 glass-light rounded-lg flex items-center justify-center',
    'text-slate-400 hover:text-white hover:border-blue-500/30 transition-all duration-200',
    className
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        aria-label={label}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} aria-label={label} className={cls}>
      {children}
    </button>
  );
}
