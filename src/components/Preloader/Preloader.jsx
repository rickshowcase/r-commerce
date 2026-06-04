"use client";
import "./Preloader.css";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const SESSION_KEY = "rcommerce_visited";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [loaderAnimating, setLoaderAnimating] = useState(true);
  const wrapperRef = useRef(null);
  const lenis = useLenis();

  // Skip preloader if this session has already seen it (covers refresh + SPA nav)
  useLayoutEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setShowPreloader(false);
      setLoaderAnimating(false);
    }
  }, []);

  useEffect(() => {
    if (loaderAnimating) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    }
  }, [lenis, loaderAnimating]);

  useGSAP(
    () => {
      if (!showPreloader) return;

      document.fonts.ready.then(() => {
        if (!wrapperRef.current) return;

        const logoSplit = SplitText.create(".preloader-logo h1", {
          type: "chars",
          charsClass: "char",
          mask: "chars",
        });

        gsap.set(logoSplit.chars, { x: "110%" });
        gsap.set(".preloader-logo h1", { opacity: 1 });

        function animateProgress(duration = 4.75) {
          const tl = gsap.timeline();
          const counterSteps = 5;
          let currentProgress = 0;

          for (let i = 0; i < counterSteps; i++) {
            const finalStep = i === counterSteps - 1;
            const targetProgress = finalStep
              ? 1
              : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
            currentProgress = targetProgress;

            tl.to(".preloader-progress-bar", {
              scaleX: targetProgress,
              duration: duration / counterSteps,
              ease: "power2.out",
            });
          }

          return tl;
        }

        const isMobile = window.innerWidth < 1000;
        const maskScale = isMobile ? 25 : 15;

        const tl = gsap.timeline({
          delay: 0.5,
          onComplete: () => {
            sessionStorage.setItem(SESSION_KEY, "true");
            setLoaderAnimating(false);
            setTimeout(() => setShowPreloader(false), 100);
          },
        });

        tl.to(logoSplit.chars, {
          x: "0%",
          stagger: 0.05,
          ease: "power4.out",
          duration: 1,
        })
          .add(animateProgress(), "<")
          .set(".preloader-progress", { backgroundColor: "#fff" })
          .to(
            logoSplit.chars,
            {
              x: "-110%",
              stagger: 0.05,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.5"
          )
          .to(
            ".preloader-progress",
            {
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(
            ".preloader-mask",
            {
              scale: maskScale,
              duration: 1.25,
              ease: "power3.out",
            },
            "<"
          );
      });
    },
    { scope: wrapperRef, dependencies: [showPreloader] }
  );

  if (!showPreloader) return null;

  return (
    <div className="preloader-wrapper" ref={wrapperRef}>
      <div className="preloader-progress">
        <div className="preloader-progress-bar"></div>
        <div className="preloader-logo">
          <h1>R Commerce</h1>
        </div>
      </div>
      <div className="preloader-mask"></div>
    </div>
  );
};

export default Preloader;
