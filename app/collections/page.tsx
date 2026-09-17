import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { styleTiles } from "@/lib/content";
import { productsByStyle } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Four edits of S&S Jewelry — Everyday, Statement, Occasion and Gifts. Find your kind of stunning.",
};

export default function CollectionsPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <header className="max-w-2xl">
        <p className="eyebrow text-ink">Collections</p>
        <h1 className="mt-6 font-display text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
          Find your kind of stunning.
        </h1>
        <p className="mt-6 text-muted">
          Four edits, one idea — the finishing touch should feel like it was made for you.
        </p>
      </header>

      <div className="mt-16 space-y-16 lg:space-y-24">
        {styleTiles.map((tile, index) => {
          const count = productsByStyle(tile.id).length;
          const flip = index % 2 === 1;

          return (
            <Reveal key={tile.id}>
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Link
                  href={`/shop?style=${tile.id}`}
                  className={`group relative block aspect-[4/3] overflow-hidden ${
                    flip ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
                  />
                </Link>

                <div className={flip ? "lg:order-1" : ""}>
                  <p className="eyebrow text-gold">
                    {String(index + 1).padStart(2, "0")} / {count}{" "}
                    {count === 1 ? "piece" : "pieces"}
                  </p>
                  <h2 className="mt-5 font-display text-4xl uppercase tracking-wide sm:text-5xl">
                    {tile.label}
                  </h2>
                  <p className="mt-5 max-w-md text-muted">{tile.blurb}</p>
                  <ArrowLink href={`/shop?style=${tile.id}`} className="mt-8 text-forest">
                    Shop {tile.label}
                  </ArrowLink>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
