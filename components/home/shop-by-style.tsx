import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { styleTiles } from "@/lib/content";

export function ShopByStyle() {
  return (
    <section className="bg-cream">
      <div className="shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow text-ink">03 / Shop by style</p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Find your kind of stunning.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {styleTiles.map((tile, index) => (
            <Reveal key={tile.id} delay={index * 90}>
              <Link
                href={`/shop?style=${tile.id}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-ink/35 transition-colors duration-500 group-hover:bg-ink/50" />
                <span className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-cream">
                  <span className="font-display text-2xl uppercase tracking-wide lg:text-3xl">
                    {tile.label}
                  </span>
                  <span className="mt-2 text-sm text-cream/85">{tile.blurb}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
