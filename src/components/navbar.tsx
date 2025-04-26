// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/toggle";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

/**
 * Navbar component: renders the site logo, navigation links, 
 * theme toggle button, and a responsive mobile menu.
 */
export function Navbar({ scrollToSection }: NavbarProps) {
  // State to control the visibility of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // List of section IDs for navigation
  const navItems = ["hero", "statement", "listings", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-card shadow z-50 py-4 px-6 md:px-24 
          flex justify-between items-center text-card-foreground">
      {/* Logo Section */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Cresco Homes logo"
          width={164}
          height={48}
          className="dark:hidden"
        />
        <Image
          src="/logo-dark.png"
          alt="Cresco Homes logo (Dark Mode)"
          width={164}
          height={48}
          className="hidden dark:flex"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="hover:text-blue-600 transition"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}

        {/* Theme Toggle Button */}
        <ModeToggle />
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
        <div className="fixed inset-0 bg-card bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection(id);
              }}
              className="text-2xl font-medium hover:text-blue-600 transition"
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
