import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/work", label: "work" },
  { href: "/experience", label: "experience" },
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

      <nav aria-label="Primary" className="flex items-center gap-6 sm:gap-8 text-sm text-[#8A2433]">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="link-draw">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
