import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

// Custom SVG Icons
const EmailIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function ContactSection() {
  const { t } = useTranslation();
  const [ref, inView] = useReveal();

  const CONTACT_INFO = [
    { 
      icon: <EmailIcon />, 
      label: t('contact.email_label'), 
      value: 'hasanhasanovpasa@gmail.com', 
      href: 'mailto:hasanhasanovpasa@gmail.com',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
      shadow: 'hover:shadow-blue-500/20'
    },
    { 
      icon: <LinkedInIcon />, 
      label: 'LinkedIn', 
      value: 'in/hesennov', 
      href: 'https://mx.linkedin.com/in/hesennov',
      color: 'text-violet-400',
      bg: 'bg-violet-500/10 border-violet-500/20',
      shadow: 'hover:shadow-violet-500/20'
    },
    { 
      icon: <GitHubIcon />, 
      label: 'GitHub', 
      value: 'hesennov', 
      href: 'https://github.com/hesennov',
      color: 'text-slate-300',
      bg: 'bg-slate-500/10 border-slate-500/20',
      shadow: 'hover:shadow-slate-500/20'
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-64 bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={<>{t('contact.title')} <span className="gradient-text">{t('contact.title_gradient')}</span></>}
          description={t('contact.subtitle')}
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {CONTACT_INFO.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              className={`glass rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 shadow-lg ${item.shadow}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{item.label}</h3>
              <p className="text-slate-400 text-sm break-all">{item.value}</p>
            </motion.a>
          ))}
        </div>
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="text-sm text-slate-300 font-medium">
              {t('contact.open_desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
