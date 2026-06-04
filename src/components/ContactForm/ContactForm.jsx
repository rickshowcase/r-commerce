"use client";
import "./ContactForm.css";
import { useRef, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";

const ContactForm = () => {
  const submitRef = useRef(null);
  const resetTimerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    return () => { if (resetTimerRef.current) clearTimeout(resetTimerRef.current); };
  }, []);

  useEffect(() => {
    const btn = submitRef.current;
    if (!btn || window.matchMedia("(pointer: coarse)").matches) return;

    let active = false;
    let snapping = false;
    let cx = 0, cy = 0;
    let xTo, yTo;

    const snapBack = () => {
      if (snapping) return;
      active = false;
      snapping = true;
      gsap.to(btn, {
        x: 0, y: 0,
        duration: 1.2,
        ease: "elastic.out(1.1, 0.3)",
        overwrite: true,
        onComplete: () => { snapping = false; },
      });
    };

    const getOriginalCenter = () => {
      let el = btn;
      let left = 0, top = 0;
      while (el) {
        left += el.offsetLeft;
        top += el.offsetTop;
        el = el.offsetParent;
      }
      return {
        cx: left + btn.offsetWidth / 2,
        cy: top + btn.offsetHeight / 2,
      };
    };

    const onEnter = () => {
      gsap.killTweensOf(btn);
      snapping = false;
      ({ cx, cy } = getOriginalCenter());
      active = true;
      xTo = gsap.quickTo(btn, "x", { duration: 0.2, ease: "power2.out" });
      yTo = gsap.quickTo(btn, "y", { duration: 0.2, ease: "power2.out" });
    };

    const onMove = (e) => {
      if (!active) return;
      const dx = e.pageX - cx;
      const dy = e.pageY - cy;
      xTo(dx * 0.5);
      yTo(dy * 0.5);
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", snapBack);
    window.addEventListener("mousemove", onMove);
    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", snapBack);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const handleSubmit = async () => {
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Invalid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      } else {
        setStatus("success");
        setMessage("Email received.");
        setEmail("");
        resetTimerRef.current = setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      }
    } catch {
      setStatus("error");
      setMessage("Connection failed. Try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section className="contact-form">
      <div className="contact-parallax-image-wrapper">
        <h1>R Commerce</h1>
        <img src="/contact-form/contact-parallax.webp" alt="" />
      </div>
      <div className="contact-form-container">
        <div className="cf-header">
          <h4>Enter the archive. Exit the noise.</h4>
        </div>
        <div className="cf-copy">
          <p className="bodyCopy sm">
            New drops and updates land here first. No clutter, no filler.
          </p>
        </div>
        <div className="cf-input">
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={status === "loading" || status === "success"}
          />
          {message && (
            <p
              className="cf-message"
              style={{ color: "var(--accent)" }}
            >
              {message}
            </p>
          )}
        </div>
        <div
          className={`cf-submit${status === "loading" ? " cf-submit--loading" : ""}`}
          ref={submitRef}
          onClick={handleSubmit}
        >
          <MdOutlineArrowOutward />
        </div>
        <div className="cf-footer">
          <div className="cf-divider"></div>
          <div className="cf-footer-copy">
            <p className="bodyCopy sm">
              Irregular by design. Relevant by intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
