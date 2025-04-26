// src/components/sections/statsSection.tsx
"use client"

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * StatsSection: animates and displays counters for projects, clients, and locations.
 */
export function StatsSection() {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [locations, setLocations] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const counters = [
      { setter: setProjects, target: 130, duration: 2000 },
      { setter: setClients, target: 90, duration: 1500 },
      { setter: setLocations, target: 18, duration: 1000 },
    ];

    const start = () => {
      counters.forEach(({ setter, target, duration }) => {
        let count = 0;
        const interval = setInterval(() => {
          const inc = Math.ceil(target / (duration / 10));
          count = Math.min(count + inc, target);
          setter(count);
          if (count >= target) clearInterval(interval);
        }, 10);
      });
    };

    const onScroll = () => {
      if (!ref.current) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      const inView = top < window.innerHeight * 0.8 && bottom > 0;
      if (inView && !active) {
        setActive(true);
        start();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  return (
    <section id="stats" ref={ref} className="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-24">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-700">{projects}+</p>
            <p className="text-lg text-card-foreground">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">{clients}+</p>
            <p className="text-lg text-card-foreground">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-700">{locations}+</p>
            <p className="text-lg text-card-foreground">Locations Covered</p>
          </div>
        </div>

      </motion.div>

    </section>
  );
}