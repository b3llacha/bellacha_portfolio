import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import PhoneVideo from "@/components/PhoneVideo";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { Patch } from "@/components/Patch";
import { RegionsMap } from "@/components/RegionsMap";
import { MarketMatrix } from "@/components/MarketMatrix";
import { SlideDeck } from "@/components/SlideDeck";
import { experience } from "@/lib/experience";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const entry = experience.find((e) => e.slug === params.slug);
  if (!entry) return {};
  return { title: `${entry.place} — Bella Cha` };
}

export default function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const index = experience.findIndex((e) => e.slug === params.slug);
  if (index === -1) notFound();
  const entry = experience[index];
  const showCaseNotes = entry.caseNotes !== false;

  return (
    <main>
      <Nav />
      <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-10 overflow-hidden">
        <Patch name="heart" size={36} rotate="6deg" style={{ top: "16px", right: "8%" }} />
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <Reveal className="max-w-3xl">
            <span className="pill">{entry.period}</span>
            <h1 className="font-display font-extrabold text-coffee text-4xl sm:text-5xl mt-4">
              {entry.place}
            </h1>
            <p className="mt-3 text-ink-soft">{entry.role}</p>
            <p className="mt-5 text-ink-soft leading-relaxed">
              {entry.summary}
            </p>
            {entry.summaryLink && (
              <a
                href={entry.summaryLink.href}
                target="_blank"
                rel="noreferrer"
                className="link-draw inline-flex items-center gap-1 mt-3 text-sm font-medium text-ink-soft"
              >
                {entry.summaryLink.label}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </Reveal>
          {entry.heroStats && entry.heroStats.length > 0 && (
            <Reveal
              delay={100}
              className="w-full lg:w-72 lg:pt-14 grid grid-cols-2 gap-4 flex-none"
            >
              {entry.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line px-4 py-5"
                >
                  <p className="font-display font-extrabold text-coffee text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {entry.image && (
        <Reveal className="px-6 sm:px-10 lg:px-14">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={entry.image}
              alt={entry.imageAlt ?? entry.place}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      )}

      {entry.videos && entry.videos.length > 0 && (
        <section className="relative px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 overflow-hidden">
          <Reveal>
            <p className="eyebrow mb-3">campaign content</p>
            <h2 className="font-display font-bold text-coffee text-2xl mb-8">
              TikTok/Instagram contents
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory">
              {entry.videos.map((v) => (
                <div key={v.src} className="snap-start">
                  <PhoneVideo src={v.src} caption={v.caption} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {entry.gallery && entry.gallery.length > 0 && (
        <section className="relative px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 overflow-hidden">
          <Reveal className="flex items-center justify-between flex-wrap gap-3 mb-3">
            <p className="eyebrow">{entry.galleryLabel ?? "gallery"}</p>
            {entry.galleryLink && (
              <a
                href={entry.galleryLink.href}
                target="_blank"
                rel="noreferrer"
                className="link-draw text-sm font-medium text-ink-soft"
              >
                {entry.galleryLink.label}
              </a>
            )}
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {entry.gallery.map((g) => (
                <div key={g.src}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  {g.caption && (
                    <p className="mt-2 text-sm text-ink-soft">{g.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {entry.sections && entry.sections.length > 0 && (
        <section
          className={
            entry.sectionsFullWidth
              ? "px-6 sm:px-10 lg:px-14 py-16 sm:py-24 flex flex-col gap-16 sm:gap-24"
              : entry.sectionsGrid
              ? "px-6 sm:px-10 lg:px-14 py-16 sm:py-24 grid gap-x-16 gap-y-12 sm:grid-cols-2"
              : "px-6 sm:px-10 lg:px-14 py-16 sm:py-24 sm:columns-2 gap-x-16"
          }
        >
          {entry.sections.map((s, i) => (
            <Reveal
              key={s.heading}
              className={
                entry.sectionsFullWidth
                  ? ""
                  : entry.sectionsGrid
                  ? entry.sections!.length % 2 === 1 && i === entry.sections!.length - 1
                    ? "sm:col-span-2"
                    : ""
                  : "break-inside-avoid mb-12 last:mb-0"
              }
            >
              <h2 className="font-display font-bold text-coffee text-2xl mb-3">
                {s.heading}
              </h2>
              <div className="space-y-4">
                {s.body.map((block, i) =>
                  typeof block === "string" ? (
                    <p key={i} className="text-ink-soft leading-relaxed">
                      {block}
                    </p>
                  ) : (
                    <ul
                      key={i}
                      className="list-disc pl-5 space-y-1.5 text-ink-soft leading-relaxed"
                    >
                      {block.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
              {s.items && s.items.length > 0 && (
                <ul className="space-y-4 text-ink-soft leading-relaxed">
                  {s.items.map((item) => (
                    <li key={item.label} className="pl-5 relative">
                      <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 rounded-full bg-ink-soft" />
                      {item.label}
                      {item.title && (
                        <p className="mt-3 font-display font-semibold text-ink">
                          {item.title}
                        </p>
                      )}
                      {item.meta && (
                        <p className="mt-0.5 text-xs text-ink-faint">{item.meta}</p>
                      )}
                      {item.body && item.body.length > 0 && (
                        <div className="mt-2 space-y-3 text-sm text-ink-soft leading-relaxed">
                          {item.body.map((block, i) =>
                            typeof block === "string" ? (
                              <p key={i}>{block}</p>
                            ) : (
                              <ul key={i} className="list-disc pl-5 space-y-1">
                                {block.list.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            )
                          )}
                        </div>
                      )}
                      {item.slides && item.slides.length > 0 && (
                        <div
                          className={`mt-3 ${
                            item.slidesMaxWidthClassName ??
                            (item.slidesCompact === false ? "max-w-sm" : "max-w-[200px]")
                          }`}
                        >
                          <SlideDeck
                            slides={item.slides}
                            aspectClassName={item.slidesCompact === false ? undefined : "aspect-[4/5]"}
                          />
                        </div>
                      )}
                      {item.images && item.images.length > 0 && (
                        <div className="mt-3 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                          {item.images.map((img) => {
                            const frame = (
                              <div
                                className={`relative w-full rounded-2xl overflow-hidden ${item.imagesCompact ? "aspect-[4/5]" : "aspect-[16/10]"}`}
                              >
                                {img.type === "video" ? (
                                  <AutoplayVideo src={img.src} />
                                ) : (
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes={item.imagesCompact ? "170px" : "256px"}
                                    className="object-cover transition-opacity hover:opacity-90"
                                  />
                                )}
                              </div>
                            );
                            return (
                              <div
                                key={img.src}
                                className={`flex-none snap-start ${item.imagesCompact ? "w-[170px]" : "w-64"}`}
                              >
                                {img.href ? (
                                  <a href={img.href} target="_blank" rel="noreferrer">
                                    {frame}
                                  </a>
                                ) : (
                                  frame
                                )}
                                {img.caption && (
                                  <p className="mt-2 text-sm text-ink-soft">
                                    {img.caption}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {item.videos && item.videos.length > 0 && (
                        <div className="mt-3 flex gap-5 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
                          {item.videos.map((v) => (
                            <div key={v.src} className="snap-start">
                              <PhoneVideo src={v.src} />
                            </div>
                          ))}
                        </div>
                      )}
                      {item.note && (
                        <p className="mt-3 text-sm text-ink-soft">{item.note}</p>
                      )}
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-draw inline-flex items-center gap-1 mt-3 text-sm font-medium text-ink-soft"
                        >
                          {item.link.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {s.visual === "regions-map" && (
                <div className="mt-6 max-w-xs">
                  <RegionsMap />
                </div>
              )}
              {s.visual === "market-matrix" && (
                <div className="mt-6">
                  <MarketMatrix />
                </div>
              )}
              {s.slides && s.slides.length > 0 && (
                <div
                  className={`mt-6 ${
                    s.slidesMaxWidthClassName ??
                    (s.slidesCompact ? "max-w-[200px]" : "max-w-xs")
                  }`}
                >
                  <SlideDeck
                    slides={s.slides}
                    aspectClassName={s.slidesCompact ? "aspect-[4/5]" : undefined}
                  />
                </div>
              )}
              {s.instagramGrid && s.images && s.images.length > 0 && (
                <div className="mt-6 max-w-sm rounded-2xl border border-line overflow-hidden bg-white">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                    <span className="w-7 h-7 rounded-full bg-ink flex items-center justify-center text-white text-xs">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M22 3c-3 4-7 10-9 13-1-2-2-4-4-5l-1 1c2 1 3 3 4 6 3-4 7-10 11-14z" />
                      </svg>
                    </span>
                    {s.instagramHandle && (
                      <p className="font-semibold text-sm text-ink">{s.instagramHandle}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-[2px] bg-line">
                    {s.images.map((img) => (
                      <div key={img.src} className="relative aspect-square bg-ink/5">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {!s.instagramGrid && s.images && s.images.length > 0 && (
                <div className="mt-6 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                  {s.images.map((img) => {
                    const frame = (
                      <div
                        className={`relative w-full rounded-2xl overflow-hidden ${s.imagesCompact ? "aspect-[4/5]" : "aspect-[16/10]"}`}
                      >
                        {img.type === "video" ? (
                          <AutoplayVideo src={img.src} />
                        ) : (
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes={s.imagesCompact ? (s.imagesLarge ? "300px" : "170px") : s.imagesLarge ? "520px" : "256px"}
                            className="object-cover transition-opacity hover:opacity-90"
                          />
                        )}
                      </div>
                    );
                    return (
                      <div
                        key={img.src}
                        className={`flex-none snap-start ${
                          s.imagesCompact
                            ? s.imagesLarge
                              ? "w-[300px]"
                              : "w-[170px]"
                            : s.imagesLarge
                            ? "w-[85vw] sm:w-[480px] lg:w-[560px]"
                            : "w-64"
                        }`}
                      >
                        {img.href ? (
                          <a href={img.href} target="_blank" rel="noreferrer">
                            {frame}
                          </a>
                        ) : (
                          frame
                        )}
                        {img.caption && (
                          <p className="mt-2 text-sm text-ink-soft">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {s.link && (
                <a
                  href={s.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-draw inline-flex items-center gap-1 mt-4 text-sm font-medium text-ink-soft"
                >
                  {s.link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {s.stats && s.stats.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {s.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-line px-4 py-5"
                    >
                      <p className="font-display font-extrabold text-coffee text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </section>
      )}

      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
        {showCaseNotes && !entry.sections && (
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-3">case notes</p>
            <p className="text-ink-soft leading-relaxed">
              {entry.summary} A fuller written case study — process,
              decisions, and outcomes — is being written up for this role
              next.
            </p>
          </Reveal>
        )}
        <Reveal
          delay={80}
          className={`${showCaseNotes ? "mt-16 sm:mt-20" : ""} rule pt-8`}
        >
          <Link
            href="/"
            className="link-draw inline-flex items-center gap-2 text-coffee font-medium"
          >
            <span aria-hidden="true">←</span>
            back
          </Link>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
