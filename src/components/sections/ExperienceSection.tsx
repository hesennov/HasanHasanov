import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '@/data/portfolio.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { TechChip, AchievementItem } from '@/components/ui/Atoms';
import { useReveal } from '@/hooks/useReveal';

const typeColors: Record<string, 'blue' | 'violet' | 'emerald'> = {
  'Full-time': 'blue', Contract: 'violet', Freelance: 'emerald',
};

const WorkIcon = () => (
  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export function ExperienceSection() {
  const { t } = useTranslation();
  const [ref, inView] = useReveal({ threshold: 0.05 });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <SectionHeader
          eyebrow={t('experience.eyebrow')}
          title={<>{t('experience.title')} <span className="gradient-text">{t('experience.title_gradient')}</span></>}
          description={t('experience.subtitle')}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const fromX = isEven ? -50 : 50;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: fromX }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-start gap-6 md:gap-10 pl-12 md:pl-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:flex`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-5 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/40 z-10">
                    <WorkIcon />
                  </div>

                  {/* Date panel */}
                  <div className={`hidden md:flex md:w-1/2 items-start pt-5 ${isEven ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                    <div className={isEven ? 'text-right' : 'text-left'}>
                      <p className="text-sm font-mono text-slate-500 mb-1">{exp.period}</p>
                      <Badge variant={typeColors[exp.type]} size="sm">{exp.type}</Badge>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'} w-full`}>
                    <div className="glass rounded-2xl p-5 group hover:border-blue-500/25 transition-colors">
                      {/* Mobile date */}
                      <div className="md:hidden flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                        <Badge variant={typeColors[exp.type]} size="sm">{exp.type}</Badge>
                      </div>

                      <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-0.5">{exp.role}</h3>
                      <p className="text-blue-400 text-sm font-semibold mb-3">{exp.company}</p>
                      <p className="text-slate-500 text-xs leading-relaxed mb-4">{exp.description}</p>

                      <div className="space-y-1.5 mb-4">
                        {exp.achievements.slice(0, 3).map((ach) => (
                          <AchievementItem key={ach} text={ach} />
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.slice(0, 5).map((tech) => (
                          <TechChip key={tech} label={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
