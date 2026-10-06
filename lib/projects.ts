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
    image:
      "https://framerusercontent.com/images/DL8wj3XvVsvjEu504R9gQRbwYc.png",
    imageAlt: "Spero Apparel website redesign",
    size: "large",
  },
  {
    slug: "taug-magazine",
    number: "02",
    title: "TAUG Magazine",
    category: "Web Design",
    year: "2025",
    description:
      "A site redesign for a UC Berkeley student publication, focused on content organization and visual consistency so readers can move through articles more easily.",
    image:
      "https://framerusercontent.com/images/aJbUzjJOyv1p9xQ9cwBtxzMc7o.png",
    imageAlt: "TAUG Magazine website redesign",
    size: "small",
    intro: "Website redesign",
    sections: [
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
