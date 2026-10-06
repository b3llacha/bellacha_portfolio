import type { Section, GalleryImage, VideoClip } from "./types";

export type ProjectVideo = VideoClip;

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  /** Optional short line shown under the title on the project's own page,
   * in place of `description` (which still shows on the project cards). */
  intro?: string;
  /** Optional smaller line shown after the title on the project's own page,
   * on the same line (e.g. "Website Redesign"). */
  pageSubtitle?: string;
  /** Optional big full-width click-through carousel of the final design. */
  showcase?: GalleryImage[];
  /** Heading of the section the showcase carousel sits right before (e.g.
   * "Outcome"); without it the carousel follows all the sections. */
  showcaseBefore?: string;
  /** Overrides the small label above the showcase (default "final design"). */
  showcaseLabel?: string;
  /** Live site link shown at the top right of the showcase. */
  siteLink?: { label: string; href: string };
  image: string;
  imageAlt: string;
  size: "large" | "small";
  href?: string;
  /** Set to false to hide the "case notes" section on the project page —
   * used for entries that aren't a design case study. */
  caseNotes?: boolean;
  /** Optional short-form video clips, shown as phone-shaped players. */
  videos?: ProjectVideo[];
  /** Optional written case-study sections — fill these in with your own
   * process notes, decisions, and outcomes for each project. */
  sections?: Section[];
  /** Optional photo gallery — add your own pictures of the work here. */
  gallery?: GalleryImage[];
};

