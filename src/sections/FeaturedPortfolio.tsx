import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";

const projects = [
  {
    title: "Luxury Business Cards",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Packaging Design",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
  },
  {
    title: "Corporate Brochure",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Brand Identity Kit",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
];

export default function FeaturedPortfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container-custom">
        <ScrollReveal className="mb-8 sm:mb-12">
          <p className="eyebrow text-[var(--color-accent)] mb-4">Our Work</p>
          <h2 className="heading-lg font-bold mb-3 sm:mb-4">Featured Work</h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg">
            Selected projects crafted for our clients.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="flex gap-5 sm:gap-8 overflow-x-auto pb-4 no-scrollbar -mx-1 px-1"
          itemSelector="[data-reveal-item]"
          y={60}
        >
          {projects.map((project) => (
            <div key={project.title} data-reveal-item>
              <ProjectCard {...project} />
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
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
