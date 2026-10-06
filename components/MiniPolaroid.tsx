import Image from "next/image";
import { polaroidColors as palette } from "./polaroidColors";

export function MiniPolaroid({
  src,
  alt,
  rotate = "0deg",
  colorIndex = 0,
  size = 74,
  style,
}: {
  src: string;
  alt: string;
  rotate?: string;
  colorIndex?: number;
  size?: number;
  style?: React.CSSProperties;
}) {
  const color = palette[colorIndex % palette.length];

  return (
    <div
      className="relative inline-block"
      style={{ transform: `rotate(${rotate})`, ...style }}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-3 w-7 -translate-x-1/2 opacity-90"
        style={{ background: color, transform: "rotate(-6deg)" }}
      />
      <div
        className="rounded-[3px] p-1.5 pb-3 shadow-[0_4px_14px_rgba(0,0,0,0.14)]"
        style={{
          width: size,
          backgroundColor: "#fffdf9",
          backgroundImage: `linear-gradient(${color}66 1px, transparent 1px), linear-gradient(90deg, ${color}66 1px, transparent 1px)`,
          backgroundSize: "7px 7px",
        }}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${size}px`}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
