import { notFound } from "next/navigation";

import { products } from "@/app/shop/products";
import { SITE_URL, siteConfig } from "@/lib/seo";
import ProductView from "./ProductView";

function getProduct(slug) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const index = products.indexOf(product) + 1;
  return { ...product, image: `/products/product_${index}.webp` };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = product.name;
  const description = product.description;
  const path = `/product/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      locale: siteConfig.locale,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    sku: product.slug,
    category: product.tag,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/product/${product.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Shop", item: `${SITE_URL}/shop` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductView slug={slug} />
    </>
  );
}
