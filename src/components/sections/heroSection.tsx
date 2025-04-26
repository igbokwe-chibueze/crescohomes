// src/components/sections/heroSection.tsx
"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * HeroSection: displays the main hero banner with title, subtitle, and CTA.
 */
export function HeroSection() {
    
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
  return (
    <section
      id="hero"
      className="relative h-screen pt-32 bg-[url('/ikoyi-cable-bridge.jpg')] bg-cover bg-center text-white p-12 md:p-24"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-4xl mx-auto text-center py-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your Dream Home in Lagos
        </motion.h1>
        <p className="text-lg md:text-xl mb-8">
          Discover premium properties with our expert real estate services.
        </p>
        <Button onClick={() => scrollToSection("contact")} className="text-lg px-6 py-3 text-white">
          Get Started
        </Button>
      </div>
    </section>
  );
}