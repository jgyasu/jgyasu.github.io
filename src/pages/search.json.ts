import type { APIRoute } from "astro";
import { getPosts } from "@/lib/utils";

/**
 * Builds a small JSON search index at /search.json containing blog posts.
 * The client-side <Search> component fetches this once and filters in-memory.
 */
export const GET: APIRoute = async () => {
  const posts = await getPosts();

  const index = posts.map((p) => ({
    type: "post" as const,
    title: p.data.title,
    description: p.data.description,
    tags: p.data.tags,
    url: `/blog/${p.id}`,
    date: p.data.pubDate.toISOString(),
    body: stripMarkdown(p.body ?? ""),
  }));

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};

/** Crude Markdown -> text so the search body stays small and clean. */
function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 2000);
}
