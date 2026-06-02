"use client";
import "../../unit/unit.css";
import { use, useRef, useState, useEffect } from "react";
import { usePathname, notFound } from "next/navigation";

import { products } from "../../shop/products";
import Copy from "@/components/Copy/Copy";
import Product from "@/components/Product/Product";
import { useCartStore } from "@/store/cartStore";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productPages = {
  "essentials-01": {
    tag: "Essentials", title: "Essentials - 01", price: "$145",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A precision-fit base layer with micro-seamed construction and adaptive compression — designed for direct skin contact and unrestricted motion across all conditions.",
    construction: "Stretch-bonded single-layer fabric with flat-lock seam finishing. Built for skin-level wear with zero friction points.",
  },
  "essentials-02": {
    tag: "Essentials", title: "Essentials - 02", price: "$140",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Mid-layer utility piece with internal channel seams and modular pocket system — bridges the gap between base and outer with quiet functional intent.",
    construction: "Medium-weight woven shell with internal mesh lining. Channel seams allow attachment to compatible outer layers.",
  },
  "essentials-03": {
    tag: "Essentials", title: "Essentials - 03", price: "$130",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Relaxed-cut essential with dropped shoulders and single-panel construction — stripped of detail, built for daily deployment without visual interference.",
    construction: "Heavyweight jersey with reinforced shoulder seams. Minimal construction for maximum wearability.",
  },
  "essentials-04": {
    tag: "Essentials", title: "Essentials - 04", price: "$135",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Straight-form technical trouser with articulated knee shaping and low-profile waistband — designed to move with the body rather than against it.",
    construction: "Four-way stretch twill with reinforced seat and knee panels. Low-rise waistband with internal drawcord.",
  },
  "essentials-05": {
    tag: "Essentials", title: "Essentials - 05", price: "$125",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Minimal sleeveless shell with internal structured panels — functions as a standalone layer or climate-regulating mid-system component.",
    construction: "Lightweight ripstop face with perforated inner panels. Designed for breathable layering without shoulder restriction.",
  },
  "streetwear-01": {
    tag: "Streetwear", title: "Streetwear - 01", price: "$175",
    sizes: ["S", "M", "L", "XL"],
    description: "Oversized shell with exaggerated proportions and raw-edge finishing — built for presence in high-density environments where silhouette is signal.",
    construction: "Heavy canvas outer with unfinished hem detail. Dropped sleeve construction for unrestricted arm movement.",
  },
  "streetwear-02": {
    tag: "Streetwear", title: "Streetwear - 02", price: "$165",
    sizes: ["S", "M", "L", "XL"],
    description: "Wide-leg cargo form with multi-pocket architecture and reinforced stress zones — functional volume translated into street-ready structure.",
    construction: "Durable cotton-nylon blend with bar-tack reinforcement at all pocket openings and stress points.",
  },
  "streetwear-03": {
    tag: "Streetwear", title: "Streetwear - 03", price: "$160",
    sizes: ["S", "M", "L", "XL"],
    description: "Heavyweight layered hood with internal drawcord routing and forward-seam construction — engineered warmth with a confrontational silhouette.",
    construction: "Loopback fleece with bonded hood brim and internal cord channel. Double-stitched front seam for structural integrity.",
  },
  "streetwear-04": {
    tag: "Streetwear", title: "Streetwear - 04", price: "$158",
    sizes: ["S", "M", "L", "XL"],
    description: "Drop-shoulder cut with extended body length and minimal branding — the quiet uniform of anonymous movement through urban space.",
    construction: "Garment-dyed heavyweight cotton with enzyme wash finish. Extended hem with side-split detailing.",
  },
  "streetwear-05": {
    tag: "Streetwear", title: "Streetwear - 05", price: "$168",
    sizes: ["S", "M", "L", "XL"],
    description: "Technical bomber with bonded seam construction and concealed utility pockets — compact and clean, designed for rapid transition between environments.",
    construction: "Nylon taffeta outer with bonded lining and heat-sealed seams. Ribbed cuffs and hem with internal pocket system.",
  },
  "outerwear-01": {
    tag: "Outerwear", title: "Outerwear - 01", price: "$195",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Structured shell jacket with sealed multi-panel construction and internal storm collar — primary defense layer against variable atmospheric conditions.",
    construction: "3-layer laminate shell with critically taped seams. Adjustable storm collar with magnetic closure system.",
  },
  "outerwear-02": {
    tag: "Outerwear", title: "Outerwear - 02", price: "$185",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Long-form overcoat with weighted drape and concealed fastening system — designed to envelop and insulate across extended exposure zones.",
    construction: "Wool-blend face fabric with quilted interior lining. Concealed placket with internal snap fastening.",
  },
  "outerwear-03": {
    tag: "Outerwear", title: "Outerwear - 03", price: "$190",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Insulated puffer with baffled chamber construction and packable volume — thermal regulation without bulk, deployable in seconds.",
    construction: "20D ripstop shell with 600-fill down insulation. Packable into internal chest pocket with carabiner loop.",
  },
  "outerwear-04": {
    tag: "Outerwear", title: "Outerwear - 04", price: "$180",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Waterproof rain shell with fully taped seams and vented back panel — engineered for high-precipitation environments and sustained outdoor activity.",
    construction: "2.5-layer waterproof membrane with fully taped construction. Underarm vents and back cape panel for active ventilation.",
  },
  "outerwear-05": {
    tag: "Outerwear", title: "Outerwear - 05", price: "$185",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Softshell hybrid with fleece-bonded interior and wind-resistant face fabric — transitions seamlessly between indoor and outdoor temperature zones.",
    construction: "Wind-resistant face bonded to 200-weight fleece interior. Four-way stretch panels at back and underarm for full mobility.",
  },
  "accessories-01": {
    tag: "Accessories", title: "Accessories - 01", price: "$155",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Structured six-panel cap with rigid inner frame and minimal exterior finish — completes the system from the top down.",
    construction: "Woven shell with internal buckram frame and sweatband lining. Adjustable rear closure with branded hardware.",
  },
  "accessories-02": {
    tag: "Accessories", title: "Accessories - 02", price: "$148",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Modular utility tote with internal organization slots and detachable shoulder strap — carries the kit across all movement scenarios.",
    construction: "600D polyester body with reinforced base panel. Internal slip pockets and removable padded strap.",
  },
  "accessories-03": {
    tag: "Accessories", title: "Accessories - 03", price: "$152",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Technical harness belt with adjustable strap geometry and multiple attachment points — functional architecture worn directly on the body.",
    construction: "Webbing construction with milled aluminium buckles and D-ring attachment points. Fully adjustable across all strap segments.",
  },
  "accessories-04": {
    tag: "Accessories", title: "Accessories - 04", price: "$145",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Woven wrap with oversized proportions and pressure-free drape — adds thermal depth to any configuration without structural commitment.",
    construction: "Brushed wool-acrylic blend with raw hemmed edges. Oversized 200cm x 70cm format for versatile wrapping configurations.",
  },
  "accessories-05": {
    tag: "Accessories", title: "Accessories - 05", price: "$150",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Fitted hand covers with articulated knuckle construction and extended cuff — protection without sacrificing dexterity or form.",
    construction: "Stretch leather palm with knit back panel. Pre-curved finger construction and extended ribbed cuff for sleeve integration.",
  },
};

