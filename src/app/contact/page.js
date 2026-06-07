import { pageMetadata } from "@/lib/seo";
import ContactView from "./ContactView";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach R Commerce for general enquiries, orders and support. Get early access, private drops and direct releases from the archive.",
  path: "/contact",
  image: "/contact/hero.webp",
});

export default function Page() {
  return <ContactView />;
}
