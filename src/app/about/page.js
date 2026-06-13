import { pageMetadata, SITE_URL, siteConfig } from "@/lib/seo";
import AboutView from "./AboutView";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The story behind R Commerce — clothing engineered to operate like a system. Minimal, intelligent and quietly expressive garments built for the next era.",
  path: "/about",
  image: "/genesis/hero.webp",
});

export default function Page() {
  // AboutPage describes the brand entity for search/answer engines, reinforcing
  // who R Commerce is and what it makes.
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About R Commerce",
    description: metadata.description,
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
      description: siteConfig.description,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutView />
    </>
  );
}
