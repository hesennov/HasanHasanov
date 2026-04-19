import { Suspense, lazy } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';

// Lazy load below-the-fold sections
const AboutSection = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const SkillsSection = lazy(() =>
  import('@/components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const ExperienceSection = lazy(() =>
  import('@/components/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
);
const ProjectsSection = lazy(() =>
  import('@/components/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const ContactSection = lazy(() =>
  import('@/components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

function SectionLoader() {
  return (
    <div className="h-40 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function HomePage() {
  useScrollSpy(); // registers active section in Redux

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
