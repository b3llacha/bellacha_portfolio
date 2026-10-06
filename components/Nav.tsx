import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/archive", label: "archive" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="px-6 sm:px-10 lg:px-14 pt-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <Link
        href="/"
        className="relative block h-20 w-[280px] sm:h-28 sm:w-[380px] lg:h-[180px] lg:w-[600px] max-w-full -ml-4 sm:-ml-8 lg:-ml-12"
      >
        <Image
          src="/images/logo.png"
          alt="Bella Cha"
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 600px"
          className="object-contain object-left"
          priority
        />
      </Link>

      <nav aria-label="Primary" className="flex items-center gap-6 sm:gap-8 text-sm text-coffee">
        <Link href="/" className="link-draw">
          home
        </Link>
        {/* "work" groups experience + projects in one dropdown (opens on
            hover or keyboard/tap focus) */}
        <div className="relative group">
          <span
            tabIndex={0}
            className="cursor-pointer inline-flex items-center gap-1 outline-none"
          >
            work
            <svg viewBox="0 0 10 6" className="w-2 h-1.5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </span>
          <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block z-20">
            <div className="rounded-xl border border-line bg-paper px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col gap-2 min-w-[120px]">
              <Link href="/experience" className="link-draw w-fit">experience</Link>
              <Link href="/work" className="link-draw w-fit">projects</Link>
            </div>
          </div>
        </div>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="link-draw">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
