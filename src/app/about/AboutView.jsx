"use client";
import "./genesis.css";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";
import TextBlock from "@/components/TextBlock/TextBlock";
import BrandIcon from "@/components/BrandIcon/BrandIcon";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutView() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".project-page-whitespace",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const projectPreviewWrapper = document.querySelector(
            ".project-preview-wrapper"
          );
          const previewCols = document.querySelectorAll(
            ".preview-col:not(.main-preview-col)"
          );
          const mainPreviewImg = document.querySelector(
            ".preview-img.main-preview-img img"
          );

          if (!projectPreviewWrapper || !previewCols.length || !mainPreviewImg)
            return;

          const previewScreenWidth = window.innerWidth;
          const previewMaxScale = previewScreenWidth < 1024 ? 1.5 : 2.65;
          const isMobilePreview = previewScreenWidth < 1024;

          const scale = 1 + self.progress * previewMaxScale;
          const yPreviewColTranslate = self.progress * 300;
          const mainPreviewImgScale = 2 - self.progress * 0.85;

          projectPreviewWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

          if (!isMobilePreview) {
            previewCols.forEach((previewCol) => {
              previewCol.style.transform = `translateY(${yPreviewColTranslate}px)`;
            });
          }

          mainPreviewImg.style.transform = `scale(${mainPreviewImgScale})`;
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <section className="project-preview">
        <div className="project-preview-wrapper">
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_03.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_06.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_09.webp" alt="" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_01.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_04.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_07.webp" alt="" />
            </div>
          </div>
          <div className="preview-col main-preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_02.webp" alt="" />
            </div>
            <div className="preview-img main-preview-img">
              <img src="/spotlight/spotlight_img_05.webp" alt="R Commerce campaign imagery" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_08.webp" alt="" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_03.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_06.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_09.webp" alt="" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_01.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_04.webp" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_07.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="genesis-hero">
        <div className="gen-hero-img">
          <img src="/genesis/hero.webp" alt="R Commerce — the story behind what you wear" />
        </div>
        <div className="container">
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.7} type="flicker">
              <p>Form above noise,</p>
              <p>Structure over statement,</p>
              <p>Minimal by design.</p>
            </Copy>
          </div>
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.8} type="flicker">
              <p>R Commerce builds forward,</p>
              <p>Grounded in the now.</p>
            </Copy>
          </div>
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.7}>
              <h1>The story behind what you wear</h1>
            </Copy>
            <div className="gen-hero-meta">
              <div className="gen-hero-meta-block">
                <Copy animateOnScroll={false} delay={0.9} type="flicker">
                  <p>Precision over ornament,</p>
                  <p>For the unnamed future,</p>
                  <p>A study in silhouette.</p>
                </Copy>
              </div>
              <div className="gen-hero-meta-block">
                <Copy animateOnScroll={false} delay={1} type="flicker">
                  <p>[ SYS/RCOMMERCE/0001 ]</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="genesis-about">
        <div className="container">
          <div className="genesis-about-logo">
            <BrandIcon fill="#0f0f0f" />
          </div>
          <div className="genesis-about-copy">
            <Copy>
              <h4>
                R Commerce is built on the belief that clothing should operate like
                a system. Every piece is engineered with intention, shaped by
                visual logic and designed for a new kind of uniform. Defined by
                motion, structured in silence, presence without noise.
              </h4>
            </Copy>
            <Copy>
              <h4>
                The aesthetic roots of R Commerce lie in the future, not the past.
                Garments built to behave like interfaces: minimal, intelligent,
                quietly expressive. Function and form are synchronized, tailored
                for those who move through digital and physical layers with
                equal precision. R Commerce is not fashion. It is a transmission.
              </h4>
            </Copy>
          </div>
        </div>
      </section>

      <section className="project-page-whitespace"></section>

      <TextBlock />
    </div>
  );
}
