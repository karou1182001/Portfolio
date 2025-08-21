import { clsx } from "clsx";                 // Utility to conditionally join classNames
import { twMerge } from "tailwind-merge";   // Utility to intelligently merge Tailwind CSS classes

// cn() is a helper function that combines `clsx` and `tailwind-merge`
// - clsx: allows conditional and dynamic className building
// - twMerge: resolves TailwindCSS class conflicts (e.g., "p-2 p-4" → keeps "p-4")
//
// Usage:
//   cn("p-2", condition && "bg-red-500", "p-4")
//   -> "bg-red-500 p-4"
//
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
