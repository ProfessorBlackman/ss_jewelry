import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about a piece, an order or a gift? Reach S&S Jewelry on WhatsApp, Instagram or email.",
};

const chat = whatsappLink("Hi S&S! I have a question about a piece.");

export default function ContactPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-forest">Contact</p>
          <h1 className="mt-6 font-display text-5xl leading-none tracking-tight sm:text-6xl">
            Let&rsquo;s talk.
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Questions about a piece, an order or a gift? We&rsquo;d love to hear from you.
          </p>

          <dl className="mt-16 space-y-12">
            <div>
              <dt className="eyebrow text-forest">WhatsApp</dt>
              <dd className="mt-3">
                <a
                  href={chat}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-2xl text-ink transition-colors duration-300 hover:text-gold"
                >
                  Chat with S&amp;S
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-forest">Instagram</dt>
              <dd className="mt-3">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-ink transition-colors duration-300 hover:text-gold"
                >
                  {site.instagram.handle}
                </a>
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-forest">Email</dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${site.email}`}
                  className="text-2xl text-ink transition-colors duration-300 hover:text-gold"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