const COLORS = [
  { name: "Stone", hex: "#a49e91" },
  { name: "Ice",   hex: "#bfc4cb" },
  { name: "Grey",  hex: "#686868" },
  { name: "White", hex: "#ffffff" },
  { name: "Black", hex: "#121212" },
];

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const pageData = productPages[slug];
  const currentProduct = products.find((p) => p.slug === slug);

  const heroRef = useRef(null);
  const activeMinimapIndex = useRef(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0].name);
  const [selectedSize, setSelectedSize] = useState(pageData?.sizes?.[0] || "S");
  const addToCart = useCartStore((state) => state.addToCart);
  const pathname = usePathname();

  if (!pageData) return notFound();

  useEffect(() => {
    const related = products.filter((p) => p.tag === pageData.tag && p.slug !== slug);
    setRelatedProducts(related);
    setSelectedColor(COLORS[0].name);
    setSelectedSize(pageData.sizes[0]);
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
      end: `+=${window.innerHeight * 5}`,
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
          <div className="product-snapshot"><img src="/product/product_shot_01.jpg" alt="" /></div>
          <div className="product-snapshot"><img src="/product/product_shot_02.jpg" alt="" /></div>
          <div className="product-snapshot"><img src="/product/product_shot_03.jpg" alt="" /></div>
          <div className="product-snapshot"><img src="/product/product_shot_04.jpg" alt="" /></div>
          <div className="product-snapshot"><img src="/product/product_shot_05.jpg" alt="" /></div>
          <div className="product-snapshot-minimap">
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_01.jpg" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_02.jpg" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_03.jpg" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_04.jpg" alt="" /></div>
            <div className="product-snapshot-minimap-img"><img src="/product/product_minimap_05.jpg" alt="" /></div>
          </div>
        </div>
        <div className="product-hero-col product-meta">
          <div className="product-meta-container">
            <div className="product-meta-header">
              <h3>{pageData.title}</h3>
              <h3>{pageData.price}</h3>
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
                {pageData.sizes.map((size) => (
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
              <button className="primary" onClick={() => addToCart({ ...currentProduct, selectedColor, selectedSize })}>Add To Cart</button>
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
              <p className="bodyCopy lg">{pageData.description}</p>
              <p className="bodyCopy lg">{pageData.construction}</p>
            </Copy>
          </div>
        </div>
        <div className="product-col product-col-img">
          <img src="/product/product_shot_03.jpg" alt="" />
        </div>
      </section>

      <section className="product-details shipping-details">
        <div className="product-col product-col-img">
          <img src="/product/product_shot_04.jpg" alt="" />
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
              {relatedProducts.map((product) => (
                <Product
                  key={product.name}
                  product={product}
                  productIndex={products.indexOf(product) + 1}
                  showAddToCart={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
