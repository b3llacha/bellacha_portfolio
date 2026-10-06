import { Patch, type PatchName } from "./Patch";

const names: PatchName[] = ["flower", "star-yellow", "heart", "cloud", "star-purple"];

// Spots down the page, alternating sides and staying in the side margins so
// they decorate the background without sitting on top of text or photos.
// `top` is a % of the whole page height, so long pages get them all the way
// down and short pages get them closer together.
const spots: { top: number; side: "left" | "right"; inset: number; size: number; rotate: number }[] = [
  { top: 14, side: "left", inset: 1.2, size: 34, rotate: -8 },
  { top: 24, side: "right", inset: 1.6, size: 30, rotate: 10 },
  { top: 35, side: "left", inset: 2.2, size: 28, rotate: 6 },
  { top: 46, side: "right", inset: 1.0, size: 36, rotate: -6 },
  { top: 57, side: "left", inset: 1.4, size: 30, rotate: 12 },
  { top: 68, side: "right", inset: 2.0, size: 28, rotate: -10 },
  { top: 79, side: "left", inset: 1.8, size: 34, rotate: -4 },
  { top: 90, side: "right", inset: 1.4, size: 30, rotate: 8 },
];

/** Scatters the fabric patches (flower, stars, heart, cloud) down the side
 * margins of a whole page, like the landing page. Drop it as the first child
 * of a `relative` <main>. `seed` shifts which patch lands where so pages
 * don't all look identical. Hidden on small screens (Patch is md+ only). */
export default function PatchScatter({ seed = 0, count = spots.length }: { seed?: number; count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {spots.slice(0, count).map((s, i) => (
        <Patch
          key={i}
          name={names[(i + seed) % names.length]}
          size={s.size}
          rotate={`${s.rotate}deg`}
          style={
            s.side === "left"
              ? { top: `${s.top}%`, left: `${s.inset}%` }
              : { top: `${s.top}%`, right: `${s.inset}%` }
          }
        />
      ))}
    </div>
  );
}
