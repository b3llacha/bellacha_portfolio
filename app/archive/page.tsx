import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Heart } from "@/components/Doodle";
import { Patch } from "@/components/Patch";
import PatchScatter from "@/components/PatchScatter";

export const metadata: Metadata = {
  title: "Archive — Bella Cha",
};

const entries = [
  {
    title: "Bella's Bites",
    category: "Personal culinary journal",
  },
];

export default function ArchivePage() {
  return (
    <main className="relative">
      <PatchScatter seed={2} count={5} />
      <Nav />

      <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-16 sm:pb-24 overflow-hidden">
        <Patch name="cloud" size={36} rotate="6deg" style={{ top: "16px", right: "8%" }} />
        <Patch name="flower" size={28} rotate="-10deg" style={{ bottom: "6%", left: "5%" }} />
        <Reveal>
          <p className="eyebrow">outside of work</p>
          <h1 className="font-display font-extrabold text-coffee text-4xl sm:text-5xl mt-1">
            off the clock
          </h1>
          <p className="mt-4 max-w-md text-ink-soft leading-relaxed">
            Smaller experiments and side projects that don&rsquo;t belong in
            the main case-study list &mdash; this space will keep growing.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {entries.map((e) => (
            <Reveal key={e.title}>
              <div className="rounded-2xl border border-line p-6 aspect-square flex flex-col justify-between">
                <Heart className="text-doodle-pink" size={20} />
                <div>
                  <p className="font-display font-bold text-xl mb-1">{e.title}</p>
                  <p className="text-sm text-ink-soft">{e.category}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={60}>
            <div className="rounded-2xl border border-dashed border-line p-6 aspect-square flex items-center justify-center">
              <p className="eyebrow">more soon</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
