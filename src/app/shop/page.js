import { pageMetadata, SITE_URL, siteConfig } from "@/lib/seo";
import { products } from "./products";
import ShopView from "./ShopView";

export const metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse the full R Commerce archive — essentials, streetwear, outerwear and accessories. Technical pieces engineered with deliberate, functional form.",
  path: "/shop",
  image: "/products/product_1.webp",
});

export default function Page() {
  // CollectionPage + ItemList exposes the full catalogue to search and answer
  // engines, with per-product offers so prices surface in rich results.
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shop",
    description: metadata.description,
    url: `${SITE_URL}/shop`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          category: product.tag,
          sku: product.slug,
          image: `${SITE_URL}/products/product_${index + 1}.webp`,
          url: `${SITE_URL}/product/${product.slug}`,
          brand: { "@type": "Brand", name: siteConfig.name },
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <ShopView />
    </>
  );
}
