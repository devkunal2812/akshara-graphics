import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates /robots.txt automatically.
 *
 * Rules:
 * - Allow all crawlers full access (good for SEO)
 * - Block AI training scrapers that don't respect content ownership
 * - Point all crawlers to the sitemap
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Main rule: allow all legitimate search engine bots
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // don't index API routes
      },
      {
        // Block GPTBot (OpenAI) from training on site content
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        // Block Google's AI training crawler
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        // Block CCBot (Common Crawl, used for AI training datasets)
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
