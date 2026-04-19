import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '@/data/portfolio.data';

const statKeys = ['experience', 'projects', 'commits', 'clients'] as const;

export function HeroStats() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
    >
      {personalInfo.stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.08 }}
          className="glass rounded-xl p-4 text-center hover:border-blue-500/20 transition-colors"
        >
          <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{stat.value}</div>
          <div className="text-[11px] text-slate-500 font-medium">{t(`stats.${statKeys[i]}`)}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
