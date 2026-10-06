"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const items = [
  { href: "/experience", label: "experience" },
  { href: "/work", label: "projects" },
];

/** The "work" dropdown in the nav. A real <button> with aria-expanded so it
 * works on tap (phones) and is announced to screen readers; it still opens
 * on hover with a mouse. Closes on Escape, outside click, or tabbing away. */
export default function WorkMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        // Hover-to-open is for mouse users only; touch taps use onClick.
        if (window.matchMedia("(hover: hover)").matches) setOpen(true);
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(hover: hover)").matches) setOpen(false);
      }}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 text-coffee"
      >
        work
        <svg
          viewBox="0 0 10 6"
          aria-hidden="true"
          className={`w-2 h-1.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-full pt-2 z-20"
      >
        <ul className="rounded-xl border border-line bg-paper p-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col gap-1 min-w-[150px]">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-coffee/10 focus-visible:bg-coffee/10 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
