import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopGrid } from "@/components/product/shop-grid";

export const metadata: Metadata = {
  title: "Shop All Jewelry",
  description:
    "A considered edit of pieces made to be worn, gifted and remembered. Earrings, necklaces and bangles from S&S Jewelry.",
};

export default function ShopPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <header>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
          Shop all jewelry
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          A considered edit of pieces made to be worn, gifted and remembered.
        </p>
      </header>

      <div className="mt-14">
        <Suspense fallback={<div className="h-24" />}>
          <ShopGrid />
        </Suspense>
      </div>
    </div>
  );
}
