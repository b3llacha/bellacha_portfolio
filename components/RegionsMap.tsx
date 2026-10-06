/** A stylized "global reach" diagram — not a literal cartographic map, but a
 * grid-backed diagram highlighting Europe and Latin America as the two
 * regions worked, with small dots standing in for individual distributor /
 * retailer touchpoints, plus a one-line outreach snapshot underneath. Ties
 * into the site's existing dotted-grid background and warm palette. */
export function RegionsMap() {
  const europeDots: [number, number][] = [
    [235, 75],
    [268, 68],
    [288, 98],
    [242, 108],
    [274, 116],
  ];
  const latamDots: [number, number][] = [
    [128, 182],
    [160, 192],
    [140, 218],
    [172, 228],
    [120, 232],
    [153, 248],
  ];

  return (
    <div className="relative w-full rounded-2xl border border-line bg-pill/50 p-5 sm:p-6 overflow-hidden">
      <svg viewBox="0 0 480 300" className="w-full h-auto" aria-hidden="true">
        {/* faint globe grid */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            x2="480"
            y1={i * 45 + 10}
            y2={i * 45 + 10}
            stroke="#EAE6DC"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={`v${i}`}
            d={`M ${i * 55 + 15} 0 Q ${i * 55 + 35} 150 ${i * 55 + 15} 300`}
            stroke="#EAE6DC"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* highlighted regions */}
        <ellipse cx="262" cy="92" rx="58" ry="40" fill="#F3DE8A" fillOpacity="0.6" />
        <ellipse cx="148" cy="212" rx="52" ry="62" fill="#A9D6A0" fillOpacity="0.6" />

        {/* connecting line */}
        <path
          d="M 258 118 Q 200 170 168 190"
          stroke="#5B3A22"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.45"
        />

        {/* touchpoint dots */}
        {europeDots.map(([x, y], i) => (
          <circle key={`eu${i}`} cx={x} cy={y} r="4" fill="#5B3A22" />
        ))}
        {latamDots.map(([x, y], i) => (
          <circle key={`la${i}`} cx={x} cy={y} r="4" fill="#5B3A22" />
        ))}

        {/* labels */}
        <text
          x="262"
          y="44"
          textAnchor="middle"
          className="font-display font-bold fill-coffee"
          style={{ fontSize: 17 }}
        >
          Europe
        </text>
        <text
          x="148"
          y="286"
          textAnchor="middle"
          className="font-display font-bold fill-coffee"
          style={{ fontSize: 17 }}
        >
          Latin America
        </text>
      </svg>

      <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-soft">
        <span>● 300+ distributors &amp; retailers contacted</span>
        <span>● 10 prospective partnerships advancing</span>
      </div>
    </div>
  );
}
