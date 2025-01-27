import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// This utility function combines multiple class names/values into a single string
// It uses clsx to merge class values and tailwind-merge to handle Tailwind CSS conflicts
// Example: cn('text-red-500', 'bg-blue-200', condition && 'p-4') 
// Returns a merged className string with Tailwind classes properly deduped
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
