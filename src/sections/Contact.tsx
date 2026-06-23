"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire up to @emailjs/browser or an API route here.
    setTimeout(() => setStatus("sent"), 1000);
  }

  return (
    <section aria-label="Contact and Get a Quote" id="contact" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow text-[var(--color-accent)] mb-4">
              Get In Touch
            </p>

            <h2 className="heading-lg font-bold mb-6 sm:mb-8">
              Let&apos;s Create{" "}
              <span className="font-display italic font-normal">
                Something Great.
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              <p>
                📞{" "}
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-[var(--color-accent)]">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--color-accent)]">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>📍 {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}</p>
              <p>🕒 Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3.5 sm:py-4 bg-green-500 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
          </ScrollReveal>

          <ScrollReveal y={60}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              required
              name="name"
              placeholder="Your Name"
              className="w-full border border-[var(--color-border)] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              required
              name="company"
              placeholder="Company Name"
              className="w-full border border-[var(--color-border)] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-[var(--color-border)] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-[var(--color-border)] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <div className="relative">
              <select
                name="service"
                defaultValue=""
                className="w-full appearance-none border border-[var(--color-border)] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] pr-12"
              >
                <option value="" disabled>
                  Service Required
                </option>
                <option>Visiting Cards</option>
                <option>Brochures &amp; Leaflets</option>
                <option>Posters &amp; Banners</option>
                <option>Logo &amp; Graphic Design</option>
                <option>Stickers &amp; Labels</option>
                <option>Notebooks &amp; Diaries</option>
                <option>Paper Envelopes</option>
                <option>Calendars, Name Tags &amp; Badges</option>
                <option>Other / Custom Order</option>
              </select>

              {/* Custom dropdown chevron (since appearance: none hides the native one) */}
              <svg
                className="pointer-events-none absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <textarea
              required
              name="message"
              placeholder="Project Details"
              rows={6}
              className="w-full border border-[var(--color-border)] rounded-3xl p-5 sm:p-6 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <button
              type="submit"
              disabled={status !== "idle"}
              className="bg-[var(--color-accent)] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "idle" && "Send Inquiry"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent! We'll be in touch ✓"}
            </button>
          </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
