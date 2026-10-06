"use client";

import { useRef, useState } from "react";

/** A muted, autoplaying, looping video that fills its (relatively
 * positioned) parent, with a small sound-toggle button in the corner —
 * no native controls, no download button, just play/pause-free ambient
 * video plus the option to turn sound on. */
export function AutoplayVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <div className="absolute inset-0">
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-coffee/85 text-paper flex items-center justify-center"
      >
        {muted ? <SoundOffIcon /> : <SoundOnIcon />}
      </button>
    </div>
  );
}

function SoundOnIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4Z" fill="currentColor" />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19 6a8 8 0 0 1 0 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4Z" fill="currentColor" />
      <path
        d="m16 9 5 6M21 9l-5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
