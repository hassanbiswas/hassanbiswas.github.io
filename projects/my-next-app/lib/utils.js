import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Dynamic release versioning (YY.MM.DD)
export const VERSION = new Date().toLocaleDateString('en-GB').split('/').reverse().join('.');

