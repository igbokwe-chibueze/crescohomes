// src/components/sections/listingsSection.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Bath, Bed, MapPin } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    title: "Fully detached duplex with a bq",
    price: "₦400,000,000",
    beds: 5,
    baths: 4,
    location: "Osapa London Lekki, Lagos",
    image: "/apartment 1.jpeg",
  },
  {
    id: 2,
    title: "Two. Terrace Apartment with Boys' Quarters",
    price: "₦100,000,000",
    beds: 4,
    baths: 4,
    location: "Amuwo Odofin, Lagos",
    image: "/apartment 2.jpeg",
  },
  {
    id: 3,
    title: "Semi detached duplex with pool, bq and cinema ",
    price: "₦325,000,000",
    beds: 5,
    baths: 3,
    location: "Ikota, Lagos",
    image: "/apartment 3.jpeg",
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
          <Card
            key={property.id}
            className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
          >
            <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-2xl">
              <Image
                src={property.image}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <CardContent className="px-4 py-3">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-card-foreground opacity-70 mb-1">
                        <Bed className="mr-1" />
                        <span>{property.beds} Beds</span>

                        <span className="ml-4 flex items-center">
                            <Bath className="mr-1" />
                            <span>{property.baths} Baths</span>
                        </span>
                    </div>

                    <p className="text-lg font-bold text-blue-600">{property.price}</p>
                </div>

                <div className="flex items-center text-sm text-card-foreground opacity-70">
                    <MapPin className="mr-1" />
                    <span>{property.location}</span>
                </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}