// trash/trash.tsx
"use client"

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home, PhoneCall, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/toggle";
import { Navbar } from "@/components/navbar";

const featuredProperties = [
    {
        id: 1,
        title: "Modern Apartment in Ikoyi",
        price: "₦150,000,000",
        details: "4 Beds • 3 Baths",
        image: "/apartment 1.jpg",
    },
    {
        id: 2,
        title: "Luxury Villa in Lekki",
        price: "₦250,000,000",
        details: "5 Beds • 4 Baths",
        image: "/apartment 2.jpg",
    },
    {
        id: 3,
        title: "Contemporary Flat in Victoria Island",
        price: "₦120,000,000",
        details: "3 Beds • 2 Baths",
        image: "/apartment 3.jpg",
    },
];

export default function LandingPage() {
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const [locations, setLocations] = useState(0);
    const [statsVisible, setStatsVisible] = useState(false); // Added state for visibility
    const statsSectionRef = useRef<HTMLElement>(null); // Ref for stats section

    useEffect(() => {
      const counters = [
        { setter: setProjects, target: 130, duration: 2000 }, // Added duration
        { setter: setClients, target: 90, duration: 1500 },
        { setter: setLocations, target: 18, duration: 1000 },
      ];

      const startCounters = () => {
        counters.forEach(({ setter, target, duration }) => { // Destructured duration
          let count = 0;
          const interval = setInterval(() => {
            const increment = Math.ceil(target / (duration / 10));  // Increased speed
            count = Math.min(count + increment, target); // Ensure it doesn't overshoot
            setter(count);
            if (count >= target) clearInterval(interval);
          }, 10);
        });
      }


      const handleScroll = () => {
        if (statsSectionRef.current) {
          const rect = statsSectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Check if the stats section is visible
          if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            if (!statsVisible) {
              setStatsVisible(true); // Set visibility to true when section is in view
              startCounters(); // Start counters when visible
            }
          } else {
            setStatsVisible(false); // Reset  when its out of view
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [statsVisible, projects, clients, locations]); // Added statsVisible as dependency



    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <main className="min-h-screen bg-card text-gray-800">
        {/* Navbar */}
        <Navbar scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <section id="hero" 
          className="relative pt-32 bg-[url('/ikoyi-cable-bridge.jpg')] bg-cover bg-center text-white p-12 md:p-24"
        >
          <div className="absolute inset-0 bg-black/50"></div>
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
            <Button onClick={() => scrollToSection("contact")} 
              className="text-lg px-6 py-3 text-white"
            >Get Started</Button>
          </div>
        </section>

        {/* Company Statement */}
        <section id="statement" className="py-16 px-6 md:px-24 bg-card text-center text-card-foreground">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg">
            At Cresco Homes, our mission is to connect people with their perfect property. We believe in transparency, integrity, and outstanding customer service in the Lagos real estate market.
          </p>
        </section>

        {/* Featured Properties */}
        <section id="listings" className="py-16 px-6 md:px-24 text-card-foreground">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Listings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="rounded-2xl shadow-lg overflow-hidden">
                <Image 
                  src={property.image} 
                  alt={property.title} 
                  width={800} height={200} 
                  className="object-cover rounded-sm"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-sm text-card-foreground mb-4">
                    {property.price} • {property.details}
                  </p>
                  {/* <Button variant="outline">Contact Us</Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" ref={statsSectionRef} className="bg-card py-16 px-6 md:px-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-card-foreground">Our Achievements</h2>
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
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-card text-card-foreground py-16 px-6 md:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Home className="mx-auto mb-2" size={32} />
              <p>6a Alternative Rte, Lekki Penninsula II 106104, Lagos, Lekki 106104</p>
            </div>
            <div>
              <PhoneCall className="mx-auto mb-2" size={32} />
              <p>+234 0816 592 0863</p>
            </div>
            <div>
              <Mail className="mx-auto mb-2" size={32} />
              <p>info@crescohomes.ng</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-6">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24">
            <p>&copy; {new Date().getFullYear()} Cresco Homes. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://web.facebook.com/crescorealty/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="hover:text-blue-500" />
              </a>

              <a href="https://www.instagram.com/crescohomes?igsh=MTQ2dmVueTB0bXphYg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="hover:text-pink-500" />
              </a>

              <a href="https://www.linkedin.com/company/cresco-homes-and-properties/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="hover:text-blue-500" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    );
}

