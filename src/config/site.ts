/**
 * Central site configuration for SEO and structured data.
 *
 * IMPORTANT: Update `url` to your real production domain once you have one
 * (e.g. "https://aksharagraphics.in"). You can also set the
 * NEXT_PUBLIC_SITE_URL environment variable to override this without
 * touching code — useful for staging vs. production deployments.
 */
export const siteConfig = {
  name: "Akshara Graphics",
  shortName: "Akshara Graphics",
  tagline: "Design. Print. Inspire.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://akshara-graphics.vercel.app",

  title: "Akshara Graphics | Graphic Design & Printing Services in Vadodara",
  description:
    "Akshara Graphics is a Vadodara-based creative design and printing studio offering logo design, branding, brochures, business cards, packaging and large-format printing. Get a free quote today.",

  keywords: [
    "Akshara Graphics",
    "graphic design Vadodara",
    "printing services Vadodara",
    "branding agency Gujarat",
    "business card printing Vadodara",
    "brochure design Vadodara",
    "packaging design Gujarat",
    "logo design company Vadodara",
    "large format printing Vadodara",
    "creative design studio Karelibaug",
  ],

  contact: {
    phone: "+91-XXXXXXXXXX", // TODO: replace with real phone number
    email: "hello@aksharagraphics.com", // TODO: replace with real email
    whatsapp: "https://wa.me/91XXXXXXXXXX", // TODO: replace with real WhatsApp number
  },

  address: {
    streetAddress:
      "B/S, BPCL Petrol Pump, 16/18, Bahucharaji Rd, Laxmi Estate, Karelibaug",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390018",
    addressCountry: "IN",
  },

  // Approximate coordinates for Karelibaug, Vadodara — refine with exact
  // lat/long from Google Maps for best local SEO results.
  geo: {
    latitude: 22.3251,
    longitude: 73.2046,
  },

  social: {
    facebook: "https://www.facebook.com/aksharagraphics", // TODO: update
    instagram: "https://www.instagram.com/aksharagraphics", // TODO: update
  },

  // Mon–Sat, 10:00–19:00 (used in JSON-LD openingHoursSpecification)
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
} as const;
