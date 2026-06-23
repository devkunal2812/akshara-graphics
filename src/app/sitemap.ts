import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates /sitemap.xml automatically via Next.js.
 *
 * Since this is a single-page site with anchor sections, we list the
 * homepage at priority 1.0 and each anchor as a separate URL entry
 * so search engines can deep-link to sections.
 *
 * Update `lastModified` whenever a section's content changes significantly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/#services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/#portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/#about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
