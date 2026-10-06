import Image from "next/image";
import { polaroidColors as palette } from "./polaroidColors";

/** The full-size polaroid treatment for the main profile photo — same tape
 * and pastel-gingham mount as MiniPolaroid, just sized to fill its parent
 * (responsive via the wrapper's own width classes) instead of a fixed px. */
export function Polaroid({
  src,
  alt,
  rotate = "-2deg",
  colorIndex = 0,
  color: colorOverride,
  className = "",
  priority = false,
  aspectClassName = "aspect-[3/4]",
}: {
  src: string;
  alt: string;
  rotate?: string;
  colorIndex?: number;
  /** Hex color that overrides the palette pick for the tape and gingham. */
  color?: string;
  className?: string;
  priority?: boolean;
  /** Overrides the photo's aspect ratio (default aspect-[3/4]) to match the
   * source image's true proportions instead of cropping it square-ish. */
  aspectClassName?: string;
}) {
  const color = colorOverride ?? palette[colorIndex % palette.length];

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-4 w-10 -translate-x-1/2 opacity-90"
        style={{ background: color, transform: "rotate(-6deg)" }}
      />
      <div
        className="rounded-[4px] p-2 pb-6 shadow-[0_10px_28px_rgba(0,0,0,0.16)]"
        style={{
          backgroundColor: "#fffdf9",
          backgroundImage: `linear-gradient(${color}66 1px, transparent 1px), linear-gradient(90deg, ${color}66 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
        }}
      >
        <div className={`relative w-full ${aspectClassName} overflow-hidden`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 60vw, 280px"
            className="object-cover"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
