import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Graphic Design",
    description:
      "Creative logos, posters, flyers and social media graphics that capture attention.",
  },
  {
    title: "Branding Solutions",
    description:
      "Build memorable brand identities that stand out from the competition.",
  },
  {
    title: "Printing Services",
    description:
      "Premium quality business cards, brochures and banners with vibrant finishes.",
  },
  {
    title: "Packaging Design",
    description:
      "Product packaging that protects, informs and attracts customers on the shelf.",
  },
  {
    title: "Large Format Printing",
    description:
      "Signages, flex banners, exhibition displays and outdoor advertising.",
  },
  {
    title: "Promotional Materials",
    description:
      "Catalogues, stickers, labels and marketing assets for every campaign.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <ScrollReveal className="max-w-2xl mb-10 sm:mb-14">
          <p className="eyebrow text-[var(--color-accent)] mb-4">Our Services</p>

          <h2 className="heading-lg font-bold mb-4 sm:mb-6">
            What We Do
          </h2>

          <p className="text-[var(--color-text-muted)] text-base sm:text-lg">
            From concept to print, we provide complete creative and printing
            solutions for businesses of every size.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          itemSelector="[data-reveal-item]"
        >
          {services.map((service) => (
            <div key={service.title} data-reveal-item>
              <ServiceCard {...service} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
