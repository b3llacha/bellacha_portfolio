import Image from "next/image";
import Link from "next/link";
import { polaroidColors } from "./polaroidColors";
import { experience } from "@/lib/experience";
import Reveal from "./Reveal";
import { Patch } from "./Patch";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative px-6 sm:px-8 lg:px-10 py-16 sm:py-24 bg-pill/40 rounded-3xl mx-6 sm:mx-10 lg:mx-14 overflow-hidden"
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
          <Reveal key={e.slug} delay={i * 50} className="relative hover:z-20 focus-within:z-20">
            <div className="group relative h-full">
              {/* Polaroid tucked behind the card; slides up on hover */}
              {e.peek && (
                <div
                  aria-hidden="true"
                  className="peek-polaroid pointer-events-none absolute right-6 top-0 z-0 hidden sm:block"
                  style={{ ["--tape" as string]: polaroidColors[i % polaroidColors.length] }}
                >
                  <span className="peek-tape" />
                  <div className="rounded-[3px] bg-[#fffdf9] p-1.5 pb-4 shadow-[0_6px_18px_rgba(91,58,34,0.18)]">
                    <div className="relative w-[92px] aspect-[4/5] overflow-hidden">
                      <Image
                        src={e.peek.src}
                        alt=""
                        fill
                        sizes="92px"
                        className="object-cover"
                        style={e.peek.position ? { objectPosition: e.peek.position } : undefined}
                      />
                    </div>
                  </div>
                </div>
              )}
              <Link
                href={`/experience/${e.slug}`}
                className="relative z-10 block rounded-2xl border border-coffee/15 p-5 h-full bg-[#F8F5EE] hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow] hover:bg-[#E8E2DA]"
              >
                <p className="font-display font-bold text-base text-coffee">
                  {e.place}
                </p>
                <p className="text-sm text-ink-soft mt-1">{e.role}</p>
                <p className="text-xs text-ink-faint mt-2">{e.period}</p>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
