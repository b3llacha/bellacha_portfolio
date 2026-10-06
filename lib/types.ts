// Shared content types used by both projects and experiences, so each entry
// can carry a written case-study (sections) and photos (gallery) that Bella
// can fill in herself.

/** A section's body is a sequence of blocks — plain paragraphs, or a bullet
 * list — rendered in order, so a case-study write-up can mix prose with a
 * list of takeaways wherever it needs to. */
export type SectionBlock = string | { list: string[] };

export type Section = {
  heading: string;
  body: SectionBlock[];
  /** Photos shown inline within this section, right under its text. */
  images?: GalleryImage[];
  /** Shrinks the photo carousel above into small portrait thumbnails (same
   * swipeable strip style as a video carousel) instead of the wider
   * landscape cards. */
  imagesCompact?: boolean;
  /** Widens this section's photo carousel cards — for a full-width section
   * (see sectionsFullWidth on Experience) where the photos should read big. */
  imagesLarge?: boolean;
  /** Renders this section's images as a square 3-column grid, like an actual
   * Instagram profile feed, instead of a swipeable carousel. Pair with
   * instagramHandle to show a small "@handle" header above the grid. */
  instagramGrid?: boolean;
  /** The "@handle" shown above the grid when instagramGrid is set. */
  instagramHandle?: string;
  /** A click-through slide deck shown inline within this section. */
  slides?: GalleryImage[];
  /** Shrinks the slide deck above and switches it to a taller frame — for a
   * small photo carousel (mixed portrait shots) rather than a landscape
   * pitch-deck viewer. */
  slidesCompact?: boolean;
  /** Overrides the slide deck's wrapper width (default max-w-xs, or
   * max-w-[200px] when slidesCompact) — e.g. "max-w-sm" for a bigger deck. */
  slidesMaxWidthClassName?: string;
  /** Optional live link shown under this section's images (e.g. the site itself). */
  link?: { label: string; href: string };
  /** Optional link to a page on this site (e.g. the matching project case
   * study), shown next to `link`. */
  moreLink?: { label: string; href: string };
  /** Headline numbers shown as a row of stat cards under this section's text. */
  stats?: { value: string; label: string }[];
  /** Names a custom illustration to render inline within this section. */
  visual?: "regions-map" | "market-matrix";
  /** An alternative to `body`'s bullet list — a labeled list of bullets where
   * individual bullets can carry their own small media carousel right
   * beneath them (e.g. one bullet with photos, another with video clips). */
  items?: SectionItem[];
};

export type SectionItem = {
  label: string;
  /** An optional sub-title for a fuller write-up nested under this bullet
   * (e.g. a named mini case-study), shown above `meta` and `body`. */
  title?: string;
  /** A small tag line shown under `title` (e.g. "TikTok & Instagram ·
   * Competitor research · Content strategy"). */
  meta?: string;
  /** Paragraphs/bullet list for this bullet's fuller write-up — same block
   * shape as a Section's body, rendered smaller and indented under the
   * bullet. */
  body?: SectionBlock[];
  images?: GalleryImage[];
  imagesCompact?: boolean;
  slides?: GalleryImage[];
  /** Shrinks this bullet's slide deck into a small portrait frame (default)
   * — set to false for a wider, landscape pitch-deck-style viewer. */
  slidesCompact?: boolean;
  /** Overrides this bullet's slide deck wrapper width (default
   * max-w-[200px], or max-w-xs when slidesCompact is false). */
  slidesMaxWidthClassName?: string;
  videos?: VideoClip[];
  /** A short line shown under this bullet's media (e.g. a results/stat note
   * under a photo or video carousel). */
  note?: string;
  /** Optional live link shown under this bullet's media (e.g. the site itself). */
  link?: { label: string; href: string };
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Set to "video" to render this carousel slot as an autoplaying video
   * clip (with sound, no controls) instead of a photo — src then points at
   * a video file. */
  type?: "image" | "video";
  /** Makes this individual photo/video clickable, linking out to its own
   * URL (e.g. each magazine cover linking to its own read-online page). */
  href?: string;
};

export type VideoClip = {
  src: string;
  caption: string;
};
