import { useInView } from 'react-intersection-observer';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * useReveal — convenience wrapper around react-intersection-observer
 * for trigger-once scroll reveal animations.
 */
export function useReveal(options?: RevealOptions) {
  return useInView({
    threshold: options?.threshold ?? 0.15,
    triggerOnce: options?.triggerOnce ?? true,
    rootMargin: options?.rootMargin,
  });
}
