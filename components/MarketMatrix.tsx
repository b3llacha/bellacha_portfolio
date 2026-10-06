/** A representative market-entry framework — the kind of comparison table
 * built for each client brand entering a new market. Category-level detail
 * (not a specific client's proprietary research), standing in for the
 * process described in the section text. */
const markets = [
  {
    name: "Germany",
    tier: "Mid-to-premium",
    channels: "Pharmacy chains & specialty beauty retail",
    competitors: "Established K-beauty & clean-beauty brands",
    messaging: "Clinical efficacy & ingredient transparency",
  },
  {
    name: "Spain",
    tier: "Accessible-to-mid",
    channels: "Department-store beauty halls & e-commerce marketplaces",
    competitors: "Local drugstore brands & emerging K-beauty entrants",
    messaging: "Trend-driven, social-first discovery",
  },
  {
    name: "Mexico",
    tier: "Accessible",
    channels: "Big-box beauty retail & DTC social commerce",
    competitors: "U.S. mass beauty brands & regional K-beauty distributors",
    messaging: "Influencer-led, value-conscious positioning",
  },
] as const;

const rows = [
  { key: "tier", label: "Price tier" },
  { key: "channels", label: "Retail channels" },
  { key: "competitors", label: "Competitive set" },
  { key: "messaging", label: "Messaging angle" },
] as const;

export function MarketMatrix() {
  return (
    <div className="w-full">
      <div className="w-full rounded-2xl border border-line overflow-hidden text-xs sm:text-[13px]">
        <div className="grid grid-cols-[92px_repeat(3,1fr)] sm:grid-cols-[110px_repeat(3,1fr)] bg-pill/60">
          <div className="px-2 sm:px-3 py-3" />
          {markets.map((m) => (
            <div
              key={m.name}
              className="px-2 sm:px-3 py-3 text-center border-l border-line"
            >
              <p className="font-display font-bold text-coffee text-sm">
                {m.name}
              </p>
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[92px_repeat(3,1fr)] sm:grid-cols-[110px_repeat(3,1fr)] border-t border-line"
          >
            <div className="px-2 sm:px-3 py-3 font-medium text-coffee bg-pill/30 leading-snug">
              {row.label}
            </div>
            {markets.map((m) => (
              <div
                key={m.name}
                className="px-2 sm:px-3 py-3 text-ink-soft leading-snug border-l border-line"
              >
                {m[row.key as keyof typeof m]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-faint italic">
        Example of the market-entry framework built for each launch market —
        category-level, not a specific client's data.
      </p>
    </div>
  );
}
