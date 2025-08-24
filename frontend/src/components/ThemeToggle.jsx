import { Moon, Sun } from "lucide-react";   // Icons for the theme toggle button
import { useState, useEffect } from "react"; // React hooks
import { cn } from "@/lib/utils";            // Utility to merge Tailwind classes

// -----------------------------------------------------------------------------
// ThemeToggle Component
// -----------------------------------------------------------------------------
export const ThemeToggle = () => {
  // Local state to know if dark mode is active or not
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ---------------------------------------------------------------------------
  // Effect: Check stored theme on initial load
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme == "dark") {
      // If user had dark mode saved previously
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      // Default to light mode if nothing saved
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  // ---------------------------------------------------------------------------
  // Toggle function: Switch between light/dark themes
  // ---------------------------------------------------------------------------
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // ---------------------------------------------------------------------------
  // Render: A floating button in the top-right corner
  // Shows a Sun icon when in dark mode, or a Moon icon in light mode
  // ---------------------------------------------------------------------------
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" /> 
      ) : (
        <Moon className="h-6 w-6 text-blue-900" /> 
      )}
    </button>
  );
};