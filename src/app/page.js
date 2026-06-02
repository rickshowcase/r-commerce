"use client";
import "./home.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { products } from "./shop/products";
import Preloader from "@/components/Preloader/Preloader";
import DotMatrix from "@/components/DotMatrix/DotMatrix";
import BrandIcon from "@/components/BrandIcon/BrandIcon";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";
import TextBlock from "@/components/TextBlock/TextBlock";
import PeelReveal from "@/components/PeelReveal/PeelReveal";
import CTA from "@/components/CTA/CTA";

import Copy from "@/components/Copy/Copy";
import Product from "@/components/Product/Product";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  // Computed once on mount — no state, no re-renders, no double useGSAP run
  const isInitialLoad = useRef(
    typeof window === "undefined" || !window.__appStarted
  );

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const heroImgRef = useRef(null);
  const heroHeaderRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 4));
  }, []);

  useGSAP(() => {
    if (!heroImgRef.current || !heroHeaderRef.current) return;

    gsap.set(heroImgRef.current, { y: 1000 });
    gsap.to(heroImgRef.current, {
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      delay: isInitialLoad.current ? 5.75 : 1,
    });

    gsap.to(heroHeaderRef.current, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <>
      <Preloader />

      <section className="hero" ref={heroSectionRef}>
        <DotMatrix
          color="#3a3a3a"
          dotSize={2}
          spacing={5}
          opacity={0.7}
          delay={isInitialLoad.current ? 6 : 1.125}
        />
        <div className="container">
          <div className="hero-header" ref={heroHeaderRef}>
            <Copy animateOnScroll={false} delay={isInitialLoad.current ? 5.5 : 0.65}>
              <h1>R Commerce. Built for the Next Era</h1>
            </Copy>
          </div>
        </div>
        <div className="hero-img" ref={heroImgRef}>
          <img src="/home/hero.png" alt="" />
        </div>
        <div className="section-footer">
          <Copy
            type="flicker"
            delay={isInitialLoad.current ? 7.5 : 0.65}
            animateOnScroll={false}
          >
            <p>Dark Field</p>
          </Copy>
          <Copy
            type="flicker"
            delay={isInitialLoad.current ? 7.5 : 0.65}
            animateOnScroll={false}
          >
            <p>Form R.01</p>
          </Copy>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-copy">
            <Copy type="flicker">
              <p>Clothing reduced to essential form</p>
            </Copy>
            <Copy>
              <h3>
                R Commerce is built for the frictionless, the fast, and
                the quietly defiant.
              </h3>
            </Copy>
            <div className="about-icon">
              <BrandIcon />
            </div>
          </div>
        </div>
        <div className="section-footer light">
          <Copy type="flicker">
            <p>/ Base Form /</p>
          </Copy>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="featured-products-header">
            <Copy type="flicker">
              <p>Active Units</p>
            </Copy>
            <Copy>
              <h3>
                Current <br /> Pieces
              </h3>
            </Copy>
          </div>
          <div className="featured-products-separator">
            <div className="featured-products-divider"></div>
            <div className="featured-products-labels">
              <Copy type="flicker">
                <p>Current Drop</p>
              </Copy>
              <Copy type="flicker">
                <Link href="/shop">Full Archive</Link>
              </Copy>
            </div>
          </div>
          <div className="featured-products-list">
            {featuredProducts.map((product) => (
              <Product
                key={product.name}
                product={product}
                productIndex={products.indexOf(product) + 1}
                showAddToCart={true}
              />
            ))}
          </div>
        </div>
      </section>

      <MarqueeBanner />

      <TextBlock />

      <PeelReveal />

      <CTA />
    </>
  );
}
