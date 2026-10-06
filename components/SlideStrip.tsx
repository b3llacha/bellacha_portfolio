"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** A horizontal strip of screenshots that keeps gliding sideways on its own,
 * looping forever. Viewers can also drag or swipe it; it pauses while they
 * do (and while it has keyboard focus), then picks up again. With "reduce
 * motion" turned on it stays still but can still be scrolled by hand. */
export function SlideStrip({
  slides,
  speed = 40,
}: {
  slides: { src: string; alt: string }[];
  /** Pixels per second. */
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const holdRef = useRef(false);
  const resumeTimer = useRef<number>();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || reduceMotion) return;
    let frame = 0;
    let last = performance.now();
    let carry = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      if (!holdRef.current && !document.hidden) {
        carry += (speed * dt) / 1000;
        const step = Math.floor(carry);
        if (step > 0) {
          carry -= step;
          el.scrollLeft += step;
        }
        // The slides are rendered twice; once we've scrolled past the first
        // copy, jump back by exactly its width so the loop is seamless.
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, speed]);

  const hold = () => {
    holdRef.current = true;
    window.clearTimeout(resumeTimer.current);
  };
  const release = (delay = 1500) => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      holdRef.current = false;
    }, delay);
  };

  // Render twice for the seamless loop (the copy is hidden from screen
  // readers). With reduced motion there's no loop, so one copy is enough.
  const loop = reduceMotion ? slides : [...slides, ...slides];

  return (
    <div
      ref={trackRef}
      role="region"
      aria-label="Final design screens"
      tabIndex={0}
      onPointerDown={hold}
      onPointerUp={() => release()}
      onPointerCancel={() => release()}
      onWheel={() => {
        hold();
        release();
      }}
      onFocus={hold}
      onBlur={() => release(0)}
      className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
    >
      {loop.map((slide, i) => {
        const isCopy = i >= slides.length;
        return (
          <div
            key={`${slide.src}-${i}`}
            aria-hidden={isCopy || undefined}
            className="relative flex-none w-[300px] sm:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-pill"
          >
            <Image
              src={slide.src}
              alt={isCopy ? "" : slide.alt}
              fill
              sizes="(max-width: 640px) 300px, 420px"
              className="object-cover"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
}
