import type { Section, GalleryImage, VideoClip } from "./types";

export type Experience = {
  slug: string;
  place: string;
  role: string;
  period: string;
  summary: string;
  /** Optional live link shown right under the summary paragraph in the hero
   * (e.g. a LinkedIn post about this role). */
  summaryLink?: { label: string; href: string };
  /** 4-5 short bullet points shown on this entry's card in the experience list. */
  highlights?: string[];
  /** Small polaroid that slides up from behind this entry's homepage card on
   * hover. `position` is a CSS object-position for cropping (e.g. "left"). */
  peek?: { src: string; alt: string; position?: string };
  image?: string;
  imageAlt?: string;
  /** Set to false to hide the "case notes" section — used for entries
   * that already have their own video/photo gallery instead. */
  caseNotes?: boolean;
  videos?: VideoClip[];
  sections?: Section[];
  /** Lays sections out in an actual side-by-side grid (left-to-right,
   * top-to-bottom) instead of the default balanced columns — use when
   * sections need to sit beside each other in a specific order rather than
   * wherever the column-balancing algorithm puts them. */
  sectionsGrid?: boolean;
  /** Stacks sections one per row at full page width instead of the default
   * two-up columns/grid — for entries whose photos should read big rather
   * than squeezed into a half-width card. Overrides sectionsGrid. */
  sectionsFullWidth?: boolean;
  /** Headline numbers shown up top in the hero, next to the title/summary,
   * instead of further down the page. */
  heroStats?: { value: string; label: string }[];
  gallery?: GalleryImage[];
  /** Overrides the default "gallery" eyebrow label above the gallery grid. */
  galleryLabel?: string;
  /** Optional live link shown under the gallery (e.g. the site itself). */
  galleryLink?: { label: string; href: string };
};

