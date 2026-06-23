import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "What printing services does Akshara Graphics offer in Vadodara?",
    answer:
      "We offer offset printing and graphic design for visiting cards, brochures, leaflets, posters and banners, along with stationery products like stickers, labels, notebooks, diaries, envelopes, table calendars, name tags and brass badges.",
  },
  {
    question: "Where is Akshara Graphics located?",
    answer:
      "We're located near BPCL Petrol Pump, 16/18 Bahucharaji Road, Laxmi Estate, Karelibaug, Vadodara, Gujarat 390018.",
  },
  {
    question: "How can I get a price quote?",
    answer:
      "Fill out the contact form below, call us directly, or message us on WhatsApp with your product, quantity and design requirements for the fastest response.",
  },
  {
    question: "Do you handle bulk and corporate orders?",
    answer:
      "Yes — we regularly handle bulk and corporate orders for envelopes, notebooks, diaries, calendars and visiting cards for businesses across Gujarat.",
  },
];

export default function FAQ() {
  return (
    <section aria-label="Frequently Asked Questions" id="faq" className="section">
      <div className="container-custom">
        <ScrollReveal className="mb-8 sm:mb-12">
          <p className="eyebrow text-[var(--color-accent)] mb-4">FAQ</p>
          <h2 className="heading-lg font-bold">
            Frequently Asked{" "}
            <span className="font-display italic font-normal">Questions</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          className="grid sm:grid-cols-2 gap-6 sm:gap-8"
          itemSelector="[data-reveal-item]"
        >
          {faqs.map((faq) => (
            <div
              key={faq.question}
              data-reveal-item
              className="bg-white rounded-[24px] p-6 border border-[var(--color-border)]"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
