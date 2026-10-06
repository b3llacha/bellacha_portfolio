import Link from "next/link";
import { contact } from "@/lib/about";

export default function Footer() {
  return (
    <footer className="relative rule mt-10 px-6 sm:px-10 lg:px-14 pt-14 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
        <div>
          <p className="font-display font-extrabold text-coffee text-2xl">let&rsquo;s connect!</p>
          <div className="mt-3 flex items-center gap-3">
            <a href={`mailto:${contact.email}`} className="eyebrow link-draw inline-block !text-[#8D1346]">
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="shrink-0 w-6 h-6 rounded-full bg-[#8D1346] text-cream flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">explore</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8D1346]">
            <li><Link href="/about" className="link-draw">about me</Link></li>
            <li><Link href="/work" className="link-draw">my work</Link></li>
            <li><Link href="/archive" className="link-draw">archive</Link></li>
            <li><Link href="/contact" className="link-draw">contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-ink-faint">
        <span>Bella Cha &copy; 2026</span>
        <span>{contact.site}</span>
      </div>
    </footer>
  );
}
