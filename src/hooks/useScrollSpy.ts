import { useEffect, useState, useRef } from 'react';
import { useAppDispatch } from '@/app/store';
import { setActiveSection, type SectionId } from '@/features/ui/uiSlice';

const SECTION_IDS: SectionId[] = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

/**
 * useScrollSpy — tracks which section is currently in viewport
 * and dispatches to Redux store. Uses IntersectionObserver for performance.
 */
export function useScrollSpy() {
  const dispatch = useAppDispatch();
  const [activeId, setActiveId] = useState<SectionId>('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as SectionId;
          setActiveId(id);
          dispatch(setActiveSection(id));
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [dispatch]);

  return activeId;
}
