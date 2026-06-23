/**
 * Central site configuration — single source of truth for all SEO,
 * structured data, and metadata across the site.
 *
 * When you get a custom domain, update `url` here. That's the only
 * change needed — everything else references this value.
 */
export const siteConfig = {
  name: "Akshara Graphics",
  shortName: "Akshara Graphics",
  tagline: "Design. Print. Inspire.",

  // Locked to Vercel deployment URL. Update this when custom domain is ready.
  url: "https://akshara-graphics.vercel.app",

  // Page <title> — keyword-rich, under 60 chars for Google display
  title: "Akshara Graphics | Printing & Design Services in Vadodara",

  // Meta description — under 160 chars, includes primary keywords + CTA
  description:
    "Akshara Graphics, Vadodara. Offset printing & graphic design since 1991. Visiting cards, brochures, posters, banners, stickers, diaries, envelopes & calendars. Call for free quote.",

  // Long-tail keywords targeting Vadodara / Gujarat local searches
  keywords: [
    // Brand
    "Akshara Graphics",
    "Akshara Graphics Vadodara",
    // Core services
    "printing services Vadodara",
    "offset printing Vadodara",
    "graphic design Vadodara",
    // Product-specific (high commercial intent)
    "visiting card printing Vadodara",
    "business card printing Vadodara",
    "brochure printing Vadodara",
    "leaflet printing Vadodara",
    "poster printing Vadodara",
    "banner printing Vadodara",
    "sticker printing Vadodara",
    "label printing Vadodara",
    "notebook printing Vadodara",
    "diary printing Vadodara",
    "envelope printing Vadodara",
    "calendar printing Vadodara",
    "name tag printing Vadodara",
    "brass badge manufacturer Vadodara",
    // Local area
    "printing shop Karelibaug",
    "printing press Vadodara",
    "custom printing Gujarat",
  ],

  founder: "Rajesh Shah",
  foundingYear: 1991,

  contact: {
    phone: "+91-79-4265-9615",
    phoneRaw: "+917942659615",
    email: "info@aksharagraphics.com",
    whatsapp: "https://wa.me/917942659615",
  },

  address: {
    streetAddress: "B/S, BPCL Petrol Pump, 16/18, Bahucharaji Rd, Laxmi Estate, Karelibaug",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390018",
    addressCountry: "IN",
  },

  // Precise coordinates for Karelibaug, Vadodara
  // Get exact lat/lng from: maps.google.com -> right-click your shop -> "What's here?"
  geo: {
    latitude: 22.3251,
    longitude: 73.2046,
  },

  // Google Maps link — used in JSON-LD hasMap field
  googleMapsUrl:
    "https://www.google.com/maps/search/Akshara+Graphics+Karelibaug+Vadodara",

  social: {
    // Only real, verified URLs — placeholder FB/Instagram removed
    indiamart: "https://www.indiamart.com/aksharagraphics-vadodara/",
    tradeindia: "https://www.tradeindia.com/akshara-graphics-2780047/",
    // Add these when real pages exist:
    // facebook: "https://www.facebook.com/aksharagraphics",
    // instagram: "https://www.instagram.com/aksharagraphics",
  },

  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
} as const;
