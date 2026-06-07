// Centralized SEO configuration and helpers for R Commerce.
//
// The production URL is resolved from environment variables so it works both
// locally and on Vercel. Set NEXT_PUBLIC_SITE_URL in the Vercel project to the
// final custom domain (e.g. https://rcommerce.com). Until then it falls back to
// the Vercel-provided deployment URL, then a sensible default.
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://r-commerce.vercel.app");

export const SITE_URL = rawUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "R Commerce",
  description:
    "R Commerce is a premium technical-apparel label — essentials, streetwear, outerwear and accessories reduced to deliberate, functional form.",
  // Default social-share image (Open Graph / Twitter).
  ogImage: "/home/hero.webp",
  locale: "en_US",
};

// Builds a consistent Metadata object for a page. Relative paths are resolved to
// absolute URLs via `metadataBase` (set in the root layout). Set
// `absoluteTitle` for pages that should not append the "| R Commerce" template.
export function pageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  absoluteTitle = false,
}) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      locale: siteConfig.locale,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
