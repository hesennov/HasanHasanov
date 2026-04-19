import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '@/data/portfolio.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TechChip, SkillTag } from '@/components/ui/Atoms';
import { cn } from '@/utils/cn';

// SVG Icons
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const TrendIcon = () => (
  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { t } = useTranslation();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Gradient top stripe */}
      <div className={cn('h-1.5 bg-gradient-to-r', project.gradient.replace('/20', ''))} />

      {/* Visual area */}
      <div className={cn('h-36 relative overflow-hidden bg-gradient-to-br', project.gradient)}>
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-15 select-none">
          {project.category === 'AI/ML' ? '🤖' : project.category === 'Full Stack' ? '🔧' : '⚛️'}
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="violet" size="sm"><StarIcon /> {t('projects.featured')}</Badge>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="default" size="sm">{project.category}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-4 mb-4">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-sm font-bold text-blue-400 font-mono">{m.value}</div>
                <div className="text-[10px] text-slate-600">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 5).map((tech) => <TechChip key={tech} label={tech} />)}
          {project.tech.length > 5 && <span className="text-[10px] text-slate-600 self-center">+{project.tech.length - 5}</span>}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" id={`project-live-${project.id}`} className="flex-1">
              <Button size="sm" className="w-full" leftIcon={<ExternalIcon />}>{t('projects.live')}</Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" id={`project-github-${project.id}`} className={project.liveUrl ? '' : 'flex-1'}>
              <Button size="sm" variant="secondary" className={project.liveUrl ? '' : 'w-full'} leftIcon={<GitHubIcon />}>
                {project.liveUrl ? '' : t('projects.github')}
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow={t('projects.eyebrow')}
          title={<>{t('projects.title')} <span className="gradient-text">{t('projects.title_gradient')}</span></>}
          description={t('projects.subtitle')}
        />

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <TrendIcon />
            {t('projects.more_on_github')}
          </div>
          <a href="https://github.com/hesennov" target="_blank" rel="noopener noreferrer" id="projects-github-all">
            <Button variant="secondary" leftIcon={<GitHubIcon />}>{t('projects.github_all')}</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
