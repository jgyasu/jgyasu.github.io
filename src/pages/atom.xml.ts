import type { APIContext } from "astro";
import { site } from "@/site.config";
import { getPosts } from "@/lib/utils";

/** Atom 1.0 feed of all blog posts at /atom.xml. */
export async function GET(context: APIContext) {
  const posts = await getPosts();
  const base = (context.site ?? new URL(site.url)).toString().replace(/\/$/, "");
  const updated = posts[0]?.data.pubDate.toISOString() ?? new Date().toISOString();

  const entries = posts
    .map((post) => {
      const url = `${base}/blog/${post.id}/`;
      return `  <entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${url}" />
    <id>${url}</id>
    <updated>${(post.data.updatedDate ?? post.data.pubDate).toISOString()}</updated>
    <published>${post.data.pubDate.toISOString()}</published>
    <summary>${escapeXml(post.data.description)}</summary>
${post.data.tags.map((t) => `    <category term="${escapeXml(t)}" />`).join("\n")}
  </entry>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${site.lang}">
  <title>${escapeXml(site.title)} — Blog</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <link href="${base}/atom.xml" rel="self" />
  <link href="${base}/" />
  <id>${base}/</id>
  <updated>${updated}</updated>
  <author>
    <name>${escapeXml(site.author.name)}</name>
    <email>${escapeXml(site.author.email)}</email>
  </author>
${entries}
</feed>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
