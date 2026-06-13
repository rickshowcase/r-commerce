// Single source of truth for the FAQ content.
//
// This list is consumed in two places: the visible accordion in FaqView and the
// FAQPage JSON-LD in page.js. Defining it once keeps the on-page copy and the
// structured data in sync (Google requires them to match) and avoids shipping
// the same content twice.
//
// NOTE: shipping, returns and payment details below are sensible general
// defaults — update them to match R Commerce's actual policies.
export const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 1–2 business days. Standard shipping within North America typically arrives in 5–7 business days, with expedited options shown at checkout. You'll receive a tracking link by email as soon as your order ships.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. R Commerce ships worldwide. International delivery usually takes 7–14 business days depending on destination and customs processing. Any import duties or taxes are the responsibility of the recipient.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "Unworn items in original condition with tags attached can be returned or exchanged within 30 days of delivery. To start a return, email info@rickshowcase.com with your order number. Refunds are issued to the original payment method once the item is received and inspected.",
  },
  {
    question: "How do I choose the right size?",
    answer:
      "Each product page lists available sizes from XS to XL. Our pieces are cut with a deliberate, modern fit — size down for a closer silhouette, or up for a relaxed one. Reach out before ordering if you'd like specific garment measurements.",
  },
  {
    question: "How can I track my order?",
    answer:
      "As soon as your order ships, we email a tracking number and link. You can follow your package from dispatch through to delivery using that link.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards. Every transaction is encrypted and processed securely at checkout.",
  },
  {
    question: "How should I care for my garments?",
    answer:
      "To preserve fit and finish, wash cold, avoid bleach, and lay flat or hang to dry. Specific care instructions are printed on the label of each piece.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "For any question about orders, products or support, email info@rickshowcase.com or visit our Contact page. We respond within 1–2 business days.",
  },
];
