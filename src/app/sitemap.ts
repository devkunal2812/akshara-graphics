import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates /sitemap.xml automatically via Next.js.
 *
 * For single-page apps, only submit the root URL to Google.
 * Anchor (#) URLs are NOT real URLs - Googlebot ignores the fragment
 * and treats them all as the same page. Listing them in a sitemap
 * causes "Submitted URL not found (404)" warnings in Search Console.
 *
 * The lastModified date tells Google when content last changed,
 * helping it prioritize recrawling.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2025-06-15"), // update this when you make major content changes
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
