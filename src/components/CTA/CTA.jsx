"use client";
import "./CTA.css";
import { useRef, useEffect } from "react";
import Link from "next/link";

import Copy from "../Copy/Copy";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const container = ctaRef.current;
    if (!container) return;

    // Holds the ScrollTrigger created inside the timeout so the cleanup below
    // can kill it; otherwise the trigger leaks across page navigations and its
    // scrub onUpdate keeps firing against detached targets.
    let st;

    const timer = setTimeout(() => {
      const leftImage = container.querySelector(
        ".cta-col:nth-child(1) .cta-side-img"
      );
      const rightImage = container.querySelector(
        ".cta-col:nth-child(3) .cta-side-img"
      );

      // Bail if the parallax images aren't in the DOM (avoids GSAP null targets).
      if (!leftImage || !rightImage) return;

      st = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          const leftTranslateY = 20 - progress * 30;
          gsap.set(leftImage, {
            y: `${leftTranslateY}rem`,
          });

          const rightTranslateY = -progress * 30;
          gsap.set(rightImage, {
            y: `${rightTranslateY}rem`,
          });
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      if (st) st.kill();
    };
  }, []);

  return (
    <section className="cta" ref={ctaRef}>
      <div className="container">
        <div className="cta-col">
          <div className="cta-side-img">
            <img src="/cta/cta_img_01.webp" alt="R Commerce apparel" />
          </div>
          <div className="cta-col-copy">
            <Copy>
              <p className="bodyCopy sm">
                Constructed outside context. Each form built for presence,
                stripped of spectacle.
              </p>
            </Copy>
          </div>
        </div>
        <div className="cta-col">
          <div className="cta-header">
            <Copy>
              <h3>The R Commerce standard</h3>
            </Copy>
          </div>
          <div className="cta-main-img">
            <img src="/cta/cta_img_02.webp" alt="The R Commerce standard" />
          </div>
        </div>
        <div className="cta-col">
          <div className="cta-side-img">
            <img src="/cta/cta_img_03.webp" alt="R Commerce apparel" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cta-main-copy">
          <div className="btn">
            <Copy type="flicker">
              <Link href="/shop">Enter the Shop</Link>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
