import Link from "next/link";
import { experience } from "@/lib/experience";
import Reveal from "./Reveal";
import { Patch } from "./Patch";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative px-6 sm:px-6 lg:px-12 py-16 sm:py-24 bg-pill/40 rounded-3xl mx-4 sm:mx-8 overflow-hidden"
    >
      <Patch name="heart" size={36} rotate="-5deg" style={{ top: "16px", left: "6%" }} />
      <Patch name="star-yellow" size={30} rotate="8deg" style={{ bottom: "16px", right: "5%" }} />
      <Reveal className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="font-display font-extrabold text-coffee text-3xl sm:text-4xl">
            experience
          </h2>
        </div>
        <Link href="/about" className="text-coffee text-sm font-medium inline-block origin-right transition-transform duration-200 hover:scale-110">
          read full profile &rarr;
        </Link>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experience.map((e, i) => (
          <Reveal key={e.slug} delay={i * 50}>
            <Link
              href={`/experience/${e.slug}`}
              className="group block rounded-2xl border border-coffee/15 p-5 h-full hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow] hover:bg-coffee/10"
            >
              <p className="font-display font-bold text-base text-coffee">
                {e.place}
              </p>
              <p className="text-sm text-ink-soft mt-1">{e.role}</p>
              <p className="text-xs text-ink-faint mt-2">{e.period}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
