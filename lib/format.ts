import { site } from "./site";

/** Prices in the designs read as "GHS 420" — whole cedis, no decimals. */
export function formatPrice(amount: number) {
  return `${site.currency} ${amount.toLocaleString("en-GH")}`;
}
