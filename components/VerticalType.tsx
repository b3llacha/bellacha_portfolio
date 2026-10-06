export default function VerticalType({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none hidden lg:flex items-center justify-center ${className}`}
    >
      <span
        className="font-display font-medium text-ink whitespace-nowrap"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "clamp(3rem, 9vw, 7.5rem)",
          letterSpacing: "-0.01em",
          lineHeight: 0.85,
        }}
      >
        {children}
      </span>
    </div>
  );
}
