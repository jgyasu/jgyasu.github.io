import type { APIContext } from "astro";
import { site } from "@/site.config";

/** Generates /robots.txt, pointing crawlers at the sitemap. */
export function GET(context: APIContext) {
  const base = (context.site ?? new URL(site.url)).toString().replace(/\/$/, "");
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
