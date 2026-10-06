import Link from "next/link";
import { contact } from "@/lib/about";

export default function Footer() {
  return (
    <footer className="relative rule mt-10 px-6 sm:px-10 lg:px-14 pt-14 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-extrabold text-coffee text-2xl">let&rsquo;s connect.</p>
          <a href={`mailto:${contact.email}`} className="eyebrow link-draw mt-3 inline-block">
            {contact.email}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-3">explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="link-draw">about me</Link></li>
            <li><Link href="/work" className="link-draw">my work</Link></li>
            <li><Link href="/archive" className="link-draw">archive</Link></li>
            <li><Link href="/contact" className="link-draw">contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">reach out</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-draw">
                linkedin
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="link-draw">
                email
              </a>
            </li>
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
