import { pageMetadata } from "@/lib/seo";
import ShopView from "./ShopView";

export const metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse the full R Commerce archive — essentials, streetwear, outerwear and accessories. Technical pieces engineered with deliberate, functional form.",
  path: "/shop",
  image: "/products/product_1.webp",
});

export default function Page() {
  return <ShopView />;
}
