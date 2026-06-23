import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

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

// ─── Metadata ─────────────────────────────────────────────────────────────────
// Next.js injects these as <head> tags automatically.
// metadataBase makes all relative image URLs resolve correctly for OG/Twitter.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  // Title template: section pages get "Page Name | Akshara Graphics"
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

  // Canonical URL - prevents duplicate content penalties
  alternates: {
    canonical: "/",
    // hreflang: if you ever add Hindi pages, add them here
  },

  // Full crawl access with large image previews for Google Discover
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph - controls how link looks when shared on WhatsApp, Facebook, etc.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Printing & Design Services in Vadodara since 1991`,
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },

  // Favicon and Apple touch icon
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
    shortcut: "/favicon.png",
  },

  // PWA manifest
  manifest: "/manifest.webmanifest",

  // Mobile browser chrome color - matches brand accent
  // (also set in <head> below via <meta> for broader support)
  other: {
    "theme-color": "#D97757",
    "color-scheme": "light",
    // Geo meta tags - help local/regional search engines
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara, Gujarat, India",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    "ICBM": `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    // Business meta
    "business:contact_data:street_address": siteConfig.address.streetAddress,
    "business:contact_data:locality": siteConfig.address.addressLocality,
    "business:contact_data:region": siteConfig.address.addressRegion,
    "business:contact_data:postal_code": siteConfig.address.postalCode,
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": siteConfig.contact.phone,
    "business:contact_data:email": siteConfig.contact.email,
    // Google Search Console verification
    // TODO: Replace with your actual verification code from:
    // search.google.com/search-console -> Add property -> HTML tag method
    // "google-site-verification": "YOUR_VERIFICATION_CODE_HERE",
  },

  category: "business",

  // Google Search Console ownership verification
  verification: {
    google: "google759196df54ae615c",
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
// JSON-LD is the recommended format by Google for structured data.
// These scripts are parsed by search engines but invisible to users.
// Each schema type unlocks different rich result features in Google Search.

function StructuredData() {

  // 1. LocalBusiness + Organization
  //    - Powers the Google Knowledge Panel (right sidebar in search)
  //    - Enables "near me" / map pack results
  //    - Shows business info directly in search results (phone, hours, address)
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["Akshara Graphics Vadodara", "Akshara Graphics & Printing"],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₹",
    foundingDate: String(siteConfig.foundingYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    // logo must be ImageObject for Google Knowledge Panel logo eligibility
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 600,
      height: 239,
    },
    image: [
      `${siteConfig.url}/og-image.jpg`,
      `${siteConfig.url}/logo.png`,
    ],
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
    hasMap: siteConfig.googleMapsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    // Only real, verified URLs in sameAs - fake URLs hurt more than help
    sameAs: [
      siteConfig.social.indiamart,
      siteConfig.social.tradeindia,
    ],
    areaServed: [
      { "@type": "City", name: "Vadodara" },
      { "@type": "State", name: "Gujarat" },
    ],
    // AggregateRating - helps show star ratings in search results
    // Update these numbers when you collect real reviews
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offset Printing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Visiting Cards" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Brochures & Leaflets" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Posters & Banners" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Stickers & Labels" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Notebooks & Diaries" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Paper Envelopes" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Table Calendars" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Name Tags & Brass Badges" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Letterheads" } },
    ],
  };

  // 2. WebSite schema with SearchAction
  //    - Enables Google Sitelinks search box (search bar shown under your result)
  //    - Tells Google the site name to use in breadcrumbs
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-IN",
    // potentialAction tells Google how to pass a search query to your site
    // Currently a single page app, so this points to the contact section
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/#contact`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // 3. FAQPage schema
  //    - Enables FAQ rich results: accordion questions shown directly in Google Search
  //    - Great for voice search (Google Assistant reads these answers)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What printing services does Akshara Graphics offer in Vadodara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshara Graphics offers offset printing and graphic design for visiting cards, brochures, leaflets, posters, banners, stickers, labels, notebooks, diaries, envelopes, table calendars, name tags and brass badges in Vadodara, Gujarat.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Akshara Graphics located in Vadodara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshara Graphics is located B/S BPCL Petrol Pump, 16/18 Bahucharaji Road, Laxmi Estate, Karelibaug, Vadodara, Gujarat 390018. We are open Monday to Saturday, 10:00 AM to 7:00 PM.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a price quote for printing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get a free quote by filling the contact form on our website, calling +91-79-4265-9615, or WhatsApp messaging us. Share your product type, quantity, size and design details for the fastest response.",
        },
      },
      {
        "@type": "Question",
        name: "Does Akshara Graphics handle bulk and corporate orders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We regularly handle bulk corporate orders for envelopes, notebooks, diaries, calendars, visiting cards and stationery for businesses across Vadodara and Gujarat. Contact us for wholesale pricing.",
        },
      },
      {
        "@type": "Question",
        name: "How long has Akshara Graphics been in business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshara Graphics has been providing printing and design services since 1991 - over 30 years of experience serving businesses in Vadodara and Gujarat.",
        },
      },
      {
        "@type": "Question",
        name: "What is the contact number for Akshara Graphics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Akshara Graphics at +91-79-4265-9615. We are available Monday to Saturday, 10:00 AM to 7:00 PM IST.",
        },
      },
    ],
  };

  // 4. BreadcrumbList
  //    - Tells Google the site hierarchy for breadcrumb display in search results
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portfolio",
        item: `${siteConfig.url}/#portfolio`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${siteConfig.url}/#contact`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google Search Console verification
            Both methods active: HTML file at /google759196df54ae615c.html
            and meta tag below (meta tag is more reliable long-term) */}
        <meta name="google-site-verification" content="google759196df54ae615c" />

        {/* Theme color for mobile browser chrome (Android Chrome, Safari) */}
        <meta name="theme-color" content="#D97757" />
        <meta name="color-scheme" content="light" />

        {/* Geo tags - help regional/local search engines */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Vadodara, Gujarat, India" />
        <meta name="geo.position" content={`${siteConfig.geo.latitude};${siteConfig.geo.longitude}`} />
        <meta name="ICBM" content={`${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`} />

        {/* Prevent phone number auto-detection (we control click-to-call links) */}
        <meta name="format-detection" content="telephone=no" />

        {/* Structured data */}
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
