import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/heroSection";
import { StatementSection } from "@/components/sections/statementSection";
import { ListingsSection } from "@/components/sections/listingsSection";
import { StatsSection } from "@/components/sections/statsSection";
import { ContactSection } from "@/components/sections/contactSection";
import { Footer } from "@/components/sections/footer";

export default function LandingPage() {

  return (
    <main className="min-h-screen bg-card">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Company Statement */}
      <StatementSection/>

      {/* Featured Properties */}
      <ListingsSection/>

      {/* Stats Section */}
      <StatsSection/>

      {/* Contact Section */}
      <ContactSection/>

      {/* Footer */}
      <Footer/>
      
    </main>
  );
}

