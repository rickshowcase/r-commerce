import "./globals.css";
import { Koulen, DM_Mono, Host_Grotesk } from "next/font/google";

import { SITE_URL, siteConfig } from "@/lib/seo";
import ClientLayout from "@/client-layout";

import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";
import TransitionProvider from "@/providers/TransitionProvider";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-koulen",
});

const hostGrotesk = Host_Grotesk({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "R Commerce — Technical Apparel, Reduced to Form",
    template: "%s | R Commerce",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "R Commerce",
    "technical apparel",
    "minimalist clothing",
    "streetwear",
    "outerwear",
    "essentials",
    "functional fashion",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "R Commerce — Technical Apparel, Reduced to Form",
    description: siteConfig.description,
    url: SITE_URL,
    locale: siteConfig.locale,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "R Commerce — Technical Apparel, Reduced to Form",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/site-icon.webp",
    shortcut: "/site-icon.webp",
    apple: "/site-icon.webp",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: SITE_URL,
  logo: `${SITE_URL}/site-icon.webp`,
  description: siteConfig.description,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} ${hostGrotesk.variable} ${dmMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <TransitionProvider>
          <ClientLayout footer={<Footer />}>
            <Menu />
            {children}
          </ClientLayout>
          <ShoppingCart />
        </TransitionProvider>
      </body>
    </html>
  );
}
