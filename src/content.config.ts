import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content collections.
 *
 * To publish content you only ever create a Markdown file in the matching
 * folder — no other configuration is required.
 *
 *   - Blog post:  src/content/blog/my-post.md
 *   - Now page:   src/content/now/now.md
 *   - Project:    src/content/projects/my-project.md
 */

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Publication date — controls ordering and the archive. */
    pubDate: z.coerce.date(),
    /** Optional last-updated date. */
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Set to true to hide a post from listings (still builds the page). */
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Technologies / tags shown as small pills. */
    tech: z.array(z.string()).default([]),
    /** Link to the source repository. */
    github: z.string().url().optional(),
    /** Optional live demo URL. */
    demo: z.string().url().optional(),
    /** Optional screenshot (path under /public or remote URL). */
    image: z.string().optional(),
    /** Lower numbers sort first; ties fall back to title. */
    order: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Single “now” page — edit src/content/now/now.md when your focus changes. */
const now = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/now" }),
  schema: z.object({
    /** Shown as “Last updated” on the Now page. Bump this when you edit the file. */
    updatedDate: z.coerce.date(),
  }),
});

export const collections = { blog, now, projects };
