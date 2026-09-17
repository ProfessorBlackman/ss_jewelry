/**
 * Single source of truth for the brand's outward-facing details.
 * The WhatsApp number is a placeholder — swap it for the real one before launch.
 */
export const site = {
  name: "S&S Jewelry",
  tagline: "Simply Stunning",
  description:
    "Jewelry that brings a little more beauty to every occasion. Handpicked earrings, necklaces and bangles from S&S.",
  url: "https://ssjewellery.com",
  email: "hello@ssjewellery.com",
  instagram: {
    handle: "@SSJEWELLERY",
    url: "https://instagram.com/ssjewellery",
  },
  tiktok: {
    handle: "@ssjewellery",
    url: "https://tiktok.com/@ssjewellery",
  },
  /** Placeholder — international format, digits only. */
  whatsappNumber: "233000000000",
  currency: "GHS",
} as const;

export const nav = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", href: "/shop" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com/ssjewellery" },
      { label: "TikTok", href: "https://tiktok.com/@ssjewellery" },
    ],
  },
] as const;

/** Builds a wa.me deep link with a prefilled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
