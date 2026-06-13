"use client";
import "./not-found.css";
import Link from "next/link";

import Copy from "@/components/Copy/Copy";
import BrandIcon from "@/components/BrandIcon/BrandIcon";

export default function NotFoundView() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon">
            <BrandIcon />
          </div>

          <Copy type="flicker" animateOnScroll={false} delay={0.3}>
            <p>Error 404 — Signal Lost</p>
          </Copy>

          <Copy animateOnScroll={false} delay={0.4}>
            <h1>Off the grid</h1>
          </Copy>

          <Copy animateOnScroll={false} delay={0.6}>
            <p className="bodyCopy">
              The form you're looking for has left circulation, or never existed.
              Return to a known signal.
            </p>
          </Copy>

          {/* Plain links (not wrapped in Copy) so navigation is instantly usable. */}
          <div className="not-found-actions">
            <div className="btn">
              <Link href="/">Return Home</Link>
            </div>
            <div className="btn">
              <Link href="/shop">Enter the Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
