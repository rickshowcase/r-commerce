"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

import { ReactLenis } from "lenis/react";

export default function ClientLayout({ children, footer }) {
  const pageRef = useRef();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.__appStarted = true;
  }, []);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const btn = e.target.closest("button");
      if (!btn || btn.dataset.noPress) return;
      btn.classList.remove("btn-press");
      void btn.offsetWidth;
      btn.classList.add("btn-press");
      btn.addEventListener("animationend", () => btn.classList.remove("btn-press"), { once: true });
    };
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollSettings = isMobile
    ? {
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: 0.09,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      }
    : {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      };

  return (
    <ReactLenis root options={scrollSettings}>
      <div className="page" ref={pageRef}>
        {children}
        {pathname !== "/lookbook" && footer}
      </div>
    </ReactLenis>
  );
}
