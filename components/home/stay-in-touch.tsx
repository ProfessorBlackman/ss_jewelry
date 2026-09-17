import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { instagramGrid } from "@/lib/content";
import { site } from "@/lib/site";

export function StayInTouch() {
  return (
    <section className="bg-ink text-cream">
      <div className="shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow text-cream/70">05 / Stay in the S&amp;S world</p>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
              Your next favorite piece
              <br className="hidden sm:block" /> is waiting.
            </h2>
            <p className="mt-6 max-w-md text-cream/85">
              Follow the latest drops, styling inspiration and new arrivals.
            </p>
            <ButtonLink href="/shop" variant="pill" className="mt-12">
              Shop now
            </ButtonLink>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-baseline justify-between lg:justify-end lg:gap-8">
              <p className="eyebrow text-gold">Instagram</p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="eyebrow text-cream transition-colors duration-300 hover:text-gold"
              >
                {site.instagram.handle}
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {instagramGrid.map((image) => (
                <a
                  key={image.src}
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
