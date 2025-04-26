// src/components/sections/footer.tsx
"use client"

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";

/**
 * Footer: renders company copyright and social media links.
 */
export function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <motion.div
        whileInView={{ y: [30, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24"
      >
        <p>&copy; {new Date().getFullYear()} Cresco Homes. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://web.facebook.com/crescorealty/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/crescohomes?igsh=MTQ2dmVueTB0bXphYg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="hover:text-pink-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/cresco-homes-and-properties/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="hover:text-blue-500" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}