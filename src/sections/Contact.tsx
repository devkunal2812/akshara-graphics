"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire up to @emailjs/browser or an API route here.
    setTimeout(() => setStatus("sent"), 1000);
  }

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[var(--color-accent)] mb-4 font-semibold tracking-wide">
              GET IN TOUCH
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let&apos;s Create Something Great.
            </h2>

            <div className="space-y-4 text-lg">
              <p>📞 +91 XXXXX XXXXX</p>
              <p>✉️ hello@aksharagraphics.com</p>
              <p>📍 Gujarat, India</p>
              <p>🕒 Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              required
              name="name"
              placeholder="Your Name"
              className="w-full border border-[var(--color-border)] rounded-full px-6 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              required
              name="company"
              placeholder="Company Name"
              className="w-full border border-[var(--color-border)] rounded-full px-6 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-[var(--color-border)] rounded-full px-6 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-[var(--color-border)] rounded-full px-6 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <select
              name="service"
              defaultValue=""
              className="w-full border border-[var(--color-border)] rounded-full px-6 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              <option value="" disabled>
                Service Required
              </option>
              <option>Graphic Design</option>
              <option>Branding</option>
              <option>Printing Services</option>
              <option>Packaging Design</option>
              <option>Large Format Printing</option>
            </select>

            <textarea
              required
              name="message"
              placeholder="Project Details"
              rows={6}
              className="w-full border border-[var(--color-border)] rounded-3xl p-6 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <button
              type="submit"
              disabled={status !== "idle"}
              className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "idle" && "Send Inquiry"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent! We'll be in touch ✓"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
