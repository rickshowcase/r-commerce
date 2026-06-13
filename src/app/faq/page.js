import { pageMetadata, SITE_URL } from "@/lib/seo";
import { faqs } from "./faqData";
import FaqView from "./FaqView";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about R Commerce — shipping, returns and exchanges, sizing, payment and product care.",
  path: "/faq",
});

export default function Page() {
  // FAQPage structured data is generated from the same `faqs` source the
  // accordion renders, so the visible Q&A and the markup always match.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${SITE_URL}/faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqView />
    </>
  );
}
