"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ButtonLink } from "@/components/ui/button";
import { useCart } from "@/lib/use-cart";
import { formatPrice } from "@/lib/format";

export function CartView() {
  const { items, subtotal, setQuantity, remove, ready } = useCart();

  if (!ready) {
    return <div className="h-64" aria-hidden />;
  }

  if (items.length === 0) {
    return (
      <div className="border-t border-hairline py-16">
        <p className="text-muted">Your bag is empty.</p>
        <ButtonLink href="/shop" className="mt-8">
          Shop the collection
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
      <ul className="border-t border-hairline">
        {items.map((item) => (
          <li
            key={item.slug}
            className="grid grid-cols-[6rem_1fr] gap-5 border-b border-hairline py-8 sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <Link
              href={`/shop/${item.slug}`}
              className="relative block aspect-[3/4] overflow-hidden bg-sand"
            >
              <Image
                src={item.product.images[0].src}
                alt={item.product.images[0].alt}
                fill
                sizes="176px"
                className="object-cover"
              />
            </Link>

            <div>
              <Link
                href={`/shop/${item.slug}`}
                className="font-display text-2xl text-ink transition-colors duration-300 hover:text-gold"
              >
                {item.product.name}
              </Link>
              <p className="eyebrow mt-3 text-forest">
                {formatPrice(item.product.price)}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <span className="eyebrow text-muted">Qty</span>
                <div className="flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQuantity(item.slug, item.quantity - 1)}
                    aria-label={`Decrease quantity of ${item.product.name}`}
                    className="px-3 py-1 text-ink transition-colors duration-200 hover:text-gold"
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(item.slug, item.quantity + 1)}
                    aria-label={`Increase quantity of ${item.product.name}`}
                    className="px-3 py-1 text-ink transition-colors duration-200 hover:text-gold"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => remove(item.slug)}
                className="eyebrow mt-6 text-muted transition-colors duration-300 hover:text-gold"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="eyebrow text-forest">Summary</h2>

        <dl className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="eyebrow text-ink">{formatPrice(subtotal)}</dd>
          </div>
          <div>
            <dt className="sr-only">Delivery</dt>
            <dd className="text-sm text-muted">Delivery calculated at checkout</dd>
          </div>
        </dl>

        <div className="mt-8 flex items-center justify-between border-t border-hairline pt-6">
          <span className="eyebrow text-forest">Total</span>
          <span className="text-2xl text-ink">{formatPrice(subtotal)}</span>
        </div>

        <ButtonLink href="/checkout" className="mt-8 w-full">
          Checkout
        </ButtonLink>

        <ArrowLink href="/shop" className="mt-6 text-forest">
          Continue shopping
        </ArrowLink>
      </aside>
    </div>
  );
}
