"use client";
import "./faq.css";
import { useState, useRef } from "react";

import { faqs } from "./faqData";
import Copy from "@/components/Copy/Copy";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FaqView() {
  // Tracks the open item; null means all collapsed. The first item starts open.
  const [openIndex, setOpenIndex] = useState(0);
  const listRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  // Reveal the FAQ rows in sequence once the header copy has animated in.
  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          delay: 1.5,
        }
      );
    },
    { scope: listRef }
  );

  return (
    <>
      <section className="faq-header">
        <div className="container">
          <Copy animateOnScroll={false} delay={0.65}>
            <h1>Field Manual</h1>
          </Copy>
          <div className="faq-header-divider"></div>
          <Copy type="flicker" animateOnScroll={false} delay={0.85}>
            <p>Common Questions</p>
          </Copy>
        </div>
      </section>

      <section className="faq-list" ref={listRef}>
        <div className="container">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <h4>{question}</h4>
                  <span className="faq-indicator" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p className="bodyCopy">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
