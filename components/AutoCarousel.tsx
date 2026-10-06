"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** A full-width carousel that slides to the next image on its own. It pauses
 * while the viewer hovers over it or tabs into it, and stays still for
 * people who have "reduce motion" turned on. Arrows and dots let viewers
 * move through it themselves too. */
export function AutoCarousel({
  slides,
  interval = 4000,
  aspectClassName = "aspect-[16/10]",
  sizes = "(max-width: 1024px) 95vw, 1200px",
}: {
  slides: { src: string; alt: string }[];
  /** Milliseconds each slide stays on screen before sliding to the next. */
  interval?: number;
  aspectClassName?: string;
  sizes?: string;
}) {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || reduceMotion || total < 2) return;
    const id = window.setInterval(() => {
      if (!document.hidden) go(1);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, total, interval, go, index]);

  const playing = !paused && !reduceMotion;

  return (
    <div
      className="w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Final design screens"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div
        className={`relative w-full ${aspectClassName} rounded-2xl overflow-hidden border border-line`}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live={playing ? "off" : "polite"}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="relative h-full w-full flex-none"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes={sizes}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:bg-pill transition-colors"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-coffee" : "w-1.5 bg-coffee/25 hover:bg-coffee/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:bg-pill transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}
