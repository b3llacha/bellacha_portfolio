import { MiniPolaroid } from "./MiniPolaroid";
import { galleryPhotos } from "@/lib/gallery";

const rotations = ["-6deg", "4deg", "-3deg", "7deg", "-8deg", "3deg", "-4deg"];

/** A staggered two-column stack of tilted, tape-and-pattern polaroids — fills
 * the gap between the intro and the details grid without needing to scroll,
 * unlike the carousel it replaces. Sized to end roughly where the profile
 * photo in the left column does. The left column sits half a row lower than
 * the right one, so each of its photos nestles between two on the right. */
export default function PolaroidPile() {
  const rightColumn = galleryPhotos.slice(0, 4);
  const leftColumn = galleryPhotos.slice(4, 7);

  return (
    <div className="hidden lg:flex justify-center gap-x-4 self-start pt-2">
      <div className="flex flex-col gap-y-5 mt-20">
        {leftColumn.map((photo, i) => (
          <MiniPolaroid
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            rotate={rotations[(i + 4) % rotations.length]}
            colorIndex={i + 4}
            size={92}
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-5">
        {rightColumn.map((photo, i) => (
          <MiniPolaroid
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            rotate={rotations[i % rotations.length]}
            colorIndex={i}
            size={92}
          />
        ))}
      </div>
    </div>
  );
}
