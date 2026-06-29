import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// ---------------------------------------------------------------------------
// Deployment configuration
// ---------------------------------------------------------------------------
// `site` is your final public URL. This template is configured for a ROOT
// deployment, which is the recommended setup for a personal website:
//
//   - User/organisation site: repo named `username.github.io`
//       site: "https://username.github.io"   (base stays "/")
//
//   - Custom domain (add a CNAME file in /public):
//       site: "https://your-domain.com"      (base stays "/")
//
// Both serve the site at the domain root, so the clean root-relative links used
// throughout (e.g. /blog, /about) work as-is.
//
// Project pages served under a sub-path (username.github.io/repo-name) are NOT
// recommended here: they require a `base` AND base-prefixing every internal
// link. If you must, set `base: "/repo-name"` and wrap internal hrefs with the
// `withBase()` helper in src/lib/paths.ts.
// ---------------------------------------------------------------------------
export default defineConfig({
  site: "https://jgyasu.github.io",
  // base: "/repo-name", // only for a sub-path project page (see note above)

  integrations: [sitemap()],

  // Inline CSS to remove a render-blocking network request (helps FCP/LCP).
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },

  compressHTML: true,

  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["heading-anchor"], ariaHidden: true, tabIndex: -1 },
        },
      ],
    ],
    shikiConfig: {
      // Dual themes so code blocks adapt to light/dark automatically.
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
});
