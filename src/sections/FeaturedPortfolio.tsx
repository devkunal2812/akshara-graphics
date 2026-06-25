import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";
import ExternalLinkIcon from "@/components/ExternalLinkIcon";

const projects = [
  {
    title: "Business Card",
    category: "Visiting Cards",
    image: "/images/portfolio/portfolio-11.jpg",
    alt: "Premium visiting card printing by Akshara Graphics Vadodara",
  },
  {
    title: "Brochure",
    category: "Brochures & Leaflets",
    image: "/images/portfolio/portfolio-7.jpg",
    alt: "Corporate brochure offset printing Vadodara",
  },
  {
    title: "Product Label",
    category: "Stickers & Labels",
    image: "/images/portfolio/portfolio-1.jpg",
    alt: "Self adhesive product label printing Vadodara",
  },
  {
    title: "Calendar",
    category: "Table Calendars",
    image: "/images/portfolio/portfolio-8.jpg",
    alt: "Custom table calendar printing Akshara Graphics",
  },
];

export default function FeaturedPortfolio() {
  return (
    <section aria-label="Featured Work Portfolio" id="portfolio" className="section">
      <div className="container-custom">
        <ScrollReveal className="mb-8 sm:mb-12">
          <p className="eyebrow text-[var(--color-accent)] mb-4">Our Work</p>
          <h2 className="heading-lg font-bold mb-3 sm:mb-4">Featured Work</h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg">
            Real projects, real results - printed right here in Vadodara.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          itemSelector="[data-reveal-item]"
          y={60}
        >
          {projects.map((project) => (
            <div key={project.title} data-reveal-item className="group">
              <div className="overflow-hidden rounded-[20px] sm:rounded-[28px] relative aspect-square">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 300px"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)]">{project.category}</p>
              <h3 className="font-semibold text-sm sm:text-base">{project.title}</h3>
            </div>
          ))}
        </ScrollReveal>

        <div className="mt-8 sm:mt-10">
          <a
            href={siteConfig.social.indiamart}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[var(--color-border)] font-semibold text-sm sm:text-base hover:bg-white transition"
          >
            View Full Product Catalog on IndiaMART
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
