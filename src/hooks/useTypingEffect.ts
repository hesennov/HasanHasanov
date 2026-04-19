import { useEffect, useRef, useState } from 'react';

interface UseTypingEffectOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * useTypingEffect — animates through a list of words with typewriter effect.
 * Uses refs instead of callbacks to avoid infinite re-render loops.
 */
export function useTypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypingEffectOptions): string {
  const [displayText, setDisplayText] = useState('');

  const stateRef = useRef({
    wordIndex: 0,
    isDeleting: false,
    displayText: '',
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wordsRef = useRef(words);

  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  useEffect(() => {
    const tick = () => {
      const { wordIndex, isDeleting } = stateRef.current;
      const currentWord = wordsRef.current[wordIndex % wordsRef.current.length];
      const current = stateRef.current.displayText;

      if (isDeleting) {
        const next = current.slice(0, -1);
        stateRef.current.displayText = next;
        setDisplayText(next);

        if (next.length === 0) {
          stateRef.current.isDeleting = false;
          stateRef.current.wordIndex = (wordIndex + 1) % wordsRef.current.length;
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        }
      } else {
        const next = currentWord.slice(0, current.length + 1);
        stateRef.current.displayText = next;
        setDisplayText(next);

        if (next === currentWord) {
          timeoutRef.current = setTimeout(() => {
            stateRef.current.isDeleting = true;
            tick();
          }, pauseDuration);
        } else {
          timeoutRef.current = setTimeout(tick, typingSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Mount only — words/speeds are read from refs

  return displayText;
}
