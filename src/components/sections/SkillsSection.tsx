import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skills, type SkillCategory } from '@/data/portfolio.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillTag, TechChip } from '@/components/ui/Atoms';
import { useReveal } from '@/hooks/useReveal';

// i18n key map
const CAT_KEYS: Record<SkillCategory, string> = {
  Frontend: 'skills.categories.frontend',
  'State & Data': 'skills.categories.state',
  'UI & Styling': 'skills.categories.styling',
  'Tools & DevOps': 'skills.categories.tools',
  Backend: 'skills.categories.backend',
};

const ALL_CATEGORIES: SkillCategory[] = ['Frontend', 'State & Data', 'UI & Styling', 'Tools & DevOps', 'Backend'];

interface SkillBarProps { name: string; level: number; icon: string; color: string; index: number; inView: boolean; }

function SkillBar({ name, level, icon, color, index, inView }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: 0.3 + index * 0.04, duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend');
  const [ref, inView] = useReveal({ threshold: 0.1 });

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t('skills.eyebrow')}
          title={<>{t('skills.title')} <span className="gradient-text">{t('skills.title_gradient')}</span></>}
          description={t('skills.subtitle')}
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_CATEGORIES.map((cat) => (
            <SkillTag
              key={cat}
              id={`skill-tab-${cat.replace(/\s/g, '-').toLowerCase()}`}
              label={t(CAT_KEYS[cat])}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -12, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto"
            >
              {filtered.map((skill, i) => (
                <div key={skill.name} className="glass rounded-xl px-5 py-4">
                  <SkillBar name={skill.name} level={skill.level} icon={skill.icon} color={skill.color} index={i} inView={inView} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center gap-2"
        >
          {['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Node.js', 'Git', 'Vite', 'Jest', 'Zod', 'Axios'].map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
