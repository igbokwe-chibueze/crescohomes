// src/components/sections/contactSection.tsx
import { Home, PhoneCall, Mail } from "lucide-react";

/**
 * ContactSection: displays office address, phone, and email icons and info.
 */
export function ContactSection() {
  return (
    <section id="contact" className="bg-card text-card-foreground py-16 px-6 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
                <Home className="mx-auto mb-2" size={32} />
                <p>6a Alternative Rte, Lekki Peninsula II 106104, Lagos</p>
            </div>

            <div>
                <PhoneCall className="mx-auto mb-2" size={32} />
                <a href="tel:+2348165920863" className="hover:underline">
                    +234 0816 592 0863
                </a>
            </div>

            <div>
                <Mail className="mx-auto mb-2" size={32} />
                <a href="mailto:info@crescohomes.ng" className="hover:underline">
                    info@crescohomes.ng
                </a>
            </div>
        </div>
    </section>
  );
}