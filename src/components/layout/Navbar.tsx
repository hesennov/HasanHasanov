import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { toggleMobileMenu, closeMobileMenu } from '@/features/ui/uiSlice';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import type { SectionId } from '@/features/ui/uiSlice';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function Navbar() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen, activeSection } = useAppSelector((s) => s.ui);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS: { labelKey: string; href: SectionId }[] = [
    { labelKey: 'nav.about', href: 'about' },
    { labelKey: 'nav.skills', href: 'skills' },
    { labelKey: 'nav.experience', href: 'experience' },
    { labelKey: 'nav.projects', href: 'projects' },
    { labelKey: 'nav.contact', href: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    
    // Check initial scroll position on mount
    onScroll();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: SectionId) => {
    scrollToSection(href);
    dispatch(closeMobileMenu());
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all">
              HH
            </div>
            <span className="font-bold text-white hidden sm:block text-sm tracking-wide">
              Hasan<span className="text-blue-400">.</span>dev
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                id={`nav-${item.href}`}
                onClick={() => handleNav(item.href)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative',
                  activeSection === item.href ? 'text-blue-400' : 'text-slate-400 hover:text-white hover:bg-white/5'
                )}
              >
                {t(item.labelKey)}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button id="nav-hire" size="sm" onClick={() => handleNav('contact')} className="hidden sm:inline-flex">
              {t('nav.hire')}
            </Button>
            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              onClick={() => dispatch(toggleMobileMenu())}
              className="md:hidden w-9 h-9 rounded-lg glass-light flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-4 h-0.5 bg-white block" />
              <motion.span animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="w-4 h-0.5 bg-white block" />
              <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-4 h-0.5 bg-white block" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-72 z-40 glass border-l border-white/10 flex flex-col pt-24 pb-8 px-6 md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(item.href)}
                    className={cn(
                      'px-4 py-3 text-left rounded-lg text-sm font-medium transition-all',
                      activeSection === item.href
                        ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {t(item.labelKey)}
                  </motion.button>
                ))}
                <div className="mt-4 flex items-center gap-2">
                  <LanguageSwitcher />
                </div>
                <Button size="md" onClick={() => handleNav('contact')} className="mt-2">
                  {t('nav.hire')}
                </Button>
              </nav>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(closeMobileMenu())}
              className="fixed inset-0 z-30 bg-black/60 md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
