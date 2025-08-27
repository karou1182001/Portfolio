// Nav.tsx / Nav.jsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";   
import { Menu, X } from "lucide-react";     
import { cn } from "@/lib/utils";           

// -----------------------------------------------------------------------------
// Navigation items (single source of truth)
// -----------------------------------------------------------------------------
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Nav = () => {
  // State to shrink header after scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  // State to toggle mobile menu (open/close)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ---------------------------------------------------------------------------
  // Detect scroll position → toggle compact header
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---------------------------------------------------------------------------
  // Lock body scroll when mobile menu is open
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const root = document.documentElement;
    if (isMenuOpen) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* -----------------------------
           NAVBAR
      ------------------------------ */}
      <nav
        role="navigation"
        aria-label="Main"
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300 h-16",
          // Shrink style + blur when scrolled, transparent at the top
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            {/* Brand / Logo */}
            <a href="#hero" className="text-lg font-bold text-primary">
              <span className="text-foreground">Maria's</span>
              <span className="ml-1">Portfolio</span>
            </a>

            {/* Desktop navigation (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile toggle button (hamburger / close) */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* -----------------------------
           MOBILE OVERLAY MENU
           Rendered outside of <nav> via portal to avoid iOS fixed bugs
      ------------------------------ */}
      {createPortal(
        <div
          className={cn(
            "fixed inset-0 z-50 md:hidden", // full screen overlay
            "bg-background/95 backdrop-blur-md transition-opacity duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          // Safe area for devices with notch (iPhone)
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {/* Centered vertical menu items */}
          <div className="h-full w-full flex flex-col items-center justify-center space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)} // close menu after click
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
