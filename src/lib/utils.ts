import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type Project = CollectionEntry<"projects">;

const isProd = import.meta.env.PROD;

/** Hide drafts in production builds but keep them visible during `astro dev`. */
function published<T extends { data: { draft?: boolean } }>(entries: T[]): T[] {
  return isProd ? entries.filter((e) => e.data.draft !== true) : entries;
}

/** Newest-first comparison by `pubDate`. */
function byDateDesc(a: { data: { pubDate: Date } }, b: { data: { pubDate: Date } }) {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/** All published blog posts, newest first. */
export async function getPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog");
  return published(posts).sort(byDateDesc);
}

/** All published projects, ordered by `order` then `title`. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection("projects");
  return published(projects).sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

/** Map of tag -> number of posts using it, for tag listings. */
export async function getTagCounts(): Promise<Map<string, number>> {
  const posts = await getPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return counts;
}

/** Normalise a tag into a URL-safe slug. */
export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

/** Format a date like "Jun 29, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** ISO date string (YYYY-MM-DD) for <time datetime="..."> attributes. */
export function isoDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
