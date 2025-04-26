// src/components/sections/statementSection.tsx
/**
 * StatementSection: displays the company mission statement.
 */
export function StatementSection() {
    return (
      <section
        id="statement"
        className="py-16 px-6 md:px-24 bg-card text-center text-card-foreground"
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          At Cresco Homes, our mission is to connect people with their perfect
          property. We believe in transparency, integrity, and outstanding
          customer service in the Lagos real estate market.
        </p>
      </section>
    );
  }