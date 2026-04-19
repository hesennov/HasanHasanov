import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { useReveal } from '@/hooks/useReveal';

const VALUES_KEYS = ['architecture', 'performance', 'ui', 'types'] as const;
const VALUE_ICONS = ['🏗️', '⚡', '🎨', '🔒'];

const TECH_TAGS = ['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS v4', 'React Router DOM', 'Node.js', 'REST APIs', 'Git'];

export function AboutSection() {
  const { t } = useTranslation();
  const [ref, inView] = useReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('about.eyebrow')}
          title={<>{t('about.title')} <span className="gradient-text">{t('about.title_gradient')}</span></>}
          description={t('about.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center" ref={ref}>
          {/* Text — slides from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="space-y-4 text-slate-400 text-base leading-relaxed mb-8">
              <p dangerouslySetInnerHTML={{ __html: t('about.bio_1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio_2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio_3') }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => <Badge key={tag} variant="blue" size="sm">{tag}</Badge>)}
            </div>
          </motion.div>

          {/* Value cards — slide from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {VALUES_KEYS.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 group cursor-default hover:border-blue-500/30 transition-colors"
              >
                <div className="text-2xl mb-3">{VALUE_ICONS[i]}</div>
                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {t(`about.values.${key}.title`)}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t(`about.values.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
