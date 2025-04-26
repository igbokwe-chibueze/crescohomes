// src/components/sections/listingsSection.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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

/**
 * ListingsSection: shows featured property cards with image, title, and price.
 */
export function ListingsSection() {
  return (
    <section id="listings" className="py-16 px-6 md:px-24 text-card-foreground">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Listings</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <Card key={property.id} className="rounded-2xl shadow-lg overflow-hidden border-0">
            <Image
              src={property.image}
              alt={property.title}
              width={800}
              height={200}
              className="object-cover rounded-sm"
            />
            <CardContent className="px-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-sm text-card-foreground mb-4">
                {property.price} • {property.details}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}