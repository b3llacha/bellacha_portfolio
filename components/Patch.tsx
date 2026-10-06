import Image from "next/image";

export type PatchName = "heart" | "cloud" | "flower" | "star-yellow" | "star-purple";

const patches: Record<PatchName, { src: string; alt: string }> = {
  heart: { src: "/images/patches/heart.png", alt: "" },
  cloud: { src: "/images/patches/cloud.png", alt: "" },
  flower: { src: "/images/patches/flower.png", alt: "" },
  "star-yellow": { src: "/images/patches/star-yellow.png", alt: "" },
  "star-purple": { src: "/images/patches/star-purple.png", alt: "" },
};

/** A single scattered fabric-patch decoration, absolutely positioned within
 * a relative parent — same placement pattern as the Doodle SVG icons, just
 * rendered as a small stitched-patch image instead of a line drawing. */
export function Patch({
  name,
  className = "",
  size = 36,
  rotate = "0deg",
  style,
}: {
  name: PatchName;
  className?: string;
  size?: number;
  rotate?: string;
  style?: React.CSSProperties;
}) {
  const patch = patches[name];
  return (
    <span
      aria-hidden="true"
      className={`doodle hidden md:block ${className}`}
      style={{ ...style, transform: `rotate(${rotate})` }}
    >
      <Image src={patch.src} alt={patch.alt} width={size} height={size} className="object-contain" />
    </span>
  );
}
