import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Visiting Cards",
    description:
      "Professionally designed and offset-printed visiting cards that make a strong first impression.",
  },
  {
    title: "Brochures & Leaflets",
    description:
      "Eye-catching brochures and leaflets for marketing, events and product promotions.",
  },
  {
    title: "Posters & Banners",
    description:
      "High-quality offset printing for posters and banners for shops, events and campaigns.",
  },
  {
    title: "Logo & Graphic Design",
    description:
      "Custom logo design and graphic design services to build your brand's visual identity.",
  },
  {
    title: "Stickers & Labels",
    description:
      "Self-adhesive paper stickers and printed labels for products and packaging.",
  },
  {
    title: "Notebooks & Diaries",
    description:
      "Spiral notebooks and diaries, customizable with your branding for corporate gifting.",
  },
  {
    title: "Paper Envelopes",
    description:
      "Plain, white and custom printed paper envelopes in bulk for offices and businesses.",
  },
  {
    title: "Calendars, Name Tags & Badges",
    description:
      "Custom table calendars, paper name tags and round brass badges for staff and events.",
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
