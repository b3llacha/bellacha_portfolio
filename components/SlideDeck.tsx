"use client";

import { useState } from "react";
import Image from "next/image";

/** A click-through slide viewer — click the slide (or the arrows) to step
 * through a deck one slide at a time, with a counter underneath. */
export function SlideDeck({
  slides,
  aspectClassName = "aspect-[16/9]",
  sizes = "(max-width: 640px) 90vw, 45vw",
}: {
  slides: { src: string; alt: string }[];
  /** Overrides the frame's aspect ratio (default aspect-[16/9], tuned for
   * landscape pitch-deck slides) — pass a taller ratio for mixed-orientation
   * photo carousels. */
  aspectClassName?: string;
  /** Overrides the image `sizes` hint — pass a wider value when the deck is
   * shown full-width so the browser loads a sharp enough image. */
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + total) % total);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => go(1)}
        className={`group relative block w-full ${aspectClassName} rounded-2xl overflow-hidden border border-line`}
        aria-label="Next slide"
      >
        <Image
          src={slides[index].src}
          alt={slides[index].alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 text-paper text-xs px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          click for next →
        </span>
      </button>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:bg-pill transition-colors"
        >
          ‹
        </button>
        <p className="text-sm text-ink-soft">
          {index + 1} / {total}
        </p>
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
