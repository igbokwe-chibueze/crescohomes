import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Cresco Homes — Find Your Dream Home in Lagos',
  description: 'Cresco Homes connects you with premium Lagos real estate: modern apartments, luxury villas, and contemporary flats. Experience transparent deals, expert guidance, and exceptional service.',
  keywords: [
    'Cresco Homes',
    'Lagos real estate',
    'Ikoyi apartments',
    'Lekki villas',
    'Victoria Island flats',
    'Nigeria property listings'
  ],
  authors: [{ name: 'Cresco Homes' }],
  //metadataBase: new URL('https://crescohomes.ng'),
  // openGraph: {
  //   title: 'Cresco Homes — Find Your Dream Home in Lagos',
  //   description: 'Discover modern apartments, luxury villas, and contemporary flats across Lagos with Cresco Homes.',
  //   url: 'https://crescohomes.ng',
  //   siteName: 'Cresco Homes',
  //   type: 'website',
  //   locale: 'en_US',
  //   images: [
  //     {
  //       url: 'https://crescohomes.ng/opengraph-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Cresco Homes featured properties in Lagos',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Cresco Homes — Find Your Dream Home in Lagos',
  //   description: 'Premium real estate in Lagos: apartments, villas & flats. Contact us for bespoke property services.',
  //   images: ['https://crescohomes.ng/twitter-image.jpg'],
  // },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
