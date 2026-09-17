import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";

export function Story() {
  return (
    <section className="bg-ink text-cream">
      <div className="shell grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal>
          <p className="eyebrow text-cream/70">02 / The S&amp;S story</p>

          <h2 className="mt-8 font-display text-5xl uppercase leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Jewelry
            <br />
            that speaks
            <br />
            for itself.
          </h2>

          <p className="mt-10 max-w-md text-cream/85">
            S&amp;S is about the finishing touch — the piece that completes the look,
            catches the light, and feels unmistakably yours.
          </p>

          <ArrowLink href="/about" className="mt-10 text-cream">
            Read our story
          </ArrowLink>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/hero.webp"
              alt="Blue bloom earrings resting in a green velvet box"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
