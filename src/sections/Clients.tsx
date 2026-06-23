"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import ScrollReveal from "@/components/ScrollReveal";

// 12 real client logos from the original Akshara Graphics website
const clients = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/clients/client-${i + 1}.png`,
  alt: `Akshara Graphics client ${i + 1}`,
}));

export default function Clients() {
  return (
    <section aria-label="Our Clients" className="section">
      <div className="container-custom">
        <ScrollReveal className="mb-8 sm:mb-10 text-center">
          <p className="eyebrow text-[var(--color-accent)] mb-4">Trusted By</p>
          <h2 className="heading-lg font-bold">
            Businesses That{" "}
            <span className="font-display italic font-normal">Trust Us</span>
          </h2>
        </ScrollReveal>
      </div>

      <Marquee pauseOnHover gradient={false} speed={40}>
        {clients.map((client) => (
          <div
            key={client.id}
            className="mx-6 sm:mx-8 flex items-center justify-center h-16 sm:h-20 w-32 sm:w-44 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={160}
              height={80}
              className="object-contain max-h-14 sm:max-h-16 w-auto"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
