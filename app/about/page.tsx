import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Patch } from "@/components/Patch";
import { Polaroid } from "@/components/Polaroid";
import { bio, education, focus } from "@/lib/about";
import { experience } from "@/lib/experience";

export const metadata: Metadata = { title: "About — Bella Cha" };

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-20 sm:pb-28 overflow-hidden">
        <Patch name="cloud" size={36} rotate="-6deg" style={{ top: "16px", right: "8%" }} />
        <Patch name="star-purple" size={30} rotate="10deg" style={{ bottom: "10%", left: "4%" }} />
        <Reveal>
          <p className="eyebrow">about me</p>
          <h1 className="font-display font-extrabold text-coffee text-base sm:text-xl mt-1 max-w-2xl">
            {bio.intro}
          </h1>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
          <Reveal delay={80}>
            <div className="max-w-md">
              <Polaroid
                src="/images/about-bella.jpg"
                alt="Bella Cha"
                rotate="-2deg"
                colorIndex={1}
                aspectClassName="aspect-[1606/1274]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-ink-soft leading-relaxed max-w-lg">
              {bio.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                I enjoy turning observations about everyday products into
                ideas &mdash; whether that means redesigning a user flow,
                developing a product concept, or thinking about how a brand
                can better connect with its audience.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              <div>
                <h2 className="eyebrow mb-2">education</h2>
                {education.map((e) => (
                  <div key={e.place} className="text-sm text-ink-soft">
                    <p className="text-ink">{e.place}</p>
                    <p>{e.role}</p>
                    <p className="text-ink-faint text-xs mt-0.5">
                      {e.period}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="eyebrow mb-2">focus</h2>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {focus.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-16">
          <h2 className="eyebrow mb-4">experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experience.map((e) => (
              <Link
                key={e.slug}
                href={`/experience/${e.slug}`}
                className="group rounded-2xl border border-coffee/15 p-5 hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow] hover:bg-coffee/10"
              >
                <p className="font-display font-bold text-base text-coffee">
                  {e.place}
                </p>
                <p className="text-sm text-ink-soft mt-1">{e.role}</p>
                <p className="text-xs text-ink-faint mt-2">{e.period}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
