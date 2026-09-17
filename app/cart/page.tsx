import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";

export const metadata: Metadata = {
  title: "Your Bag",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <h1 className="font-display text-5xl uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
        Your bag
      </h1>

      <div className="mt-12">
        <CartView />
      </div>
    </div>
  );
}
