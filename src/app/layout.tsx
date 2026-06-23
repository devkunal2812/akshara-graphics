import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

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
      "Graphic design and offset printing in Vadodara — visiting cards, brochures, posters, banners, stickers, diaries, envelopes and calendars. Get a free quote today.",
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
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
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
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.indiamart,
      siteConfig.social.tradeindia,
    ],
    areaServed: {
      "@type": "City",
      name: "Vadodara",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Offset Printing & Graphic Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Visiting Cards" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Brochures & Leaflets" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Posters & Banners" },
      },
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
        itemOffered: { "@type": "Product", name: "Letterheads & Logo Design" },
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What printing services does Akshara Graphics offer in Vadodara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshara Graphics offers offset printing and graphic design for visiting cards, brochures, leaflets, posters and banners, along with stationery products like stickers, labels, notebooks, diaries, envelopes, table calendars, name tags and brass badges.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Akshara Graphics located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshara Graphics is located near BPCL Petrol Pump, 16/18 Bahucharaji Road, Laxmi Estate, Karelibaug, Vadodara, Gujarat 390018.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a price quote for printing or design work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a free quote by filling out the contact form on this website, calling us directly, or messaging us on WhatsApp. Share your product, quantity and design requirements for the fastest response.",
        },
      },
      {
        "@type": "Question",
        name: "Does Akshara Graphics do bulk and corporate orders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Akshara Graphics regularly handles bulk and corporate orders for items such as envelopes, notebooks, diaries, calendars and visiting cards for businesses across Gujarat.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
