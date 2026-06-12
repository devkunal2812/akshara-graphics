import StatCounter from "@/components/StatCounter";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[var(--color-accent)] mb-4 font-semibold tracking-wide">
              ABOUT AKSHARA GRAPHICS
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Crafting Print Experiences That Leave An Impression.
            </h2>

            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
              Akshara Graphics specializes in graphic design, branding,
              packaging, and premium printing solutions. Our mission is to
              help businesses communicate effectively through impactful
              visual design and exceptional print quality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <StatCounter value={1000} suffix="+" label="Projects Completed" />
            <StatCounter value={500} suffix="+" label="Happy Clients" />
            <StatCounter value={10} suffix="+" label="Years Experience" />
            <StatCounter value={50} suffix="+" label="Corporate Brands" />
          </div>
        </div>
      </div>
    </section>
  );
}
