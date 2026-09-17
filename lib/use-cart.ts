"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  addLine,
  clearLines,
  getServerSnapshot,
  getSnapshot,
  removeLine,
  setLineQuantity,
  subscribe,
} from "./cart-store";
import { getProduct, type Product } from "./products";

export type CartItem = { slug: string; quantity: number; product: Product };

export function useCart() {
  const { lines, ready } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(() => {
    // Unknown slugs are dropped — the catalogue is the source of truth.
    const items: CartItem[] = lines.flatMap((line) => {
      const product = getProduct(line.slug);
      return product ? [{ ...line, product }] : [];
    });

    return {
      items,
      ready,
      count: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
      add: addLine,
      setQuantity: setLineQuantity,
      remove: removeLine,
      clear: clearLines,
    };
  }, [lines, ready]);
}
