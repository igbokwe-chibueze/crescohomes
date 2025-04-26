// src/components/sections/about.tsx
// src/components/sections/aboutUsSection.tsx
import Image from "next/image";
import Link from "next/link";

const aboutUsData = [
  {
    title: "Property Investment",
    description:
      "At Cresco Homes & Properties, we offer expert investment advisory services, helping clients make smart, profitable real estate decisions. From brokerage to property valuation and mortgage consultancy, we guide investors through every step, maximizing returns and building lasting value.",
    readMoreLink: "#investment-details", // Replace with actual link if needed
    imageSrc: "/apartment 1.jpeg", // Replace with your investment image
  },
  {
    title: "Property Sale",
    description:
      "We pride ourselves on delivering exceptional real estate solutions tailored to the unique needs of each client. Our full-service brokerage ensures seamless property sales and acquisitions, combining industry expertise with personalized service to exceed expectations.",
    readMoreLink: "#sale-details", // Replace with actual link if needed
    imageSrc: "/apartment 1.jpeg", // Replace with your sale image
  },
  {
    title: "Property Development",
    description:
      "At Cresco Homes & Properties, we are dedicated to building world-class structures and thriving estates. Our development team is made up of highly trained engineers, architects, building technologists, and mechanical services experts who work together to deliver outstanding infrastructure. From design to final construction, we create spaces that set new standards for quality and innovation.",
    readMoreLink: "#development-details", // Replace with actual link if needed
    imageSrc: "/construction.jpeg", // Replace with your development image
  },
];

export function AboutUsSection() {
  return (
    <section id="about" className="min-h-screen py-16 px-6 md:px-24 bg-gray-100 dark:bg-gray-800 text-card-foreground">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Cresco Homes</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {aboutUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-card-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Link href={item.readMoreLink} className="text-blue-500 hover:text-blue-700 transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}