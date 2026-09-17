import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * `editorial` — homepage treatment: serif name + "View piece" link, no price.
 * `shop`      — grid treatment: uppercase sans name + price.
 */
export function ProductCard({
  product,
  variant = "shop",
  priority,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: {
  product: Product;
  variant?: "editorial" | "shop";
  priority?: boolean;
  sizes?: string;
}) {
  const [image] = product.images;

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>

      {variant === "editorial" ? (
        <div className="mt-5">
          <h3 className="font-display text-lg uppercase tracking-wide text-ink">
            {product.name}
          </h3>
          <span className="eyebrow mt-2 inline-flex items-center gap-2 text-forest">
            View piece
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      ) : (
        <div className="mt-5">
          <h3
            className={cn(
              "eyebrow text-ink transition-colors duration-300 group-hover:text-gold",
            )}
          >
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-muted">{formatPrice(product.price)}</p>
        </div>
      )}
    </Link>
  );
}
