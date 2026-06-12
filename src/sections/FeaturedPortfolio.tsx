import ProjectCard from "@/components/ProjectCard";

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
        <h2 className="text-5xl font-bold mb-4">Featured Work</h2>

        <p className="text-[var(--color-text-muted)] mb-12">
          Selected projects crafted for our clients.
        </p>

        <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
