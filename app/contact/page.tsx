import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Patch } from "@/components/Patch";
import { contact } from "@/lib/about";
import { LinkedInIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact — Bella Cha",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <section className="relative flex-1 px-6 sm:px-10 lg:px-14 py-20 sm:py-28 flex flex-col justify-center overflow-hidden">
        <Patch name="flower" size={36} rotate="-8deg" style={{ top: "8%", right: "8%" }} />
        <Patch name="star-purple" size={30} rotate="10deg" style={{ bottom: "10%", left: "6%" }} />
        <Reveal>
          <p className="eyebrow">contact</p>
          <p className="text-sm sm:text-base sm:whitespace-nowrap text-ink-soft leading-relaxed mt-3 mb-10">
            Whether it&rsquo;s a project or just a conversation about design,
            I&rsquo;d be happy to connect.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="group block font-display font-extrabold text-coffee text-[6vw] sm:text-3xl lg:text-4xl leading-[0.95] link-draw"
          >
            {contact.email}
          </a>
        </Reveal>

        <Reveal delay={100} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-coffee text-paper flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <LinkedInIcon />
          </a>
          <a href={`mailto:${contact.email}`} className="link-draw">
            email
          </a>
        </Reveal>
      </section>

      <footer className="rule px-6 sm:px-10 lg:px-14 py-8 flex items-center justify-between text-xs text-ink-faint">
        <span>Bella Cha &copy; 2026</span>
        <span>{contact.site}</span>
      </footer>
    </main>
  );
}
