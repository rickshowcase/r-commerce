"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

import { ReactLenis } from "lenis/react";

export default function ClientLayout({ children, footer }) {
  const pageRef = useRef();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMouseDown = (e) => {
      // Only the primary (left) button should trigger the press effect —
      // ignore right-click (2) and middle-click (1).
      if (e.button !== 0) return;
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
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const baseSettings = isMobile
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

  // On touch devices, hand scrolling back to the browser. Lenis hijacking touch
  // (syncTouch/smoothTouch) is what breaks iOS zoom-back and adds overhead with
  // no benefit, since native momentum scrolling is already smooth on mobile.
  const scrollSettings = isTouch
    ? { ...baseSettings, smooth: false, smoothTouch: false, syncTouch: false }
    : baseSettings;

  return (
    <ReactLenis root options={scrollSettings}>
      <div className="page" ref={pageRef}>
        {children}
        {pathname !== "/lookbook" && footer}
      </div>
    </ReactLenis>
  );
}
