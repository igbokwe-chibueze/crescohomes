// src/components/sections/contactSection.tsx
"use client"

import { motion } from "framer-motion";
import { Home, PhoneCall, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-24 bg-card text-card-foreground">
        <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="container mx-auto"
        >
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                <a href="#" className="group h-full">
                    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-xl h-full">
                        <Home className="text-blue-500 dark:text-blue-400 mb-4" size={48} />
                        <h4 className="text-lg font-semibold mb-2">Our Office</h4>
                        <p className="text-center text-card-foreground group-hover:underline">
                            6a Alternative Rte, Lekki Peninsula II <br />
                            106104, Lagos, Nigeria
                        </p>
                    </div>
                </a>

                <a href="tel:+2348165920863" className="group h-full">
                    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-xl h-full">
                        <PhoneCall className="text-green-500 dark:text-green-400 mb-4" size={48} />
                        <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                        <p className="text-center text-card-foreground group-hover:underline">
                        +234 0816 592 0863
                        </p>
                    </div>
                </a>

                <a href="mailto:info@crescohomes.ng" className="group h-full">
                    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-xl h-full">
                        <Mail className="text-orange-500 dark:text-orange-400 mb-4" size={48} />
                        <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                        <p className="text-center text-card-foreground group-hover:underline">
                            info@crescohomes.com
                        </p>
                    </div>
                </a>
            </div>
        </motion.div>
    </section>
  );
}
