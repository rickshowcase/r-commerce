import { pageMetadata } from "@/lib/seo";
import HomeView from "./HomeView";

export const metadata = pageMetadata({
  title: "R Commerce — Technical Apparel, Reduced to Form",
  description:
    "R Commerce is a premium technical-apparel label built for the next era. Essentials, streetwear, outerwear and accessories engineered with deliberate, functional form.",
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return <HomeView />;
}
