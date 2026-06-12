import StatCounter from "@/components/StatCounter";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="eyebrow text-[var(--color-accent)] mb-4">
              About Akshara Graphics
            </p>

            <h2 className="heading-lg font-bold mb-6 sm:mb-8">
              Crafting Print Experiences That{" "}
              <span className="font-display italic font-normal">
                Leave An Impression.
              </span>
            </h2>

            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
              Akshara Graphics specializes in graphic design, branding,
              packaging, and premium printing solutions. Our mission is to
              help businesses communicate effectively through impactful
              visual design and exceptional print quality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-10">
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
