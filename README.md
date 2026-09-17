# S&S Jewelry

A Next.js storefront built from the Figma exports in `ui_design/`.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm start
```

Requires pnpm 10. `package.json` pins it via `packageManager`, so
`corepack enable` will pick up the right version automatically.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — design tokens live in `app/globals.css` under `@theme`
- **next/font** — Playfair Display (display serif) and DM Sans (UI), the closest
  free stand-ins for the fonts in the exports
- No database, no auth, no payment gateway

## Structure

```
app/                  routes (shop, shop/[slug], collections, about,
                      contact, faq, cart, checkout, checkout/confirmed)
  api/contact/        demo endpoint for the contact form
components/
  home/               homepage sections, one per numbered band in the design
  layout/             header, footer, search overlay
  product/            product card, media/gallery, shop grid, add-to-bag
  cart/               cart and checkout views
  ui/                 wordmark, buttons, arrow link, scroll reveal
lib/
  products.ts         the catalogue — edit this to change products
  content.ts          style tiles, FAQs, About copy, Instagram grid
  site.ts             brand details, nav, WhatsApp helper
  cart-store.ts       localStorage-backed bag (useSyncExternalStore)
  use-cart.ts         the `useCart()` hook
public/images/        photography, converted from the source PNGs to WebP
```

The favicon set lives in `app/` (`icon.svg`, `icon.png`, `apple-icon.png`,
`favicon.ico`): a cream Playfair "S" on the brand green. To regenerate it at a
different size or weight, see `scripts/generate-icons.py`.

## Before launch

1. **WhatsApp number** — `lib/site.ts` holds a placeholder
   (`whatsappNumber: "233000000000"`). Replace it with the real number in
   international format, digits only. It drives the product page, contact page
   and the whole checkout flow.
2. **Contact form** — `app/api/contact/route.ts` validates and logs. Wire it to
   an email provider where the `TODO` is.
3. **Social links** — Instagram and TikTok URLs in `lib/site.ts`.
4. **Fonts** — swap in the real brand fonts if S&S has licensed ones.

## Notes on the designs

- The Shop / Cart / Checkout / FAQ / About exports render headings in the sans
  face; the homepage uses the display serif. We treated that as a font-loading
  artifact and use the serif for display headings throughout, keeping each
  screen's letter case (`SHOP ALL JEWELRY`, `Let's talk.`).
- The shop tabs are `All / Earrings / Necklaces / Bangles`. The design shows
  `Rings`, but there is no ring photography in `images/` and there are three
  clear bangle shots, so the tabs follow the actual catalogue.
- There was no mobile homepage and no Collections screen in the exports; both
  are derived from the desktop homepage's layout and its "Shop by style" band.
- Checkout collects contact and delivery details only, then hands the order to
  WhatsApp — exactly as the design specifies. No payment is taken on site.
