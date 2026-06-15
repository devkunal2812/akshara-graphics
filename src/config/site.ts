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

  title: "Akshara Graphics | Graphic Design & Offset Printing in Vadodara",
  description:
    "Akshara Graphics is a Vadodara-based printing and design company, established in 2000. We offer offset printing and graphic design for visiting cards, brochures, leaflets, posters, banners, stickers, envelopes, notebooks & diaries, calendars, name tags and brass badges. Get a free quote today.",

  keywords: [
    "Akshara Graphics",
    "printing services Vadodara",
    "offset printing Vadodara",
    "graphic design Vadodara",
    "visiting card printing Vadodara",
    "brochure and leaflet printing Vadodara",
    "poster and banner printing Gujarat",
    "envelope printing Vadodara",
    "notebook diary manufacturer Gujarat",
    "sticker and label printing Vadodara",
    "table calendar printing Vadodara",
    "name tag and brass badge manufacturer Vadodara",
    "custom printing Karelibaug",
  ],

  founder: "Rajesh Shah",
  foundingYear: 2000,

  contact: {
    phone: "+91-79-4265-9615",
    phoneRaw: "+917942659615",
    email: "info@aksharagraphics.com", // TODO: confirm real email
    whatsapp: "https://wa.me/917942659615",
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
    indiamart: "https://www.indiamart.com/aksharagraphics-vadodara/",
    tradeindia: "https://www.tradeindia.com/akshara-graphics-2780047/",
  },

  // Mon–Sat, 10:00–19:00 (used in JSON-LD openingHoursSpecification)
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
} as const;
