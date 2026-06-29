import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "@/site.config";
import { getPosts } from "@/lib/utils";

/** RSS 2.0 feed of all blog posts at /rss.xml. */
export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${site.title} — Blog`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${site.lang}</language>`,
  });
}
