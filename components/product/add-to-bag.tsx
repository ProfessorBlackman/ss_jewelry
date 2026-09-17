"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { useCart } from "@/lib/use-cart";
import { formatPrice } from "@/lib/format";
import { whatsappLink } from "@/lib/site";
import type { Product } from "@/lib/products";

export function AddToBag({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const enquiry = whatsappLink(
    `Hi S&S! I'd like to order the ${product.name} (${formatPrice(product.price)}).`,
  );

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <Button
        onClick={() => {
          add(product.slug);
          setAdded(true);
          window.setTimeout(() => setAdded(false), 2200);
        }}
        className="w-full sm:w-72"
      >
        {added ? "Added to bag" : "Add to bag"}
      </Button>

      <ArrowLink href={enquiry} external className="text-forest">
        Or order via WhatsApp
      </ArrowLink>
    </div>
  );
}
