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

  title: "Akshara Graphics | Printing & Stationery Manufacturer in Vadodara",
  description:
    "Akshara Graphics is a Vadodara-based printing and stationery manufacturer, established in 2000. We produce custom envelopes, notebooks & diaries, stickers & labels, calendars, name tags, brass badges, letterheads and brochures. Get a free quote today.",

  keywords: [
    "Akshara Graphics",
    "printing services Vadodara",
    "stationery manufacturer Vadodara",
    "envelope printing Vadodara",
    "notebook diary manufacturer Gujarat",
    "sticker and label printing Vadodara",
    "table calendar printing Vadodara",
    "name tag manufacturer Vadodara",
    "brass badge manufacturer Gujarat",
    "letterhead and brochure printing Vadodara",
    "custom printing Karelibaug",
  ],

  founder: "R Shah",
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
  },

  // Mon–Sat, 10:00–19:00 (used in JSON-LD openingHoursSpecification)
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
} as const;
