import ServiceCard from "@/components/ServiceCard";

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
        <h2 className="text-5xl font-bold mb-4">What We Do</h2>

        <p className="text-[var(--color-text-muted)] mb-14 max-w-2xl">
          From concept to print, we provide complete creative and printing
          solutions for businesses of every size.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
