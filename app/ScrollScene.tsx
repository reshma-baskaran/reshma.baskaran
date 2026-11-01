import type { ReactNode } from "react";

export default function ScrollScene({
  children,
  id,
  label,
  intro = false,
}: {
  children: ReactNode;
  id?: string;
  label: string;
  intro?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scene-stage${intro ? " intro-stage" : ""}`}
      data-scroll-scene
      aria-label={label}
    >
      <div className={`scene-frame${intro ? " intro-frame dark-intro" : ""}`}>
        {children}
      </div>
    </section>
  );
}
