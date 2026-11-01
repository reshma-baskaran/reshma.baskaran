"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Native document scrolling with one gentle entrance per content section. */
export default function ScrollExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (preference.matches) return;
        const animation = target.animate(
          [{ transform: "translateY(14px)" }, { transform: "translateY(0)" }],
          { duration: 650, easing: "cubic-bezier(.16, 1, .3, 1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.05 });

    root.querySelectorAll(".scene-frame:not(.intro-frame)").forEach((frame) => observer.observe(frame));
    const onPreferenceChange = () => {
      if (preference.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener("change", onPreferenceChange);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return <div className="scroll-experience" ref={rootRef}>{children}</div>;
}
