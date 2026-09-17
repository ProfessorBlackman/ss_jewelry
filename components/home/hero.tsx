import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="bg-ink text-cream">
      <div className="shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow text-cream/70">S&amp;S Jewelry / Simply Stunning</p>

          <h1 className="mt-8 font-display text-[3.25rem] leading-[1.05] tracking-tight uppercase text-balance sm:text-7xl lg:text-8xl">
            Simply
            <br />
            stunning.
          </h1>

          <p className="mt-8 max-w-md text-lg text-cream/85">
            Jewelry that brings a little more beauty to every occasion.
          </p>

          <div className="mt-12 flex flex-col items-start gap-6">
            <ButtonLink href="/shop" variant="pill">
              Shop the collection
            </ButtonLink>
            <ArrowLink href="/about" className="text-cream">
              Explore S&amp;S
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/model.webp"
              alt="Model wearing S&S blue bloom earrings, ring and bracelet"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
