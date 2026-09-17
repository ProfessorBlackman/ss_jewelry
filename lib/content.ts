import type { Style } from "./products";

export const styleTiles: {
  id: Style;
  label: string;
  blurb: string;
  image: string;
  alt: string;
}[] = [
  {
    id: "everyday",
    label: "Everyday",
    blurb: "Effortless pieces for every day.",
    image: "/images/earrings_07.webp",
    alt: "Gold shell stud earrings with pearls",
  },
  {
    id: "statement",
    label: "Statement",
    blurb: "When subtle is not the goal.",
    image: "/images/necklace_05.webp",
    alt: "Sculptural gold floret necklace",
  },
  {
    id: "occasion",
    label: "Occasion",
    blurb: "Pieces worth dressing up for.",
    image: "/images/earrings_04.webp",
    alt: "Green pavé statement earrings",
  },
  {
    id: "gifts",
    label: "Gifts",
    blurb: "Something beautiful for someone special.",
    image: "/images/earrings_05.webp",
    alt: "Emerald drop earrings on gold stands",
  },
];

export const faqs = [
  {
    question: "How do I place an order?",
    answer: "Choose a piece, add it to your bag and continue to checkout.",
  },
  {
    question: "How does delivery work?",
    answer: "Delivery details are confirmed with you after checkout.",
  },
  {
    question: "Can I buy a piece as a gift?",
    answer: "Yes — contact us and we can help you choose.",
  },
  {
    question: "How do I care for my jewelry?",
    answer: "Keep pieces dry, away from fragrance and store separately.",
  },
];

/** The four chapters of the S&S story, from the About design. */
export const journey = [
  {
    title: "The Spark",
    body: "A love for pieces that feel special — even before they are worn.",
  },
  {
    title: "The Shape",
    body: "Clean lines, considered proportions, and forms designed to stay with you.",
  },
  {
    title: "The Detail",
    body: "The smallest decisions create the feeling: finish, texture, balance, light.",
  },
  {
    title: "The Moment",
    body: "A piece becomes yours the instant it becomes part of your story.",
  },
];

export const beliefs = [
  { title: "Intention", body: "Nothing is added without purpose." },
  { title: "Enduring", body: "Beautiful today. Still beautiful tomorrow." },
  { title: "Personal", body: "The final detail is always you." },
];

/** Images used for the Instagram grid on the homepage. */
export const instagramGrid = [
  { src: "/images/model_02.webp", alt: "Model wearing S&S gold hoops on a city street" },
  { src: "/images/model_03.webp", alt: "Model wearing S&S gold earrings and layered chains" },
  { src: "/images/close_up.webp", alt: "Close-up of the bloom necklace and bracelet worn together" },
  { src: "/images/earrings_08.webp", alt: "Blue Bloom earrings styled with gypsophila" },
];
