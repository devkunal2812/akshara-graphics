import StatCounter from "@/components/StatCounter";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section aria-label="About Akshara Graphics" id="about" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow text-[var(--color-accent)] mb-4">
              About Akshara Graphics
            </p>

            <h2 className="heading-lg font-bold mb-6 sm:mb-8">
              Printing &amp; Design,{" "}
              <span className="font-display italic font-normal">
                Proudly Since 1991.
              </span>
            </h2>

            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-4">
              Welcome to Akshara Graphics — your one-stop-shop for all your printing needs.
              We offer a wide range of printing services including business cards, brochures,
              banners, posters, stickers, notebooks, diaries, calendars and much more.
            </p>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
              We believe that every print tells a story. From the initial consultation to the
              final product, our team guides you every step of the way — with transparent
              pricing, clear timelines, and open communication throughout.
            </p>
          </ScrollReveal>

          <ScrollReveal
            className="grid grid-cols-2 gap-6 sm:gap-10"
            itemSelector="[data-reveal-item]"
            y={24}
          >
            <div data-reveal-item>
              <StatCounter value={30} suffix="+" label="Years in Business" />
            </div>
            <div data-reveal-item>
              <StatCounter value={8} suffix="+" label="Product Categories" />
            </div>
            <div data-reveal-item>
              <StatCounter value={10} suffix="+" label="Team Members" />
            </div>
            <div data-reveal-item>
              <StatCounter value={500} suffix="+" label="Businesses Served" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
