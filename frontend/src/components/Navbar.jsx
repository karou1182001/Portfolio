import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; 

// -----------------------------------------------------------------------------
// Navigation items (single source of truth for links)
// -----------------------------------------------------------------------------
const navItems = [
  { name: "Home",     href: "#hero" },
  { name: "About",    href: "#about" },
  { name: "Skills",   href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

// -----------------------------------------------------------------------------
// Navbar
// -----------------------------------------------------------------------------
export const Navbar = () => {
  // Visual state: compact header after scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  // UI state: mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // -- Effects ----------------------------------------------------------------
  // Listen to scroll to toggle compact vs. relaxed header paddings/background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  // -- Render -----------------------------------------------------------------
  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        // when scrolled: shrink padding, add blur + subtle shadow
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      {/* Header row: logo, desktop nav, mobile toggle */}
      <div className="container flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center text-xl font-bold text-primary" aria-label="Go to hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Maria's</span>
            <span className="ml-1">Portfolio</span>
          </span>
        </a>

        {/* Desktop navigation (hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle (hamburger / close) */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 text-foreground z-50 focus:outline-none"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay menu (covers screen; fades in/out) */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // close menu after click
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
