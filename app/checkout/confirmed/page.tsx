import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order sent",
  robots: { index: false },
};

export default function ConfirmedPage() {
  return (
    <div className="shell py-20 lg:py-32">
      <div className="max-w-xl">
        <p className="eyebrow text-gold">Order sent</p>
        <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Thank you — your order is on its way to us.
        </h1>
        <p className="mt-6 text-muted">
          We&rsquo;ve opened WhatsApp with your order summary. Send that message and
          we&rsquo;ll confirm delivery and payment details with you directly. If the chat
          didn&rsquo;t open, reach us on {site.email}.
        </p>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <ButtonLink href="/shop">Continue shopping</ButtonLink>
          <ArrowLink
            href={whatsappLink("Hi S&S! I just placed an order.")}
            external
            className="text-forest"
          >
            Open WhatsApp again
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}
