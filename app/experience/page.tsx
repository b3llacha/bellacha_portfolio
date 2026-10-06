import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Patch } from "@/components/Patch";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience — Bella Cha",
};

export default function ExperienceIndexPage() {
  return (
    <main>
      <Nav />

      <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-10 overflow-hidden">
        <Patch name="star-purple" size={36} rotate="-8deg" style={{ top: "16px", right: "10%" }} />
        <Patch name="cloud" size={28} rotate="8deg" style={{ bottom: "10px", left: "6%" }} />
        <Reveal>
          <h1 className="font-display font-extrabold text-coffee text-4xl sm:text-5xl">
            experience
          </h1>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experience.map((e, i) => (
            <Reveal key={e.slug} delay={i * 60}>
              <Link
                href={`/experience/${e.slug}`}
                className="group block rounded-2xl border border-coffee/15 p-5 h-full hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow] hover:bg-coffee/10"
              >
                <p className="font-display font-bold text-base text-coffee">
                  {e.place}
                </p>
                <p className="text-sm text-ink-soft mt-1">{e.role}</p>
                <p className="text-xs text-ink-faint mt-2">{e.period}</p>
                {e.highlights && e.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-ink-soft list-disc pl-5">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
