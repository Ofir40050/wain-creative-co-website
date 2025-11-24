import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility helper for merging Tailwind + conditional classes.
 * Uses clsx for conditional logic and tailwind-merge to resolve conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
