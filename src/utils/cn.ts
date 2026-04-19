import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely with clsx + tailwind-merge.
 * Prevents class conflicts (e.g., p-2 + p-4 → p-4).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
