import { pageMetadata } from "@/lib/seo";
import AboutView from "./AboutView";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The story behind R Commerce — clothing engineered to operate like a system. Minimal, intelligent and quietly expressive garments built for the next era.",
  path: "/about",
  image: "/genesis/hero.webp",
});

export default function Page() {
  return <AboutView />;
}