// Content carried over from the existing b3llacha.com site — employer names,
// roles, and periods are hers, not invented. Each entry now has its own page
// (app/experience/[slug]/page.tsx) so she can add her own write-up and
// photos of the work.
export const experience: Experience[] = [
  {
    slug: "hyundai-corporation",
    peek: { src: "/images/hyundai-csquare/lemon-deck/slide-01.jpg", alt: "TONYMOLY I\u2019m Lemon creator campaign deck", position: "18% center" },
    place: "Hyundai Corporation",
    role: "Business Development & Marketing Intern",
    period: "Feb 2026 — May 2026",
    highlights: [
      "Market research & competitive analysis",
      "Buyer outreach to 300+ distributors and retailers",
      "Market-entry strategy across 3+ countries",
      "Localized influencer campaigns in Peru & Mexico",
      "Brand website contributions",
    ],
    summary:
      "Global expansion work for Korean beauty and wellness brands — market research, buyer outreach, and localized launch strategy across Europe and Latin America — that built a pipeline of 300+ buyers and 10 partnerships.",
    heroStats: [
      { value: "300+", label: "Buyers" },
      { value: "10", label: "Partnerships" },
      { value: "3+", label: "Markets" },
      { value: "2", label: "Creator Campaigns" },
    ],
    sections: [
      {
        heading: "Expanding into Global Markets",
        body: [
          "I researched and pitched Hyundai beauty brands to 300+ international distributors and retailers across Europe and Latin America. By identifying high-potential buyers and tailoring outreach to each market, I helped generate qualified conversations and advance 10 prospective partnerships.",
          "Rather than approaching expansion with a one-size-fits-all strategy, I analyzed each market's competitive landscape, pricing, retail structure, and consumer behavior to understand where each brand could fit.",
        ],
        visual: "regions-map",
      },
      {
        heading: "Building Market-Entry Strategies",
        body: [
          "For client brands entering 3+ countries, I conducted competitive and market research to recommend:",
          {
            list: [
              "Product positioning and pricing",
              "Potential retail and distribution channels",
              "Relevant competitors and category trends",
              "Market-specific messaging and opportunities",
            ],
          },
          "This helped translate Korean brands' existing strengths into strategies that were more relevant to local retailers and consumers.",
        ],
        visual: "market-matrix",
      },
      {
        heading: "Localizing Influencer Marketing",
        body: [
          "For launches in Peru and Mexico, I sourced TikTok and Instagram creators whose audiences aligned with each brand's target consumer.",
          "I managed the process from creator discovery and outreach to rate negotiation and campaign briefing, helping build localized influencer campaigns across 2 markets.",
          "The goal was not simply to find creators with large followings, but to identify partners whose content, audience, and pricing made sense for each market and launch objective.",
        ],
        slides: [
          { src: "/images/hyundai-csquare/lemon-deck/slide-01.jpg", alt: "TONYMOLY I'm Lemon creator campaign pitch deck — cover" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-02.jpg", alt: "Product portfolio — I'm Lemon line" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-03.jpg", alt: "Product role — I'm Lemon Foam Cleanser" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-04.jpg", alt: "Product role — I'm Lemon Mask Sheet" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-05.jpg", alt: "Product role — I'm Lemon Eye Patch" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-06.jpg", alt: "Concept 1 — Morning Glow Routine" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-07.jpg", alt: "Concept 2 — Night Reset Routine" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-08.jpg", alt: "Concept 3 — Squeeze the Glow" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-09.jpg", alt: "Creator brief checklist" },
          { src: "/images/hyundai-csquare/lemon-deck/slide-10.jpg", alt: "I'm Lemon Creator Activation — closing slide" },
        ],
        slidesMaxWidthClassName: "max-w-sm",
      },
      {
        heading: "Hyundai C Square Website",
        body: [
          "Alongside the market and campaign work, I also contributed to Hyundai C Square's brand website (hyundaicsquare.com) — the site that introduces the Korean health & beauty brands the team distributes globally, and walks partners through the company's approach to global distribution, brand management, and marketing.",
        ],
        images: [
          {
            src: "/images/hyundai-csquare/csquare-hero.jpg",
            alt: "Hyundai C Square website — Globalization for Beauty brand",
          },
          {
            src: "/images/hyundai-csquare/csquare-brands.jpg",
            alt: "Hyundai C Square website — brand portfolio grid",
          },
          {
            src: "/images/hyundai-csquare/csquare-kahi.jpg",
            alt: "Hyundai C Square website — KAHI brand page",
          },
        ],
        link: { label: "hyundaicsquare.com", href: "https://www.hyundaicsquare.com/en/" },
      },
      {
        heading: "Impact",
        body: [
          "Through this experience, I learned how global expansion depends on more than translating a brand into a new language. It requires understanding how people shop, which channels they trust, how competitors position themselves, and what makes a product relevant within a new cultural and retail environment.",
        ],
      },
    ],
  },
  {
    slug: "jungsaemmool-beauty",
    peek: { src: "/images/jungsaemmool/filming/filming-01.jpg", alt: "Behind the scenes at a JUNGSAEMMOOL content shoot" },
    place: "JUNGSAEMMOOL Beauty",
    role: "Global Marketing Intern",
    period: "Aug 2025 — Nov 2025",
    highlights: [
      "Global campaigns & brand activations",
      "English localization & international messaging",
      "Agency coordination & campaign execution",
      "Content planning, filming & production",
      "Instagram & TikTok content",
    ],
    summary:
      "Global campaign work for a Korean beauty brand — social content, localization, and launch support across Amazon Prime Day, Costco, KCON, and U.S. pop-ups — that helped grow the brand's global following by 16,000+ in three months.",
    summaryLink: { label: "LinkedIn Post", href: "https://lnkd.in/p/gaayTm4y" },
    caseNotes: false,
    heroStats: [
      { value: "+16K", label: "Follower Growth" },
      { value: "5+", label: "Retail & Event Launches" },
      { value: "3", label: "Month Campaign Window" },
    ],
    sections: [
      {
        heading: "Global Campaigns & Brand Activations",
        body: [
          "I supported launch and activation work across major retail moments and events, helping bring campaigns to life both online and in person:",
          {
            list: [
              "Amazon Prime Day",
              "Costco Sale Launch",
              "KCON",
              "LA Pop-Up",
              "NY Pop-Up",
              "Flagship Launch — 101 Seongsu store opening",
            ],
          },
        ],
        images: [
          { src: "/videos/jungsaemmool/flagship-launch.mp4", alt: "JUNGSAEMMOOL 101 Seongsu flagship launch", type: "video" },
          { src: "/images/jungsaemmool/flagship/flagship-01.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — storefront drip-art installation" },
          { src: "/images/jungsaemmool/flagship/flagship-02.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — \"Inspired by Korea's Colors\" product wall" },
          { src: "/images/jungsaemmool/flagship/flagship-03.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — I Color Finder interactive kiosk" },
          { src: "/images/jungsaemmool/flagship/flagship-04.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — lounge area with retail pods" },
          { src: "/images/jungsaemmool/flagship/flagship-05.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — pre-opening staff" },
          { src: "/images/jungsaemmool/flagship/flagship-06.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — \"Beyond Gravity\" campaign visual" },
          { src: "/images/jungsaemmool/flagship/flagship-07.jpg", alt: "JUNGSAEMMOOL 101 Seongsu — opening-day catering spread" },
        ],
        imagesCompact: true,
      },
      {
        heading: "Global Brand Strategy & Localization",
        body: [
          {
            list: [
              "English localization",
              "International messaging",
              "Agency coordination",
              "Campaign execution",
            ],
          },
        ],
      },
      {
        heading: "Impact",
        body: [
          "This experience showed me how a global campaign actually comes together — from major retail moments and a flagship store opening, to the localized content and messaging that make a brand feel native in a new market, to the community-building that keeps people engaged after the campaign ends.",
        ],
      },
      {
        heading: "Influencer, Social & Content Marketing",
        body: [],
        items: [
          {
            label: "Creator partnerships",
            slides: [
              { src: "/images/jungsaemmool/costco-deck/slide-01.jpg", alt: "Costco Bundle Set — Artist Cushion Blush content guideline — cover" },
              { src: "/images/jungsaemmool/costco-deck/slide-02.jpg", alt: "Costco Bundle Set content guideline — page 2" },
              { src: "/images/jungsaemmool/costco-deck/slide-03.jpg", alt: "Costco Bundle Set content guideline — page 3" },
              { src: "/images/jungsaemmool/costco-deck/slide-04.jpg", alt: "Costco Bundle Set content guideline — page 4" },
              { src: "/images/jungsaemmool/costco-deck/slide-05.jpg", alt: "Costco Bundle Set content guideline — page 5" },
              { src: "/images/jungsaemmool/costco-deck/slide-06.jpg", alt: "Costco Bundle Set content guideline — page 6" },
              { src: "/images/jungsaemmool/costco-deck/slide-07.jpg", alt: "Costco Bundle Set content guideline — page 7" },
              { src: "/images/jungsaemmool/costco-deck/slide-08.jpg", alt: "Costco Bundle Set content guideline — closing page" },
            ],
            slidesCompact: false,
            slidesMaxWidthClassName: "max-w-lg",
          },
          {
            label: "Content planning",
            title: "US Social Content Plan",
            meta: "TikTok & Instagram · Competitor research · Content strategy",
            body: [
              "JUNGSAEMMOOL is a well-known Korean makeup brand that is still new to most US shoppers. I helped plan a month of TikTok and Instagram content to introduce it to an American audience.",
              "I started with competitor research. I studied how US and K-beauty brands like Rhode, Glossier, Tower 28 and Amuse were winning on social, looking at their formats, captions and comment sections. Four patterns stood out:",
              {
                list: [
                  "Shoppers kept asking where to buy. Those questions filled the comments.",
                  "Everyday content got saved more than glam. Routines and \"what's in my bag\" videos performed well.",
                  "US audiences responded to playful, kitschy styling.",
                  "Showing a full shade range built trust.",
                ],
              },
              "I turned each pattern into a concept that paired one product with a proven format. Our team produced 15+ of them. The videos under Instagram/TikTok content answered that comment directly and sent shoppers to Amazon and TikTok Shop.",
            ],
          },
          {
            label: "Content filming/production",
            images: [
              { src: "/images/jungsaemmool/filming/filming-01.jpg", alt: "JUNGSAEMMOOL content shoot — studio lighting setup" },
              { src: "/images/jungsaemmool/filming/filming-02.jpg", alt: "JUNGSAEMMOOL content shoot — makeup station" },
              { src: "/images/jungsaemmool/filming/filming-03.jpg", alt: "JUNGSAEMMOOL content shoot — product palette flat lay" },
              { src: "/images/jungsaemmool/filming/filming-04.jpg", alt: "JUNGSAEMMOOL product shades flat lay" },
            ],
            imagesCompact: true,
          },
          {
            label: "Instagram & TikTok Contents",
            videos: [
              { src: "/videos/jungsaemmool/prime-day-glow.mp4", caption: "Your Glow Starts NOW — Amazon Prime Day" },
              { src: "/videos/jungsaemmool/prime-day-last-chance.mp4", caption: "Last Day of Prime Day" },
              { src: "/videos/jungsaemmool/cushion-foundation-30-shades.mp4", caption: "Cushion Foundation, 30 Shades" },
              { src: "/videos/jungsaemmool/shade-twin-popup.mp4", caption: "Shade Twin Pop-Up, Melrose Flagship" },
              { src: "/videos/jungsaemmool/campaign-clip-1.mp4", caption: "Campaign content" },
              { src: "/videos/jungsaemmool/campaign-clip-2.mp4", caption: "Campaign content" },
            ],
            note: "485K+ views across Instagram Reels and TikTok",
          },
          { label: "+16K follower growth" },
        ],
      },
    ],
  },
  {
    slug: "spero-apparel",
    peek: { src: "/images/spero/social/post-06.jpg", alt: "Spero team picnic photoshoot" },
    place: "Spero Apparel",
    role: "UI/UX Designer & Social Media Manager",
    period: "Jan 2025 — Present",
    summary: "UI/UX design and social media management for Spero Apparel.",
    highlights: [
      "Website redesign & UI/UX design",
      "Product and collection page design",
      "Social media management",
      "Recruitment & event content",
    ],
    sectionsFullWidth: true,
    sections: [
      {
        heading: "Web Design",
        body: [
          "Designed the Spero Apparel website — a faith-rooted apparel brand where every piece ties back to a verse and a purpose.",
        ],
        imagesLarge: true,
        images: [
          { src: "/images/spero/web/01-home-hero.jpg", alt: "Spero Apparel website — home page, \"to hope.\"" },
          { src: "/images/spero/web/02-collection-tshirt.jpg", alt: "Spero Apparel website — design collection, T-shirts and hoodies" },
          { src: "/images/spero/web/03-product-hoodie.jpg", alt: "Spero Apparel website — \"Surpassing Worth\" hoodie product page" },
          { src: "/images/spero/web/04-product-surpassing-worth.jpg", alt: "Spero Apparel website — product detail, verse and composition" },
          { src: "/images/spero/web/05-product-love.jpg", alt: "Spero Apparel website — \"God Is Love\" product page" },
          { src: "/images/spero/web/06-partners.jpg", alt: "Spero Apparel website — \"Giving with intention\" partners section" },
          { src: "/images/spero/web/07-faq.jpg", alt: "Spero Apparel website — frequently asked questions" },
        ],
        link: { label: "Spero Apparel Website", href: "https://www.shopspero.org/" },
        moreLink: { label: "more in projects", href: "/work/spero-apparel" },
      },
      {
        heading: "Social Media",
        body: [
          "Managed the Spero Apparel Instagram — event announcements, recruitment posts, and product content for each drop.",
        ],
        instagramGrid: true,
        instagramHandle: "shopspero",
        images: [
          { src: "/images/spero/social/post-01.jpg", alt: "Spero Apparel Instagram — \"Apps closed\" Fall 2026 recruitment post" },
          { src: "/images/spero/social/post-02.jpg", alt: "Spero Apparel Instagram — \"Find us at Jesus in Berkeley\" event post" },
          { src: "/images/spero/social/post-03.jpg", alt: "Spero Apparel Instagram — \"We are recruiting!\" post" },
          { src: "/images/spero/social/post-04.jpg", alt: "Spero Apparel Instagram — team picnic content" },
          { src: "/images/spero/social/post-05.jpg", alt: "Spero Apparel Instagram — \"God Is Love\" sweatshirt flat lay" },
          { src: "/images/spero/social/post-06.jpg", alt: "Spero Apparel Instagram — team picnic photo" },
          { src: "/images/spero/social/post-07.jpg", alt: "Spero Apparel Instagram — \"God Is Love\" verse graphic" },
          { src: "/images/spero/social/post-08.jpg", alt: "Spero Apparel Instagram — \"God Is Love\" tee front and back mockup" },
          { src: "/images/spero/social/post-09.jpg", alt: "Spero Apparel Instagram — \"Perfect love casts out fear\" verse graphic" },
        ],
        link: { label: "Spero Apparel Instagram", href: "https://www.instagram.com/shopspero/" },
      },
    ],
  },
  {
    slug: "taug-magazine",
    peek: { src: "/images/taug/covers/cover-memory.jpg", alt: "TAUG Magazine Memory issue cover" },
    place: "TAUG Magazine",
    role: "Magazine Designer, UI/UX Designer & Social Media Manager",
    period: "Jan 2025 — Present",
    summary: "UI/UX design for TAUG Magazine, a UC Berkeley student publication.",
    highlights: [
      "Magazine cover & layout design",
      "Website design",
      "Social media content",
      "UI/UX design",
    ],
    sectionsFullWidth: true,
    sections: [
      {
        heading: "Web Design",
        body: [
          "Designed and built the pages for TAUG Magazine's website, where readers can browse and read each issue online.",
        ],
        imagesLarge: true,
        images: [
          { src: "/images/taug/web/web-home.jpg", alt: "TAUG Magazine website — home page" },
          { src: "/images/taug/web/web-about.jpg", alt: "TAUG Magazine website — about page" },
          { src: "/images/taug/web/web-issues.jpg", alt: "TAUG Magazine website — issues page" },
        ],
        link: { label: "TAUG Website", href: "https://toanunknowngod.weebly.com/" },
        moreLink: { label: "more in projects", href: "/work/taug-magazine" },
      },
      {
        heading: "Magazine Design",
        body: [
          "Designed covers and layouts for TAUG Magazine, a UC Berkeley student publication, including the Memory and Treasure issues.",
        ],
        imagesCompact: true,
        imagesLarge: true,
        images: [
          {
            src: "/images/taug/covers/cover-memory.jpg",
            alt: "TAUG Magazine — Memory issue cover",
            caption: "Memory: Volume 18 | Issue 1 | Fall 2024",
            href: "https://drive.google.com/file/d/1v42-qkRwaUc0wN3lit3OjP-nZN2oBije/view?pli=1",
          },
          {
            src: "/images/taug/covers/cover-treasure.jpg",
            alt: "TAUG Magazine — Treasure issue cover",
            caption: "Volume 17 | Issue 1 | Spring 2024",
            href: "https://drive.google.com/file/d/1E2XISCJzNFQdoMe8CmbWMvwFjWanS8eF/view",
          },
        ],
      },
      {
        heading: "Social Media",
        body: [
          "Designed social content for TAUG Magazine, helping promote new issues and build the publication's audience.",
        ],
        instagramGrid: true,
        instagramHandle: "taug_journal",
        images: [
          { src: "/images/taug/social/post-01.jpg", alt: "TAUG Instagram — \"open me!\" envelope post teasing this year's theme" },
          { src: "/images/taug/social/post-02.jpg", alt: "TAUG Instagram — First Meeting announcement, August 30, 2026" },
          { src: "/images/taug/social/post-03.jpg", alt: "TAUG Instagram — \"Calling all writers, editors, designers\" recruiting post" },
          { src: "/images/taug/social/post-04.jpg", alt: "TAUG Instagram — Cafe Night: Devotion film-strip photo recap" },
          { src: "/images/taug/social/post-05.jpg", alt: "TAUG Instagram — Philippians 3:12 verse over a landscape painting" },
          { src: "/images/taug/social/post-06.jpg", alt: "TAUG Instagram — Cafe Night event details flyer" },
          { src: "/images/taug/social/post-07.jpg", alt: "TAUG Instagram — \"Meet the team!\" group photos" },
          { src: "/images/taug/social/post-08.jpg", alt: "TAUG Instagram — Cafe Night save-the-date flyer" },
          { src: "/images/taug/social/post-09.jpg", alt: "TAUG Instagram — \"We're hiring\" Spring 2026 applications post" },
        ],
        link: { label: "TAUG Instagram", href: "https://www.instagram.com/taug_journal/" },
      },
    ],
  },
];
