"use client";
import "./touchpoint.css";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";
import BrandIcon from "@/components/BrandIcon/BrandIcon";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactView() {
  const calloutRef = useRef(null);
  const contactHeroImgRef = useRef(null);

  useGSAP(() => {
    if (!contactHeroImgRef.current) return;

    gsap.set(contactHeroImgRef.current, { y: 1000 });
    gsap.to(contactHeroImgRef.current, {
      y: 100,
      duration: 0.75,
      ease: "power3.out",
      delay: 0.75,
    });
  });

  useGSAP(() => {
    const container = calloutRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 767;
    if (isMobile) return;

    const yDist = 12;

    const leftImage = container.querySelector(".contact-callout-img-left");
    const rightImage = container.querySelector(".contact-callout-img-right");

    if (leftImage) {
      gsap.fromTo(leftImage,
        { y: `${-yDist}rem` },
        { y: `${yDist}rem`, ease: "none", scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }}
      );
    }

    if (rightImage) {
      gsap.fromTo(rightImage,
        { y: `${yDist}rem` },
        { y: `${-yDist}rem`, ease: "none", scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }}
      );
    }
  });

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-col contact-hero-copy">
            <div className="contact-header">
              <Copy animateOnScroll={false} delay={0.75}>
                <h3>R Commerce is reachable. Proceed with purpose.</h3>
              </Copy>
            </div>
            <div className="contact-meta">
              <div className="contact-meta-block">
                <Copy animateOnScroll={false} delay={0.9}>
                  <p className="bodyCopy">General Enquiries</p>
                </Copy>
                <Copy animateOnScroll={false} delay={1}>
                  <h4>info@rickshowcase.com</h4>
                </Copy>
              </div>
              <div className="contact-meta-block">
                <Copy animateOnScroll={false} delay={1.1}>
                  <p className="bodyCopy">Orders & Support</p>
                </Copy>
                <Copy animateOnScroll={false} delay={1.2}>
                  <h4>info@rickshowcase.com</h4>
                </Copy>
              </div>
            </div>
          </div>
          <div className="contact-hero-col contact-hero-img-wrapper">
            <div className="contact-hero-img" ref={contactHeroImgRef}>
              <img src="/contact/hero.webp" alt="R Commerce contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-callout" ref={calloutRef}>
        <div className="contact-callout-img contact-callout-img-left">
          <img src="/contact/contact-callout.webp" alt="" />
        </div>
        <div className="contact-callout-img contact-callout-img-right">
          <img src="/contact/contact-callout.webp" alt="" />
        </div>
        <div className="container">
          <div className="contact-callout-header">
            <div className="contact-callout-logo">
              <BrandIcon />
            </div>
            <Copy type="flicker">
              <p>
                Early access, private drops, and direct releases from R Commerce.
                Only sent when something is worth sending.
              </p>
            </Copy>
            <Copy>
              <h1>Step into the business archive</h1>
            </Copy>
          </div>
        </div>
      </section>
    </>
  );
}
