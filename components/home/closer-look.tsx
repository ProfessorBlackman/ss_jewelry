import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";

export function CloserLook() {
  return (
    <section className="bg-sand-deep">
      <div className="shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow text-ink">04 / A closer look</p>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/closer_look.webp"
                alt="Gold floret bracelet and studs resting on a stone plinth"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Let the details
              <br />
              do the talking.
            </h2>
            <p className="mt-6 max-w-lg text-muted">
              From sculptural stones to delicate finishes, each piece is chosen to be
              noticed without asking for attention.
            </p>
            <ArrowLink href="/collections" className="mt-10 text-forest">
              Discover the collection
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
