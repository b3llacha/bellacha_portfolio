import Reveal from "./Reveal";
import { Patch } from "./Patch";
import { Polaroid } from "./Polaroid";
import PolaroidPile from "./PolaroidPile";
import { LinkedInIcon } from "./SocialIcons";
import { education, focus, toolkit, contact } from "@/lib/about";
import { experience } from "@/lib/experience";

export default function Hero() {
  return (
    <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-20 sm:pb-28 overflow-hidden">
      <Patch name="flower" size={44} rotate="-6deg" style={{ top: "16px", left: "14px" }} />
      <Patch name="cloud" size={46} rotate="4deg" style={{ top: "16px", right: "6%" }} />
      <Patch name="star-yellow" size={38} rotate="10deg" style={{ bottom: "8%", left: "34%" }} />
      <Patch name="star-purple" size={34} rotate="-10deg" style={{ top: "38%", right: "2%" }} />

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_195px] gap-x-4 gap-y-14">
        {/* Left column */}
        <div>
          <Reveal className="flex items-center gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-coffee text-paper flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <LinkedInIcon />
            </a>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-display font-extrabold text-coffee text-4xl sm:text-5xl tracking-tight whitespace-nowrap">
              hi, i&rsquo;m bella
            </h1>
            {/* One-line role label so a skimming recruiter knows what she
                does before reading anything else */}
            <p className="eyebrow !text-[14px] !text-coffee mt-3 leading-relaxed">
              <span className="block">product designer + marketer</span>
              <span className="block">uc berkeley &middot; cognitive science</span>
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-10 max-w-[220px] sm:max-w-[250px]">
            <Polaroid
              src="/images/bella-hero.jpg"
              alt="Bella Cha"
              rotate="-2deg"
              colorIndex={2}
              priority
            />
          </Reveal>
        </div>

        {/* Middle column — text + details grid, now sitting right next to
            the intro instead of across a gap */}
        <div className="lg:pl-6 pt-3 sm:pt-6 lg:pt-[70px]">
          <Reveal>
            <p className="text-[15px] sm:text-[17px] font-display font-medium leading-snug max-w-md text-coffee">
              {
                "I design thoughtful digital experiences at the intersection of product, consumer behavior, and visual storytelling."
              }
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
          >
            <div>
              <h2 className="eyebrow !text-[13px] mb-2">education</h2>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                {education[0].place} &middot; {education[0].role}
              </p>
            </div>
            <div>
              <h2 className="eyebrow !text-[13px] mb-2">focus</h2>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                {focus.join(" · ")}
              </p>
            </div>
            <div>
              <h2 className="eyebrow !text-[13px] mb-2">experience</h2>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                {experience.map((e) => e.place).join(" · ")}
              </p>
            </div>
            <div>
              <h2 className="eyebrow !text-[13px] mb-2">toolkit</h2>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                {toolkit.join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Far-right photo strip */}
        <div className="lg:pl-6">
          <PolaroidPile />
        </div>
      </div>
    </section>
  );
}
