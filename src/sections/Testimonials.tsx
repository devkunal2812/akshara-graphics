"use client";

import Marquee from "react-fast-marquee";

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
    review: "Fast delivery and premium finishing — exactly what we needed for our event.",
  },
  {
    name: "Vikram Mehta",
    review: "Their packaging design helped our product stand out on the shelf.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="text-5xl font-bold mb-12">What Our Clients Say</h2>
      </div>

      <Marquee pauseOnHover gradient={false}>
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="mx-4 bg-white rounded-[30px] p-8 border border-[var(--color-border)] w-[380px]"
          >
            <p className="text-[var(--color-accent)] mb-3">★★★★★</p>

            <p className="text-[var(--color-text-muted)]">{item.review}</p>

            <h3 className="font-semibold mt-4">{item.name}</h3>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
