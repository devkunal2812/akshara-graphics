"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const INITIAL: FormState = {
  name: "", company: "", email: "", phone: "", service: "", message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      /**
       * Formspree handles everything:
       * - Sends email notification to the business owner
       * - Stores submission in Formspree dashboard
       * - Returns { ok: true } on success
       *
       * We send JSON so field names map cleanly to the email subject/body.
       * Formspree reads the `_subject` key to customise the email subject line.
       */
      const res = await fetch("https://formspree.io/f/xjgqkyev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Quote Request — ${form.service || "General Inquiry"} — ${form.name}`,
          name: form.name,
          company: form.company || "—",
          email: form.email,
          phone: form.phone,
          service: form.service || "Not specified",
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Formspree returns { errors: [{ message }] } on validation failure
        const msg =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        setStatus("error");
        setErrorMsg(msg);
        return;
      }

      setStatus("success");
      setForm(INITIAL); // clear form after successful submission
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section aria-label="Contact and Get a Quote" id="contact" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left: contact info ── */}
          <ScrollReveal>
            <p className="eyebrow text-[var(--color-accent)] mb-4">Get In Touch</p>

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
              <p>🕒 Mon – Sat: 10:00 AM – 7:00 PM</p>
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

          {/* ── Right: form ── */}
          <ScrollReveal y={60}>

            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Inquiry Sent!</h3>
                <p className="text-[var(--color-text-muted)] max-w-sm">
                  Thank you! We&apos;ve received your request and will get back to you within 24 hours.
                  Check your email for a confirmation.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-3 rounded-full border border-[var(--color-border)] text-sm font-semibold hover:bg-white transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="w-full border border-[var(--color-border)] rounded-full px-5 py-3.5 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] disabled:opacity-60"
                  />
                  <input
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="w-full border border-[var(--color-border)] rounded-full px-5 py-3.5 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] disabled:opacity-60"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="w-full border border-[var(--color-border)] rounded-full px-5 py-3.5 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] disabled:opacity-60"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="w-full border border-[var(--color-border)] rounded-full px-5 py-3.5 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] disabled:opacity-60"
                  />
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    className="w-full appearance-none border border-[var(--color-border)] rounded-full px-5 py-3.5 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] pr-12 disabled:opacity-60"
                  >
                    <option value="">Service Required</option>
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
                  <svg
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]"
                    viewBox="0 0 20 20" fill="none"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <textarea
                  required
                  name="message"
                  placeholder="Project Details — quantity, size, any specific requirements *"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className="w-full border border-[var(--color-border)] rounded-3xl px-5 py-4 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-none disabled:opacity-60"
                />

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-sm text-red-700">
                    <span>⚠️</span>
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition disabled:opacity-60 flex items-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Inquiry →"}
                </button>

              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
