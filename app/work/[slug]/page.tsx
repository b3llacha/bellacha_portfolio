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
import { AutoCarousel } from "@/components/AutoCarousel";
import { projects } from "@/lib/projects";
import type { Section } from "@/lib/types";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.pageTitle ?? project.title} — Bella Cha` };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const showCaseNotes = project.caseNotes !== false;

  // Renders one written case-study section (heading, text, and any media).
  const renderSection = (s: Section) => (
    <Reveal
      key={s.heading}
      className="break-inside-avoid mb-12 last:mb-0"
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
      {s.images && s.images.length > 0 && (
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
                    sizes={s.imagesCompact ? "170px" : "256px"}
                    className="object-cover transition-opacity hover:opacity-90"
                  />
                )}
              </div>
            );
            return (
              <div
                key={img.src}
                className={`flex-none snap-start ${s.imagesCompact ? "w-[170px]" : "w-64"}`}
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
  );

  // When a project has a showcase carousel, the written sections are split
  // around it: everything before `showcaseBefore` sits above the carousel,
  // and that section onward sits below it.
  const sections = project.sections ?? [];
  const splitAt =
    project.showcase && project.showcaseBefore
      ? sections.findIndex((x) => x.heading === project.showcaseBefore)
      : -1;
  const sectionsAbove = splitAt === -1 ? sections : sections.slice(0, splitAt);
  const sectionsBelow = splitAt === -1 ? [] : sections.slice(splitAt);
  const hasShowcase = !!project.showcase && project.showcase.length > 0;


  return (
    <main>
      <Nav />

      <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-10 overflow-hidden">
        <Patch name="star-yellow" size={36} rotate="-8deg" style={{ top: "16px", right: "8%" }} />
        <Reveal>
          <span className="pill">{project.category} &middot; {project.year}</span>
          <h1 className="font-display font-extrabold text-coffee text-4xl sm:text-5xl mt-4 max-w-3xl">
            {project.pageTitle ?? project.title}
          </h1>
          {(project.intro ?? project.description) && (
            <p className="mt-5 max-w-lg text-ink-soft leading-relaxed">
              {project.intro ?? project.description}
            </p>
          )}
        </Reveal>
      </section>

      {/* The cover image doubles as the card thumbnail. Projects with a
          showcase carousel skip it here, since the carousel already shows
          the work. */}
      {!hasShowcase && (
        <Reveal className="px-6 sm:px-10 lg:px-14">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      )}

      {project.videos && project.videos.length > 0 && (
        <section className="relative px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 overflow-hidden">
          <Reveal>
            <p className="eyebrow mb-3">campaign content</p>
            <h2 className="font-display font-bold text-2xl mb-8">
              TikTok / Instagram clips
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory">
              {project.videos.map((v) => (
                <div key={v.src} className="snap-start">
                  <PhoneVideo src={v.src} caption={v.caption} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="relative px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 overflow-hidden">
          <Reveal>
            <p className="eyebrow mb-3">gallery</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((g) => (
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

      {sectionsAbove.length > 0 && (
        <section
          className={`px-6 sm:px-10 lg:px-14 ${hasShowcase ? "pt-6 pb-4" : "pt-16 sm:pt-24 pb-16 sm:pb-24"} sm:columns-2 gap-x-16`}
        >
          {sectionsAbove.map(renderSection)}
        </section>
      )}

      {hasShowcase && (
        <section className="px-6 sm:px-10 lg:px-14 py-8 sm:py-10">
          <Reveal>
            <p className="eyebrow mb-4">{project.showcaseLabel ?? "final design"}</p>
            <AutoCarousel slides={project.showcase!} />
          </Reveal>
        </section>
      )}

      {sectionsBelow.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-14 pt-12 pb-16 sm:pb-24 sm:columns-2 gap-x-16">
          {sectionsBelow.map(renderSection)}
        </section>
      )}

      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
        {showCaseNotes && !project.sections && (
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-3">case notes</p>
            <p className="text-ink-soft leading-relaxed">
              {project.description} A fuller written case study &mdash;
              process, decisions, and outcomes &mdash; is being written up
              for this project next.
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
