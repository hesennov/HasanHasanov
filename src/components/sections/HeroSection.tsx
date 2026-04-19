import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { personalInfo } from '@/data/portfolio.data';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroBackground } from './hero/HeroBackground';
import { HeroCodeCard } from './hero/HeroCodeCard';
import { HeroStats } from './hero/HeroStats';
import { HeroSocials } from './hero/HeroSocials';
import { ScrollIndicator } from './hero/ScrollIndicator';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

// Arrow icon (no MUI)
const ArrowDownIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

/** Stagger parent */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
} as const;

/** Each child slides in from LEFT with a spring */
const slideRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
} as const;

export function HeroSection() {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true }) as string[];
  const typedRole = useTypingEffect({ words: roles, typingSpeed: 75, deletingSpeed: 40, pauseDuration: 2200 });
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Cinematic text content ── */}
          <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.div variants={slideRight} className="flex justify-center lg:justify-start mb-6">
              <Badge variant="emerald" dot size="md">{t('hero.available')}</Badge>
            </motion.div>

            <motion.p variants={slideRight} className="text-slate-400 text-lg mb-2 font-mono tracking-wide">
              {t('hero.greeting')}
            </motion.p>

            <motion.h1 variants={slideRight} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.05] tracking-tight">
              Hasan
              <br />
              <span className="gradient-text">Hasanov</span>
            </motion.h1>

            <motion.div variants={slideRight} className="flex items-center gap-2 justify-center lg:justify-start mb-6 h-9">
              <span className="text-xl sm:text-2xl font-semibold text-slate-300">{typedRole}</span>
              <span className="w-0.5 h-7 bg-blue-400 animate-pulse" />
            </motion.div>

            <motion.p variants={slideRight} className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {t('hero.bio')}
            </motion.p>

            <motion.div variants={slideRight} className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
              <Button id="hero-view-work" size="lg" onClick={() => scrollToSection('projects')} rightIcon={<ArrowDownIcon />}>
                {t('hero.cta_work')}
              </Button>
              <a href="/profile/cv.pdf" download="Hasan_Hasanov_CV.pdf">
                <Button id="hero-download-cv" variant="secondary" size="lg" leftIcon={<DownloadIcon />}>
                  {t('hero.cta_cv')}
                </Button>
              </a>
            </motion.div>

            <motion.div variants={slideRight}>
              <HeroSocials />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo + Code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Profile photo */}
            {!imgError ? (
              <div className="relative float">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-xl scale-110" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden neon-border shadow-2xl shadow-blue-500/20">
                  <img
                    src="/profile/Gemini_Generated_Image_wr8byiwr8byiwr8b.png"
                    alt="Hasan Hasanov"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/80 to-transparent" />
                </div>
              </div>
            ) : (
              /* Fallback code card when no photo */
              <HeroCodeCard />
            )}
          </motion.div>
        </div>

        {/* Stats row */}
        <HeroStats />

        {/* Scroll indicator */}
        <ScrollIndicator label={t('hero.scroll')} />
      </div>
    </section>
  );
}
