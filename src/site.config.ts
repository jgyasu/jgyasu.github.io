/**
 * Central site configuration.
 *
 * This is the ONE place to edit your personal details, navigation, and social
 * links. Everything across the site reads from here, so you never have to
 * update the same value in two places.
 */

export interface SocialLink {
  label: string;
  /** Full URL (or `mailto:` link for email). */
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  /** Your name, shown prominently on the home page and in metadata. */
  name: "Jigyasu",

  /** Short tagline used in the site title and meta description fallback. */
  title: "Jigyasu",
  tagline: "Engineer, researcher, and open-sourcerer.",

  /** Default meta description used when a page does not provide its own. */
  description:
    "Personal website of Jigyasu - writing about open source, AI, machine learning, time series, mathematics, and building useful software.",

  /**
   * Public URL of the deployed site. Keep this in sync with `site` in
   * astro.config.mjs. Used for canonical URLs, RSS, sitemap, and Open Graph.
   */
  url: "https://jgyasu.github.io",

  /** Author info for feeds and metadata. */
  author: {
    name: "Jigyasu",
    email: "jigyasu@outlook.in",
  },

  /** Default Open Graph / Twitter image (relative to /public). */
  ogImage: "/og-default.svg",

  /** Twitter / X handle (without the @), used for Twitter cards. */
  twitterHandle: "yourhandle",

  /** Site language, used on <html lang="..."> and feeds. */
  lang: "en",

  /** Default theme when a visitor has no saved preference. */
  defaultTheme: "dark" as "dark" | "light",
} as const;

/** Primary navigation, rendered in the header. */
export const navLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Now", href: "/now" },
  { label: "Projects", href: "/projects" },
];

/** Social links, rendered in the footer and on the home page. */
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jgyasu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jgyasu" },
  { label: "Email", href: "mailto:jigyasu@outlook.in" },
];

/** Short interest keywords shown on the home page. */
export const interests: string[] = [
  "Machine Learning",
  "DevOps",
  "Open Source",
];
