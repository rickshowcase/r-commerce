import { pageMetadata, SITE_URL, organizationJsonLd } from "@/lib/seo";
import ContactView from "./ContactView";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach R Commerce for general enquiries, orders and support. Get early access, private drops and direct releases from the archive.",
  path: "/contact",
  image: "/contact/hero.webp",
});

export default function Page() {
  // ContactPage links the page to the brand's reachable contact points so
  // engines associate the email/location with R Commerce.
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    description: metadata.description,
    url: `${SITE_URL}/contact`,
    mainEntity: organizationJsonLd(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactView />
    </>
  );
}
