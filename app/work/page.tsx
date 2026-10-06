import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Patch } from "@/components/Patch";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Bella Cha",
};

export default function WorkPage() {
  return (
    <main>
      <Nav />

      <section className="relative px-6 sm:px-10 lg:px-14 pt-6 pb-10 overflow-hidden">
        <Patch name="star-yellow" size={36} rotate="-8deg" style={{ top: "16px", right: "10%" }} />
        <Patch name="heart" size={28} rotate="8deg" style={{ bottom: "10px", left: "6%" }} />
        <Reveal>
          <h1 className="font-display font-extrabold text-coffee text-4xl sm:text-5xl">
            all work
          </h1>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl border border-line overflow-hidden h-full hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-[background-color,box-shadow] hover:bg-coffee/10"
              >
                <div className="relative aspect-[16/11] bg-pill">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 32vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="pill absolute top-3 right-3 bg-paper/90 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-faint mb-1">{project.year}</p>
                  <h2 className="font-display font-bold text-lg leading-snug mb-2 text-coffee">
                    {project.title}
                  </h2>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
