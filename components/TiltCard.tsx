"use client";

import { useRef } from "react";

/** Wraps a project card so that on hover it lifts, grows a little, and tilts
 * toward the cursor in 3D, with a soft glossy highlight that makes the
 * surface read as rounded. Mouse only; touch and "reduce motion" users get
 * a plain card. */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
}: {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees toward the cursor. */
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const canTilt = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || !canTilt()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width; // 0 → 1
    const y = (e.clientY - r.top) / r.height; // 0 → 1
    el.style.setProperty("--rx", `${(0.5 - y) * maxTilt * 2}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * maxTilt * 2}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
    el.dataset.tilt = "on";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.tilt;
  };

  return (
    <div className="tilt-wrap h-full">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`tilt-card relative h-full ${className}`}
      >
        {children}
        <span aria-hidden="true" className="tilt-gloss" />
      </div>
    </div>
  );
}
