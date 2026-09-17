import { ProductCard } from "@/components/product/product-card";
import { Reveal } from "@/components/ui/reveal";
import { featuredProducts } from "@/lib/products";

export function FeaturedCollection() {
  const items = featuredProducts();

  return (
    <section className="bg-cream">
      <div className="shell py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow text-ink">01 / The collection</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            The pieces you&rsquo;ll keep reaching for.
          </h2>
          <p className="mt-6 max-w-xl text-muted">
            A curated edit of S&amp;S favorites, from everyday elegance to statement pieces.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {items.map((product, index) => (
            <Reveal key={product.slug} delay={index * 90}>
              <ProductCard product={product} variant="editorial" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
