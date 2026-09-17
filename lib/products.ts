export type Category = "earrings" | "necklaces" | "bangles";
export type Style = "everyday" | "statement" | "occasion" | "gifts";

export type Product = {
  slug: string;
  name: string;
  /** Price in whole Ghana cedis. */
  price: number;
  category: Category;
  styles: Style[];
  /** Short line used on the product page under the price. */
  summary: string;
  /** Spec rows rendered in the DETAILS block. */
  details: { label: string; value: string }[];
  images: { src: string; alt: string }[];
  featured?: boolean;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "bangles", label: "Bangles" },
];

export const products: Product[] = [
  {
    slug: "blue-bloom-earrings",
    name: "Blue Bloom Earrings",
    price: 420,
    category: "earrings",
    styles: ["statement", "occasion"],
    summary:
      "A sculptural floral-inspired pair with rich blue stones and a warm metallic finish.",
    details: [
      { label: "Finish", value: "mixed gold tone" },
      { label: "Stones", value: "blue crystal accents" },
      { label: "Style", value: "statement earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/earrings_02.webp", alt: "Blue Bloom earrings on a black display card" },
      { src: "/images/hero.webp", alt: "Blue Bloom earrings resting in a green velvet box" },
      { src: "/images/earrings_08.webp", alt: "Blue Bloom earrings styled with gypsophila" },
    ],
    featured: true,
  },
  {
    slug: "champagne-drop-earrings",
    name: "Champagne Drop Earrings",
    price: 480,
    category: "earrings",
    styles: ["occasion", "statement"],
    summary:
      "Faceted champagne teardrops suspended beneath a luminous pearl — made for an entrance.",
    details: [
      { label: "Finish", value: "polished gold tone" },
      { label: "Stones", value: "champagne crystal, glass pearl" },
      { label: "Style", value: "drop earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/earrings_01.webp", alt: "Champagne crystal drop earrings on a display stand" },
    ],
    featured: true,
  },
  {
    slug: "noir-statement",
    name: "Noir Statement Piece",
    price: 560,
    category: "necklaces",
    styles: ["statement", "occasion"],
    summary:
      "A collar of deep smoke-grey stones with matching drops — quiet drama, start to finish.",
    details: [
      { label: "Finish", value: "silver tone" },
      { label: "Stones", value: "smoke-grey crystal" },
      { label: "Style", value: "necklace and earring set" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/necklace_04.webp", alt: "Noir statement necklace and earrings on a display bust" },
    ],
    featured: true,
  },
  {
    slug: "signature-collection",
    name: "Signature Collection",
    price: 390,
    category: "necklaces",
    styles: ["everyday", "gifts"],
    summary:
      "Textured gold petals linked into a chain that reads as soft from afar and intricate up close.",
    details: [
      { label: "Finish", value: "antique gold tone" },
      { label: "Stones", value: "none — all metal" },
      { label: "Style", value: "layered necklace set" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/necklace_03.webp", alt: "Two textured gold necklaces displayed side by side" },
    ],
    featured: true,
  },
  {
    slug: "pearl-edit",
    name: "Pearl Edit",
    price: 340,
    category: "earrings",
    styles: ["everyday", "gifts"],
    summary:
      "A gilded shell cradling a single pearl. The pair you reach for without thinking.",
    details: [
      { label: "Finish", value: "brushed gold tone" },
      { label: "Stones", value: "glass pearl" },
      { label: "Style", value: "stud earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/earrings_07.webp", alt: "Gold shell stud earrings set with pearls" },
    ],
  },
  {
    slug: "sculptural-gold",
    name: "Sculptural Gold",
    price: 620,
    category: "necklaces",
    styles: ["statement"],
    summary:
      "Heavy florets cast in antique gold — the piece that finishes an outfit on its own.",
    details: [
      { label: "Finish", value: "antique gold tone" },
      { label: "Stones", value: "none — all metal" },
      { label: "Style", value: "statement necklace" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/necklace_05.webp", alt: "Sculptural gold floret necklace on a display bust" },
      { src: "/images/necklace_02.webp", alt: "Sculptural gold necklace photographed from the front" },
    ],
  },
  {
    slug: "emerald-halo-studs",
    name: "Emerald Halo Studs",
    price: 380,
    category: "earrings",
    styles: ["everyday", "gifts"],
    summary:
      "A green solitaire ringed with pavé and framed in a soft hexagon. Small, but never quiet.",
    details: [
      { label: "Finish", value: "gold tone" },
      { label: "Stones", value: "emerald-green and clear crystal" },
      { label: "Style", value: "stud earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/emerald_studs.webp", alt: "Emerald halo stud earrings on a black card" },
    ],
  },
  {
    slug: "verde-statement-earrings",
    name: "Verde Statement Earrings",
    price: 450,
    category: "earrings",
    styles: ["statement", "occasion"],
    summary:
      "Pavé-set green domes built around a single oval stone — weightless on, impossible to miss.",
    details: [
      { label: "Finish", value: "gold tone" },
      { label: "Stones", value: "green crystal pavé" },
      { label: "Style", value: "statement earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/earrings_04.webp", alt: "Round green pavé statement earrings on a display bust" },
    ],
  },
  {
    slug: "carnelian-drop-earrings",
    name: "Carnelian Drop Earrings",
    price: 410,
    category: "earrings",
    styles: ["occasion"],
    summary:
      "Warm red stones in an ornate antique setting — a vintage note in a modern silhouette.",
    details: [
      { label: "Finish", value: "antique gold tone" },
      { label: "Stones", value: "carnelian-red crystal" },
      { label: "Style", value: "drop earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/earrings_03.webp", alt: "Antique gold drop earrings set with red stones" },
    ],
  },
  {
    slug: "emerald-drop-set",
    name: "Emerald Drop Set",
    price: 470,
    category: "earrings",
    styles: ["occasion", "gifts"],
    summary:
      "Cushion-cut greens that swing from a slender gold bar. Sold as a considered pair.",
    details: [
      { label: "Finish", value: "gold tone" },
      { label: "Stones", value: "emerald-green crystal" },
      { label: "Style", value: "drop earrings" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/earrings_05.webp", alt: "Emerald green drop earrings on gold display stands" },
      { src: "/images/earrings_06.webp", alt: "Emerald hexagon studs shown alongside the drops" },
    ],
  },
  {
    slug: "onyx-stone-necklace",
    name: "Onyx Stone Necklace",
    price: 540,
    category: "necklaces",
    styles: ["statement", "occasion"],
    summary:
      "Oval jet stones in a haloed gold setting, linked into a collar with real presence.",
    details: [
      { label: "Finish", value: "gold tone" },
      { label: "Stones", value: "jet-black crystal" },
      { label: "Style", value: "statement necklace" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/necklace_01.webp", alt: "Gold necklace set with oval black stones" },
    ],
  },
  {
    slug: "gilded-bangle",
    name: "Gilded Bangle",
    price: 520,
    category: "bangles",
    styles: ["everyday"],
    summary:
      "A smooth, generously weighted cuff with a hammered gold sheen. Wear it alone or stacked.",
    details: [
      { label: "Finish", value: "polished gold tone" },
      { label: "Stones", value: "none — all metal" },
      { label: "Style", value: "bangle" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/bangles_01.webp", alt: "Gold bangle worn on the wrist" },
    ],
  },
  {
    slug: "bloom-bangle-set",
    name: "Bloom Bangle Set",
    price: 690,
    category: "bangles",
    styles: ["statement", "gifts"],
    summary:
      "The floret bracelet and matching studs, boxed together — our most-gifted pairing.",
    details: [
      { label: "Finish", value: "antique gold tone" },
      { label: "Stones", value: "none — all metal" },
      { label: "Style", value: "bracelet and earring set" },
      { label: "Care", value: "store dry and away from fragrance" },
    ],
    images: [
      { src: "/images/closer_look.webp", alt: "Gold floret bracelet and studs on a stone plinth" },
      { src: "/images/set.webp", alt: "Bloom bangle set photographed in warm light" },
      { src: "/images/close_up.webp", alt: "The bloom bracelet and necklace worn together" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function featuredProducts() {
  return products.filter((product) => product.featured);
}

export function productsByStyle(style: Style) {
  return products.filter((product) => product.styles.includes(style));
}
