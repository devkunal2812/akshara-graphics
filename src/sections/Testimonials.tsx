"use client";

import Marquee from "react-fast-marquee";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Raj Patel",
    review: "Exceptional print quality and professional service from start to finish.",
  },
  {
    name: "Neha Shah",
    review: "Our branding completely transformed after working with Akshara Graphics.",
  },
  {
    name: "Corporate Client",
    review: "Fast delivery and premium finishing - exactly what we needed for our event.",
  },
  {
    name: "Vikram Mehta",
    review: "Their packaging design helped our product stand out on the shelf.",
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Client Testimonials" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="eyebrow text-[var(--color-accent)] mb-4">Testimonials</p>

          <h2 className="heading-lg font-bold mb-10 sm:mb-12">
            What Our{" "}
            <span className="font-display italic font-normal">
              Clients Say
            </span>
          </h2>
        </ScrollReveal>
      </div>

      <Marquee pauseOnHover gradient={false}>
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="mx-3 sm:mx-4 bg-white rounded-[24px] sm:rounded-[30px] p-5 sm:p-6 border border-[var(--color-border)] w-[300px] sm:w-[380px]"
          >
            <p className="text-[var(--color-accent)] mb-3">★★★★★</p>

            <p className="text-[var(--color-text-muted)] text-sm sm:text-base">
              {item.review}
            </p>

            <h3 className="font-semibold mt-4 font-display italic">
              {item.name}
            </h3>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
