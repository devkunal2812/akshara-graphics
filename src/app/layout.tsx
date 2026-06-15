import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Creative graphic design, branding, packaging and premium printing services in Vadodara, Gujarat. Transform your ideas into impactful visual experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Design. Print. Inspire.`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "business",
};

/**
 * JSON-LD structured data for Google: combines a LocalBusiness profile
 * (for "near me" / map pack results) with an Organization entity
 * (for the Google Knowledge Panel / brand search results).
 */
function StructuredData() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Akshara Graphics & Printing",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₹",
    foundingDate: String(siteConfig.foundingYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    areaServed: {
      "@type": "City",
      name: "Vadodara",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Custom Printed Envelopes" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Spiral Notebooks & Diaries" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Self Adhesive Stickers & Labels" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Custom Table Calendars" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Paper Name Tags & Brass Badges" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Letterheads & Brochures" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Files, Folders & Notebooks" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
