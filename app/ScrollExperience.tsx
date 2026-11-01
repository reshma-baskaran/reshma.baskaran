"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const scenes = Array.from(root.querySelectorAll<HTMLElement>("[data-scroll-scene]"))
      .map((stage) => ({
        stage,
        frame: stage.firstElementChild as HTMLDivElement,
        start: 0,
        progress: -1,
      }));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let viewportHeight = window.innerHeight;
    let distance = viewportHeight * 1.15;
    let animationFrame = 0;
    let measurementFrame = 0;

    const render = () => {
      animationFrame = 0;
      const scroll = window.scrollY;
      scenes.forEach((scene, index) => {
        const last = index === scenes.length - 1;
        const progress = preference.matches || last
          ? 0
          : Math.min(1, Math.max(0, (scroll - scene.start) / distance));
        if (progress === scene.progress) return;
        scene.progress = progress;
        const eased = progress * progress * (3 - 2 * progress);
        const next = scenes[index + 1];

        if (preference.matches) {
          scene.frame.style.removeProperty("transform");
          scene.frame.style.removeProperty("opacity");
          scene.stage.style.removeProperty("clip-path");
        } else {
          scene.frame.style.transform = `translate3d(0,${-viewportHeight * 0.09 * eased}px,0) scale(${1 + 0.12 * eased})`;
          scene.frame.style.opacity = `${1 - eased * 0.86}`;
          // Clip the incoming sheet, preserving exact native anchor positions.
          if (next) {
            next.stage.style.clipPath = `inset(0 ${2.5 * (1 - eased)}% 0 round ${32 * (1 - eased)}px ${32 * (1 - eased)}px 0 0)`;
          }
        }
      });
    };

    const queueRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    const measure = () => {
      measurementFrame = 0;
      viewportHeight = window.innerHeight;
      distance = viewportHeight * 1.15;
      // Set every stage's geometry before reading any document positions.
      scenes.forEach((scene, index) => {
        const height = scene.frame.offsetHeight;
        const last = index === scenes.length - 1;
        scene.stage.style.height = `${height + (!preference.matches && !last ? distance : 0)}px`;
        scene.stage.style.marginTop = index && !preference.matches ? `${-viewportHeight}px` : "0px";
        scene.frame.style.top = preference.matches ? "0px" : `${-Math.max(0, height - viewportHeight)}px`;
        scene.progress = -1;
      });
      scenes.forEach((scene) => {
        const top = scene.stage.getBoundingClientRect().top + window.scrollY;
        scene.start = top + Math.max(0, scene.frame.offsetHeight - viewportHeight);
      });
      render();
    };

    const queueMeasure = () => {
      if (!measurementFrame) measurementFrame = window.requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(queueMeasure);
    scenes.forEach((scene) => observer.observe(scene.frame));
    window.addEventListener("scroll", queueRender, { passive: true });
    window.addEventListener("resize", queueMeasure);
    window.visualViewport?.addEventListener("resize", queueMeasure);
    preference.addEventListener("change", queueMeasure);
    measure();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(measurementFrame);
      window.removeEventListener("scroll", queueRender);
      window.removeEventListener("resize", queueMeasure);
      window.visualViewport?.removeEventListener("resize", queueMeasure);
      preference.removeEventListener("change", queueMeasure);
      scenes.forEach(({ stage, frame }) => {
        stage.removeAttribute("style");
        frame.removeAttribute("style");
      });
    };
  }, []);

  return <div className="scroll-experience" ref={rootRef}>{children}</div>;
}
