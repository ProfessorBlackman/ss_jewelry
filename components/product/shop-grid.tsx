"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./product-card";
import { categories, products, type Category, type Style } from "@/lib/products";
import { cn } from "@/lib/utils";

type Sort = "featured" | "price-asc" | "price-desc";

const sorts: { id: Sort; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price — low to high" },
  { id: "price-desc", label: "Price — high to low" },
];

const styleIds: Style[] = ["everyday", "statement", "occasion", "gifts"];

function isStyle(value: string | null): value is Style {
  return value !== null && styleIds.includes(value as Style);
}

export function ShopGrid() {
  const searchParams = useSearchParams();
  const styleFilter = searchParams.get("style");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [sortOpen, setSortOpen] = useState(false);

  const visible = useMemo(() => {
    let list = products;

    if (isStyle(styleFilter)) {
      list = list.filter((product) => product.styles.includes(styleFilter));
    }

    if (category !== "all") {
      list = list.filter((product) => product.category === category);
    }

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "featured") {
      sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }

    return sorted;
  }, [category, sort, styleFilter]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-hairline pb-4">
        <ul className="flex flex-wrap items-center gap-6">
          {categories.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
                className={cn(
                  "eyebrow transition-colors duration-300 hover:text-gold",
                  category === item.id ? "text-gold" : "text-forest",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative">
          <button
            type="button"
            onClick={() => setSortOpen((open) => !open)}
            aria-expanded={sortOpen}
            className="eyebrow text-forest transition-colors duration-300 hover:text-gold"
          >
            Filter + Sort
          </button>

          {sortOpen && (
            <ul className="absolute right-0 top-full z-20 mt-3 w-60 border border-hairline bg-cream py-2 shadow-lg shadow-ink/5">
              {sorts.map((option) => (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSort(option.id);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-sand",
                      sort === option.id ? "text-gold" : "text-ink",
                    )}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isStyle(styleFilter) && (
        <p className="mt-6 text-sm text-muted">
          Showing the <span className="text-forest">{styleFilter}</span> edit —{" "}
          <Link href="/shop" className="underline underline-offset-4 hover:text-gold">
            show everything
          </Link>
        </p>
      )}

      {visible.length === 0 ? (
        <p className="mt-16 text-sm text-muted">
          Nothing in this edit just yet. Try another category.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-3 lg:gap-x-10">
          {visible.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 3}
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
          ))}
        </div>
      )}
    </>
  );
}
