"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return products
      .filter((product) =>
        [product.name, product.category, product.summary, ...product.styles]
          .join(" ")
          .toLowerCase()
          .includes(term),
      )
      .slice(0, 6);
  }, [query]);

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-ink/45"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
        className="relative bg-cream px-5 pt-8 pb-10 md:px-10 lg:px-18"
      >
        <div className="shell">
          <div className="flex items-center gap-6 border-b border-hairline pb-4">
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a piece…"
              className="w-full bg-transparent font-display text-3xl text-ink outline-none placeholder:text-muted/60 md:text-5xl"
            />
            <button
              type="button"
              onClick={onClose}
              className="eyebrow shrink-0 text-muted hover:text-forest"
            >
              Close
            </button>
          </div>

          {query.trim() !== "" && (
            <div className="mt-8">
              {results.length === 0 ? (
                <p className="text-sm text-muted">
                  Nothing matched “{query.trim()}”. Try “earrings”, “gold” or “pearl”.
                </p>
              ) : (
                <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((product) => (
                    <li key={product.slug}>
                      <Link
                        href={`/shop/${product.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-4"
                      >
                        <span className="relative block h-20 w-16 shrink-0 overflow-hidden bg-sand">
                          <Image
                            src={product.images[0].src}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <span className="eyebrow block text-ink group-hover:text-gold">
                            {product.name}
                          </span>
                          <span className="mt-1 block text-sm text-muted">
                            {formatPrice(product.price)}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
