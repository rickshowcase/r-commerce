"use client";
import "../../unit/unit.css";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { products } from "../../shop/products";
import Copy from "@/components/Copy/Copy";
import Product from "@/components/Product/Product";
import { useCartStore } from "@/store/cartStore";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLORS = [
  { name: "Stone", hex: "#a49e91" },
  { name: "Ice",   hex: "#bfc4cb" },
  { name: "Grey",  hex: "#686868" },
  { name: "White", hex: "#ffffff" },
  { name: "Black", hex: "#121212" },
];

export default function ProductView({ slug }) {
  // Single source of truth — server page.js guarantees a valid slug.
  const product = products.find((p) => p.slug === slug);

  const heroRef = useRef(null);
  const activeMinimapIndex = useRef(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0].name);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "S");
  const addToCart = useCartStore((state) => state.addToCart);
  const pathname = usePathname();

  useEffect(() => {
    const related = products.filter((p) => p.tag === product.tag && p.slug !== slug);
    setRelatedProducts(related);
    setSelectedColor(COLORS[0].name);
    setSelectedSize(product.sizes[0]);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => { ScrollTrigger.refresh(); }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  useGSAP(() => {
    const snapshots = document.querySelectorAll(".product-snapshot");
    const minimapImages = document.querySelectorAll(".product-snapshot-minimap-img");
    const totalImages = snapshots.length;

    gsap.set(snapshots[0], { y: "0%", scale: 1 });
    gsap.set(minimapImages[0], { scale: 1.25 });
    for (let i = 1; i < totalImages; i++) {
      gsap.set(snapshots[i], { y: "100%", scale: 1 });
      gsap.set(minimapImages[i], { scale: 1 });
    }

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 4}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        let currentActiveIndex = 0;
        for (let i = 1; i < totalImages; i++) {
          const imageStart = (i - 1) / (totalImages - 1);
          const imageEnd = i / (totalImages - 1);
          let localProgress = (progress - imageStart) / (imageEnd - imageStart);
          localProgress = Math.max(0, Math.min(1, localProgress));
          gsap.set(snapshots[i], { y: `${100 - localProgress * 100}%` });
          gsap.set(snapshots[i - 1], { scale: 1 + localProgress * 0.5 });
          if (localProgress >= 0.5) currentActiveIndex = i;
        }
        if (currentActiveIndex !== activeMinimapIndex.current) {
          gsap.to(minimapImages[currentActiveIndex], { scale: 1.25, duration: 0.3, ease: "power2.out" });
          for (let i = 0; i < currentActiveIndex; i++) {
            gsap.to(minimapImages[i], { scale: 0, duration: 0.3, ease: "power2.out" });
          }
          for (let i = currentActiveIndex + 1; i < totalImages; i++) {
            gsap.to(minimapImages[i], { scale: 1, duration: 0.3, ease: "power2.out" });
          }
          activeMinimapIndex.current = currentActiveIndex;
        }
      },
    });

    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <section className="product-hero" ref={heroRef}>
        <div className="product-hero-col product-snapshots">
          <div className="product-snapshot"><img src="/product/product_shot_01.webp" alt={`${product.name} — view 1`} /></div>
          <div className="product-snapshot"><img src="/product/product_shot_02.webp" alt={`${product.name} — view 2`} /></div>
          <div className="product-snapshot"><img src="/product/product_shot_03.webp" alt={`${product.name} — view 3`} /></div>
          <div className="product-snapshot"><img src="/product/product_shot_04.webp" alt={`${product.name} — view 4`} /></div>
          <div className="product-snapshot"><img src="/product/product_shot_05.webp" alt={`${product.name} — view 5`} /></div>
          <div className="product-snapshot-minimap">
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_01.webp" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_02.webp" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_03.webp" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_04.webp" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_05.webp" alt="" /></div>
          </div>
        </div>
        <div className="product-hero-col product-meta">
          <div className="product-meta-container">
            <div className="product-meta-header">
              <h3>{product.name}</h3>
              <h3>${product.price}</h3>
            </div>
            <div className="product-meta-header-divider"></div>
            <div className="product-color-container">
              <p className="md">Chroma</p>
              <div className="product-colors">
                {COLORS.map((color) => (
                  <div
                    key={color.name}
                    className={`product-color${selectedColor === color.name ? " active" : ""}`}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
            <div className="product-sizes-container">
              <p className="md">Form Size</p>
              <div className="product-sizes">
                {product.sizes.map((size) => (
                  <p
                    key={size}
                    className={`md${selectedSize === size ? " selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    [ {size} ]
                  </p>
                ))}
              </div>
            </div>
            <div className="product-meta-buttons">
              <button className="primary" onClick={() => addToCart({ ...product, selectedColor, selectedSize }, "product_detail")}>Add To Cart</button>
              <button className="secondary">Save Item</button>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details specifications">
        <div className="product-col product-col-copy">
          <div className="product-col-copy-wrapper">
            <Copy><h4>Build Specs</h4></Copy>
            <Copy>
              <p className="bodyCopy lg">{product.description}</p>
              <p className="bodyCopy lg">{product.construction}</p>
            </Copy>
          </div>
        </div>
        <div className="product-col product-col-img">
          <img src="/product/product_shot_03.webp" alt={`${product.name} detail`} />
        </div>
      </section>

      <section className="product-details shipping-details">
        <div className="product-col product-col-img">
          <img src="/product/product_shot_04.webp" alt={`${product.name} dispatch`} />
        </div>
        <div className="product-col product-col-copy">
          <div className="product-col-copy-wrapper">
            <Copy><h4>Dispatch Terms</h4></Copy>
            <Copy>
              <p className="bodyCopy lg">
                All orders are processed within 5 business days and shipped via
                tracked courier service. Estimated delivery times vary by region,
                but most domestic shipments arrive within 7 business days.
              </p>
              <p className="bodyCopy lg">
                Returns are accepted on unworn items within 14 days of delivery.
                To initiate a return, contact support with your order number.
                Refunds are issued to the original payment method once the item
                is received and inspected.
              </p>
            </Copy>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="related-products-header"><h3>Related Items</h3></div>
          <div className="related-products-container">
            <div className="container">
              {relatedProducts.map((related) => (
                <Product
                  key={related.name}
                  product={related}
                  productIndex={products.indexOf(related) + 1}
                  showAddToCart={true}
                  source="related_products"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
