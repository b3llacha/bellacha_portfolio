import { AutoplayVideo } from "./AutoplayVideo";

export default function PhoneVideo({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <div className="shrink-0 w-[220px]">
      <div className="relative aspect-[9/16] rounded-[1.75rem] border-[6px] border-ink bg-ink overflow-hidden shadow-[0_8px_24px_rgba(17,17,17,0.18)]">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-1.5 rounded-full bg-ink/80 z-10" />
        <AutoplayVideo src={src} />
      </div>
      {caption && (
        <p className="mt-3 text-sm text-ink-soft leading-snug">{caption}</p>
      )}
    </div>
  );
}
