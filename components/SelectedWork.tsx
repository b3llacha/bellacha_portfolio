import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Reveal from "./Reveal";
import { Coffee } from "./Doodle";
import { Patch } from "./Patch";

export default function SelectedWork() {
  return (
    <section id="work" className="relative px-6 sm:px-10 lg:px-14 py-16 sm:py-24 overflow-hidden">
      <Patch name="star-purple" size={38} rotate="-8deg" style={{ top: "12px", right: "8%" }} />
      <Patch name="flower" size={32} rotate="12deg" style={{ bottom: "6%", left: "4%" }} />
      <Reveal>
        <h2 className="font-display font-extrabold text-coffee text-3xl sm:text-4xl">
          projects
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="font-display font-bold text-lg leading-snug mb-2 text-coffee">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10">
        <Link href="/work" className="text-coffee text-sm font-medium inline-flex items-center gap-2 origin-left transition-transform duration-200 hover:scale-110">
          <Coffee className="text-coffee" />
          see all work
        </Link>
      </Reveal>
    </section>
  );
}
