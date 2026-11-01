"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Keep native scrolling, with a pinned introduction and a rising content sheet. */
export default function ScrollIntro({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const frame = frameRef.current;
    const content = document.getElementById("main");
    if (!stage || !frame || !content) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let viewportHeight = window.innerHeight;
    let start = 0;
    let distance = 1;
    let animationFrame = 0;
    let lastProgress = -1;

    const render = () => {
      animationFrame = 0;
      const progress = motionPreference.matches
        ? 0
        : Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      if (progress === lastProgress) return;
      lastProgress = progress;
      const eased = progress * progress * (3 - 2 * progress);
      frame.style.transform = `translate3d(0,${-viewportHeight * 0.09 * eased}px,0) scale(${1 + 0.12 * eased})`;
      frame.style.opacity = `${1 - eased * 0.86}`;
      // Reveal the sheet without transforming its contents, so native section
      // links keep their exact document positions throughout the transition.
      content.style.clipPath = `inset(0 ${2.5 * (1 - eased)}% 0 round ${32 * (1 - eased)}px ${32 * (1 - eased)}px 0 0)`;
      content.style.borderRadius = `${32 * (1 - eased)}px ${32 * (1 - eased)}px 0 0`;

      if (motionPreference.matches) {
        frame.style.removeProperty("transform");
        frame.style.removeProperty("opacity");
        content.style.removeProperty("clip-path");
        content.style.removeProperty("border-radius");
      }
    };

    const queueRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    const measure = () => {
      viewportHeight = window.innerHeight;
      // offsetHeight ignores the animated transform. A tall mobile introduction
      // scrolls normally before its final viewport becomes the pinned scene.
      const frameHeight = frame.offsetHeight;
      const overflow = Math.max(0, frameHeight - viewportHeight);
      const stageTop = stage.getBoundingClientRect().top + window.scrollY;
      distance = viewportHeight * 1.15;
      start = stageTop + overflow;
      lastProgress = -1;

      if (motionPreference.matches) {
        stage.style.height = `${frameHeight}px`;
        frame.style.top = "0px";
        content.style.marginTop = "0px";
      } else {
        stage.style.height = `${frameHeight + distance}px`;
        frame.style.top = `${-overflow}px`;
        content.style.marginTop = `${-viewportHeight}px`;
      }
      render();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    window.addEventListener("scroll", queueRender, { passive: true });
    window.addEventListener("resize", measure);
    window.visualViewport?.addEventListener("resize", measure);
    motionPreference.addEventListener("change", measure);
    measure();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("scroll", queueRender);
      window.removeEventListener("resize", measure);
      window.visualViewport?.removeEventListener("resize", measure);
      motionPreference.removeEventListener("change", measure);
      stage.style.removeProperty("height");
      frame.removeAttribute("style");
      content.style.removeProperty("margin-top");
      content.style.removeProperty("clip-path");
      content.style.removeProperty("border-radius");
    };
  }, []);

  return (
    <section className="intro-stage" id="top" ref={stageRef} aria-label="Introduction">
      <div className="intro-frame dark-intro" ref={frameRef}>
        {children}
      </div>
    </section>
  );
}
