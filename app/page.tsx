import { Hero } from "@/components/home/hero";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { Story } from "@/components/home/story";
import { ShopByStyle } from "@/components/home/shop-by-style";
import { CloserLook } from "@/components/home/closer-look";
import { StayInTouch } from "@/components/home/stay-in-touch";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Story />
      <ShopByStyle />
      <CloserLook />
      <StayInTouch />
    </>
  );
}