// Content carried over from the existing b3llacha.com (Framer) site — project
// names, categories, and descriptions are hers, not invented. Images are
// temporarily hot-linked from the current site so the layout ships with real
// work in it; swap the `image` paths for local files in /public whenever
// you'd like. See next.config.mjs for the remote image allowance.
export const projects: Project[] = [
  {
    slug: "spero-apparel",
    number: "01",
    title: "Spero Apparel",
    category: "Web Design",
    year: "2026",
    description:
      "A website redesign for a student-led apparel brand, built in collaboration with developers to create a cleaner, more cohesive shopping experience — from layout and visual hierarchy to navigation and checkout flow.",
    image: "/images/spero/redesign/01-to-hope.jpg",
    imageAlt: "Spero website redesign — “to hope.” brand statement in large serif type",
    size: "large",
    pageSubtitle: "Website Redesign",
    // Empty on purpose: the page heading already says "Website Redesign", and
    // the Overview section below carries the intro.
    intro: "",
    sections: [
      {
        heading: "Overview",
        body: [
          "Redesigned the website for Spero, a student-run, gospel-centered apparel project creating clothing inspired by scripture. The goal was to build a stronger brand experience despite having a smaller product catalog than traditional apparel brands.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "As a student-run brand, Spero had a limited number of products, which made a traditional product-heavy e-commerce layout feel sparse. The website needed to feel visually complete without overwhelming users or making the small collection feel like a limitation.",
        ],
      },
      {
        heading: "Audience",
        body: [
          "College students and young adults interested in faith, fashion, and meaningful apparel.",
        ],
      },
      {
        heading: "Goal",
        body: [
          {
            list: [
              "Make the shopping experience simple and intuitive",
              "Use photoshoots and lifestyle imagery to create a fuller brand experience",
              "Showcase each collection beyond just product listings",
              "Communicate Spero’s mission and identity clearly",
            ],
          },
        ],
      },
      {
        heading: "Design Approach",
        body: [
          "I used photography as a central part of the website, allowing each piece to feel connected to a larger story and visual identity. I also simplified navigation and product discovery so users could easily move between the brand story, designs, and shop.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The final site feels less like a small student shop and more like a cohesive apparel brand—using strong imagery, storytelling, and a straightforward shopping experience to make a limited collection feel intentional rather than sparse.",
        ],
      },
    ],
    showcaseBefore: "Outcome",
    siteLink: { label: "shopspero.org", href: "https://www.shopspero.org/" },
    showcase: [
      { src: "/images/spero/redesign/01-to-hope.jpg", alt: "Spero site — “to hope.” brand statement with the vision behind the name" },
      { src: "/images/spero/redesign/02-mission.jpg", alt: "Spero site — Our Mission section over a photo of a printed T-shirt back" },
      { src: "/images/spero/redesign/03-partners.jpg", alt: "Spero site — Our Partners section, “Giving with intention,” with partner logos" },
      { src: "/images/spero/redesign/04-home-hero.jpg", alt: "Spero site — God Is Love collection hero over a picnic photoshoot" },
      { src: "/images/spero/redesign/05-collections.jpg", alt: "Spero site — crewneck and T-shirt collection lifestyle photos" },
      { src: "/images/spero/redesign/06-product-page.jpg", alt: "Spero site — “God Is Love” T-shirt product page with size and delivery options" },
      { src: "/images/spero/redesign/07-product-details.jpg", alt: "Spero site — product details carousel with verse, composition, fit, and colorway" },
      { src: "/images/spero/redesign/08-faq.jpg", alt: "Spero site — Frequently Asked questions accordion" },
    ],
  },
  {
    slug: "taug-magazine",
    number: "02",
    title: "TAUG Magazine",
    category: "Web Design",
    year: "2025",
    description:
      "A site redesign for a UC Berkeley student publication, focused on content organization and visual consistency so readers can move through articles more easily.",
    image: "/images/taug/redesign/05-issues.jpg",
    imageAlt: "TAUG website redesign — issues page with a grid of magazine covers",
    size: "small",
    pageSubtitle: "Website Redesign",
    // Empty on purpose: the page heading already says "Website Redesign", and
    // the Overview section below carries the intro.
    intro: "",
    showcaseBefore: "Outcome",
    siteLink: { label: "TAUG website", href: "https://toanunknowngod.weebly.com/" },
    showcase: [
      { src: "/images/taug/redesign/01-home-hero.jpg", alt: "TAUG home page — full-bleed landscape hero announcing the 2025–2026 theme, Devotion, with a View Issue button" },
      { src: "/images/taug/redesign/02-home-about.jpg", alt: "TAUG home page — 'Est. 2008' introduction to To An Unknown God beside a photo of printed issues" },
      { src: "/images/taug/redesign/03-join-the-team.jpg", alt: "TAUG home page — Join the Team section with a recruiting message, Join Us button, and team photo" },
      { src: "/images/taug/redesign/04-the-blog.jpg", alt: "TAUG home page — The Blog section inviting students to contribute posts" },
      { src: "/images/taug/redesign/05-issues.jpg", alt: "TAUG issues page — grid of magazine covers to flip through online" },
      { src: "/images/taug/redesign/06-blog-post.jpg", alt: "TAUG blog post page — 'I Thirst' with a black-and-white photograph" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "Redesigned the website for To An Unknown God, UC Berkeley’s student-run Christian journal, to create a more thoughtful, editorial, and cohesive digital presence.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "The previous site lacked a clear visual hierarchy and strong brand identity, making it harder for new visitors to quickly understand the publication and navigate its content.",
        ],
      },
      {
        heading: "Audience",
        body: [
          "UC Berkeley students, readers, writers, artists, and students interested in faith, philosophy, and creative discussion.",
        ],
      },
      {
        heading: "Goal",
        body: [
          "Create a website that:",
          {
            list: [
              "Clearly communicates TAUG’s identity and mission",
              "Feels more like an editorial publication",
              "Makes content and involvement opportunities easier to discover",
            ],
          },
        ],
      },
      {
        heading: "Design Approach",
        body: [
          "I simplified the page structure, strengthened typography and spacing, and created clearer pathways to key content such as the journal, blog, and team opportunities.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The final design presents TAUG as a more established and intentional publication while making the website easier to understand and explore.",
        ],
      },
    ],
  },
  {
    slug: "tea-palette",
    number: "03",
    title: "Tea Palette",
    category: "Case Study",
    year: "2026",
    description:
      "An ongoing case-study series breaking down consumer apps — Beli, Apple Maps, ChatGPT — and pairing each teardown with a redesigned Figma concept.",
    image:
      "https://framerusercontent.com/images/iEXYGyDIfcXiBvIP7jlSxH16p3Y.png",
    imageAlt: "Tea Palette case study series",
    size: "large",
  },
];
