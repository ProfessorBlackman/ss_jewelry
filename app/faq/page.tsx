import type { Metadata } from "next";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Help & FAQ",
  description:
    "Everything you need to shop S&S Jewelry with confidence — ordering, delivery, gifting and care.",
};

export default function FaqPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-forest">Help &amp; FAQ</p>
          <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need
            <br className="hidden sm:block" /> to shop with confidence.
          </h1>
        </header>

        <dl>
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-hairline py-8 first:pt-0">
              <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="eyebrow text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <dt className="text-xl text-ink">{faq.question}</dt>
                  <dd className="mt-3 text-sm text-muted">{faq.answer}</dd>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
