import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductMedia } from "@/components/product/product-media";
import { AddToBag } from "@/components/product/add-to-bag";
import { ProductCard } from "@/components/product/product-card";
import { getProduct, products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: product.name,
      description: product.summary,
      images: [product.images[0].src],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const alsoLike = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 3);

  return (
    <>
      <div className="shell py-10 lg:py-16">
        <ProductMedia images={product.images}>
          <h1 className="font-display text-4xl uppercase leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-sm font-semibold tracking-[0.08em] text-forest">
            {formatPrice(product.price)}
          </p>
          <p className="mt-6 max-w-md text-muted">{product.summary}</p>

          <div className="mt-10 border-t border-hairline pt-8">
            <h2 className="eyebrow text-forest">Details</h2>
            <dl className="mt-5 space-y-2 text-sm text-muted">
              {product.details.map((detail) => (
                <div key={detail.label} className="flex">
                  <dt>{detail.label}&nbsp;&mdash;&nbsp;</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12">
            <AddToBag product={product} />
          </div>
        </ProductMedia>
      </div>

      {alsoLike.length > 0 && (
        <section className="border-t border-hairline">
          <div className="shell py-16 lg:py-20">
            <h2 className="eyebrow text-ink">You may also like</h2>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3 lg:gap-x-10">
              {alsoLike.map((item) => (
                <ProductCard
                  key={item.slug}
                  product={item}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
