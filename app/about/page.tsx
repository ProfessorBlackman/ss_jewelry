import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { beliefs, journey } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "S&S is about the finishing touch — the piece that completes a look, marks a moment and feels unmistakably yours.",
};

export default function AboutPage() {
  return (
    <>
      {/* Opening — the short About design's hero. */}
      <section className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 flex flex-col justify-between gap-16 lg:order-1">
            <div>
              <p className="eyebrow text-forest">Our story</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
                Jewelry that
                <br />
                speaks for itself.
              </h1>
              <p className="mt-8 max-w-md text-muted">
                S&amp;S is about the finishing touch — the piece that completes a look,
                marks a moment and feels unmistakably yours.
              </p>
            </div>

            <div>
              <p className="eyebrow text-gold">Simply Stunning</p>
              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                Thoughtful pieces.
                <br />A little more beauty.
              </h2>
              <p className="mt-6 max-w-md text-muted">
                Our world is feminine, expressive and intentionally easy to wear — from
                quiet everyday pieces to the ones that deserve the room.
              </p>
              <ButtonLink href="/shop" className="mt-10">
                Shop the collection
              </ButtonLink>
            </div>
          </Reveal>

          {/* Mobile leads with the image, as the mobile export does. */}
          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative aspect-[4/5] w-full overflow-hidden lg:sticky lg:top-32">
              <Image
                src="/images/closer_look.webp"
                alt="Gold floret bracelet and studs resting on a stone plinth"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 — where it began. */}
      <section className="bg-forest-deep text-cream">
        <div className="shell py-20 lg:py-28">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              From a love of
              <br />
              beautiful things.
            </h2>
            <div className="space-y-6 text-cream/85">
              <p>
                S&amp;S began with a fascination for the quiet details that change how
                something feels.
              </p>
              <p>A curve. A glint. A piece that catches the light only when you move.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — the journey. */}
      <section className="shell py-20 lg:py-28">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-ink">02 — The journey</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              A journey in
              <br />
              every piece.
            </h2>
          </div>
          <p className="text-muted lg:pt-14">
            From first sketch to final polish, every decision has a reason.
          </p>
        </Reveal>

        <ol className="mt-14">
          {journey.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 80}>
              <div className="grid gap-4 border-t border-hairline py-8 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_1.4fr] lg:gap-10">
                <span className="eyebrow text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-forest">
                  {step.title}
                </h3>
                <p className="text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 03 — let the details speak. */}
      <section className="shell pb-20 lg:pb-28">
        <Reveal className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:min-h-[32rem]">
            <Image
              src="/images/close_up.webp"
              alt="Model wearing the bloom necklace, bracelet and rings"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center bg-forest-deep px-8 py-14 text-cream lg:px-14">
            <p className="eyebrow text-cream/60">03 — The detail</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              Let the details
              <br />
              speak.
            </h2>
            <p className="mt-6 max-w-sm text-cream/85">
              We make jewellery that rewards a closer look.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 04 — what we believe. */}
      <section className="shell pb-20 lg:pb-28">
        <Reveal>
          <p className="eyebrow text-ink">04 — What we believe</p>
          <h2 className="mt-6 font-display text-4xl uppercase tracking-wide text-forest sm:text-5xl">
            Simply stunning.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 lg:gap-16">
          {beliefs.map((belief, index) => (
            <Reveal key={belief.title} delay={index * 90}>
              <p className="eyebrow text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-forest">
                {belief.title}
              </h3>
              <p className="mt-4 text-muted">{belief.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-16 gap-y-3 border-t border-hairline pt-6">
          <p className="eyebrow text-ink">The story continues with you.</p>
          <p className="eyebrow text-forest">S&amp;S Jewelry</p>
        </div>
      </section>
    </>
  );
}
