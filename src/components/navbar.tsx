// src/components/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/toggle";

/**
 * Navbar component: renders the site logo, navigation links, 
 * theme toggle button, and a responsive mobile menu.
 */
export function Navbar() {
  // State to control the visibility of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to track if the page has been scrolled past threshold
  const [scrolled, setScrolled] = useState(false);

  // List of section IDs for navigation
  const navItems = ["hero", "statement", "listings", "contact"];

  // Determine link text color class based on scroll state
  const linkColorClass = scrolled ? "text-card-foreground" : "text-white";

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Add scroll listener to toggle `scrolled` state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Check on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={
        `fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 transition-colors duration-300 ${
          scrolled ? "bg-card shadow-md" : "bg-transparent"
        } `
      }
    >
      {/* Logo Section */}
      <Link href="/">
        {/* Dark logo */}
        <Image
          src="/logo-dark.png"
          alt="Cresco Homes logo (Dark)"
          width={164}
          height={48}
          className={`${scrolled ? "hidden dark:flex" : "flex"}`}
        />
        {/* Light logo */}
        <Image
          src="/logo.png"
          alt="Cresco Homes logo (Light)"
          width={164}
          height={48}
          className={`${scrolled ? "flex dark:hidden" : "hidden"}`}
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`hover:text-blue-600 transition ${linkColorClass}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}

        {/* Theme Toggle Button */}
        <ModeToggle scrolled={scrolled} />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="md:hidden p-2 rounded focus:outline-none focus:ring z-30"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-card bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection(id);
              }}
              className={`text-2xl font-medium hover:text-blue-600 transition ${linkColorClass}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <ModeToggle />
        </div>
      )}
    </nav>
  );
}
