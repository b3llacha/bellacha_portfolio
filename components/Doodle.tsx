type IconProps = {
  className?: string;
  size?: number;
};

const base = {
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Heart({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M12 20s-7-4.35-9.5-8.8C.7 8 2.2 4.5 5.8 4c2-.28 3.6.8 4.2 2.3.6-1.5 2.2-2.58 4.2-2.3 3.6.5 5.1 4 3.3 7.2C19 15.65 12 20 12 20Z" />
    </svg>
  );
}

export function Moon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function Cloud({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M7 17.5a4.2 4.2 0 0 1-.6-8.36A5 5 0 0 1 16 8a3.6 3.6 0 0 1 1 9.5H7Z" />
    </svg>
  );
}

export function Sparkle({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M12 3.5c.5 3 2 5.2 5 6.5-3 1.3-4.5 3.5-5 6.5-.5-3-2-5.2-5-6.5 3-1.3 4.5-3.5 5-6.5Z" />
    </svg>
  );
}

export function Plane({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M21 4 3 11.2l6.2 2.1L15 20l1.7-6.7L21 4Zm0 0-11.6 9.2" />
    </svg>
  );
}

export function Leaf({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" />
      <path d="M5 19c2-4 5-7 9-9" />
    </svg>
  );
}

export function Note({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M9 18V5.5L19 4v12.5" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  );
}

export function Coffee({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10.5h1.5a2.2 2.2 0 0 1 0 4.4H16" />
      <path d="M8 6.5c0-1 .8-1.2.8-2M11.5 6.5c0-1 .8-1.2.8-2" />
    </svg>
  );
}

export function Flower({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <ellipse cx="12" cy="4.7" rx="1.8" ry="2.3" transform="rotate(0 12 8.6)" />
      <ellipse cx="12" cy="4.7" rx="1.8" ry="2.3" transform="rotate(72 12 8.6)" />
      <ellipse cx="12" cy="4.7" rx="1.8" ry="2.3" transform="rotate(144 12 8.6)" />
      <ellipse cx="12" cy="4.7" rx="1.8" ry="2.3" transform="rotate(216 12 8.6)" />
      <ellipse cx="12" cy="4.7" rx="1.8" ry="2.3" transform="rotate(288 12 8.6)" />
      <circle cx="12" cy="8.6" r="1.2" />
      <path d="M12 13c0 2.5.2 4.6.7 6.8" />
      <path d="M12.5 17.6c1-1.5 2.6-2.1 4-1.7-.6 1.5-2.2 2.2-4 1.7Z" />
    </svg>
  );
}

export function Sailboat({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M4 17h16l-2 3H6l-2-3Z" />
      <path d="M8 17 8 5l7 6-7 3" />
      <path d="M12 17V3" />
    </svg>
  );
}

export function Fish({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M3 12c3-4 8-6 12-6 3 0 5 2.5 6 6-1 3.5-3 6-6 6-4 0-9-2-12-6Z" />
      <path d="M9 10.2v3.6" />
      <path d="M21 12l2.2-2.5M21 12l2.2 2.5" />
    </svg>
  );
}

export function Rainbow({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M3 20a9 9 0 0 1 18 0" />
      <path d="M6.5 20a5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}

export function Cherry({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} stroke="currentColor" {...base}>
      <path d="M9 13a3.2 3.2 0 1 0 0 6.4A3.2 3.2 0 0 0 9 13Z" />
      <path d="M16.5 14.5a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
      <path d="M9 13c0-5 2-8 5-9.5" />
      <path d="M16.5 14.5c0-4 .5-7 2.5-9" />
    </svg>
  );
}

/** A single scattered decorative mark, absolutely positioned within a relative parent. */
export function Doodle({
  icon: Icon,
  className = "",
  size = 22,
  style,
}: {
  icon: (p: IconProps) => JSX.Element;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`doodle hidden md:block ${className}`}
      style={style}
    >
      <Icon size={size} />
    </span>
  );
}
