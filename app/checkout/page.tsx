import type { Metadata } from "next";
import { CheckoutView } from "@/components/cart/checkout-view";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <h1 className="font-display text-5xl uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
        Checkout
      </h1>

      <div className="mt-12">
        <CheckoutView />
      </div>
    </div>
  );
}
