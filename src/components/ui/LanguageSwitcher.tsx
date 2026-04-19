import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { setLanguage } from '@/features/lang/langSlice';
import { LANGUAGES } from '@/i18n';
import { cn } from '@/utils/cn';

export function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const current = useAppSelector((s) => s.lang.current);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === current)!;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative z-50">
      <button
        id="lang-switcher"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-light text-sm font-medium',
          'text-slate-300 hover:text-white transition-all duration-200',
          open && 'border-blue-500/30 text-white'
        )}
        aria-label="Switch language"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <span className="text-xs font-mono uppercase">{currentLang.code}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-36 glass rounded-xl overflow-hidden border border-white/8 shadow-xl shadow-black/40"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                id={`lang-${lang.code}`}
                onClick={() => {
                  dispatch(setLanguage(lang.code));
                  setOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-all text-left',
                  lang.code === current
                    ? 'bg-blue-500/15 text-blue-300'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                )}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === current && (
                  <svg className="w-3.5 h-3.5 ml-auto text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
