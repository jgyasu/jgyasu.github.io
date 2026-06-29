# Personal Website

A minimalist, typography-first personal website built with [Astro](https://astro.build).
Dark mode by default, zero client-side JavaScript on most pages, and content
written entirely in Markdown.

- **Fast** — static HTML, no framework runtime, near-zero JS.
- **Accessible** — semantic markup, skip links, visible focus, reduced-motion support.
- **SEO-friendly** — canonical URLs, Open Graph, Twitter cards, sitemap, RSS + Atom.
- **Easy to maintain** — add a Markdown file, done. One config file for everything personal.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
npm run check    # type-check Astro + TypeScript
```

Requires Node.js 18.20+ or 20.3+ (Node 20 recommended).

---

## First things to edit

Almost everything personal lives in **one file**:

```
src/site.config.ts
```

Update your name, tagline, description, social links, navigation, and interests
there. Then:

1. Set `site` in `astro.config.mjs` to your final URL (see comments in that file).
2. Replace `public/favicon.svg` and `public/og-default.svg` with your own.
3. Edit `src/pages/about.astro` with your story.

---

## Project structure

```
.
├── astro.config.mjs          # Astro config: site URL, Markdown, integrations
├── src/
│   ├── site.config.ts        # ← central config: name, socials, nav, interests
│   ├── content.config.ts     # content collection schemas (blog/thoughts/projects)
│   ├── components/           # reusable UI components
│   │   ├── BaseHead.astro    # <head>: SEO, Open Graph, Twitter, feeds
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Search.astro      # client-side search over /search.json
│   │   ├── TableOfContents.astro
│   │   ├── PostCard.astro / ThoughtItem.astro / ProjectCard.astro
│   │   ├── PostNav.astro     # prev/next post navigation
│   │   └── FormattedDate.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro  # shell: head, theme script, header/footer
│   │   ├── PageLayout.astro  # simple content pages
│   │   └── PostLayout.astro  # blog posts (TOC, meta, nav)
│   ├── lib/
│   │   ├── utils.ts          # content helpers (sorting, tags, dates)
│   │   ├── paths.ts          # base-path-aware URL helper
│   │   └── remark-reading-time.mjs  # build-time reading time
│   ├── content/
│   │   ├── blog/             # ← blog posts (Markdown)
│   │   ├── thoughts/         # ← short notes (Markdown)
│   │   └── projects/         # ← project entries (Markdown)
│   ├── pages/                # routes (file-based routing)
│   │   ├── index.astro       # home
│   │   ├── about.astro
│   │   ├── blog/             # blog index, posts, tags
│   │   ├── thoughts.astro
│   │   ├── projects.astro
│   │   ├── archive.astro
│   │   ├── search.json.ts    # search index
│   │   ├── rss.xml.ts / atom.xml.ts / robots.txt.ts
│   │   └── 404.astro
│   └── styles/global.css     # design tokens + global styles
├── public/                   # static assets served as-is
└── .github/workflows/deploy.yml  # GitHub Pages deployment
```

---

## Adding content

You never need to touch configuration to publish — just create a Markdown file
in the right folder.

### Add a blog post

Create `src/content/blog/my-post.md`:

```markdown
---
title: "My post title"
description: "One-sentence summary used in listings and meta tags."
pubDate: 2026-06-29
# updatedDate: 2026-07-01   # optional
tags: ["machine-learning", "notes"]
# draft: true               # optional — hidden in production, visible in dev
---

Write your post in **Markdown**. Headings (`##`, `###`) automatically build the
table of contents, and code blocks get syntax highlighting.
```

Reading time, table of contents, tags, prev/next navigation, RSS/Atom entries,
and the archive update automatically. The URL is derived from the filename
(`my-post.md` → `/blog/my-post/`).

### Add a thought

Create `src/content/thoughts/2026-06-29-some-idea.md`:

```markdown
---
pubDate: 2026-06-29
# title: "Optional title"
tags: ["software"]
---

A short note. Thoughts are sorted newest-first automatically and shown in full
on the Thoughts page.
```

### Add a project

Create `src/content/projects/my-project.md`:

```markdown
---
title: "My Project"
description: "What it does, in one or two sentences."
tech: ["Python", "Astro"]
github: "https://github.com/you/my-project"
demo: "https://example.com"        # optional
image: "/projects/my-project.png"  # optional, place file in public/projects/
order: 1                            # lower numbers appear first
featured: true                     # optional
---

Optional longer description shown on the projects page.
```

For screenshots, drop the image in `public/projects/` and reference it with a
root-relative path like `/projects/my-project.png`.

---

## Theming

The colour system is driven by CSS custom properties in
`src/styles/global.css`. Dark is the default; visitors can toggle light mode and
the choice is saved to `localStorage`. To change the default, set `defaultTheme`
in `src/site.config.ts`.

---

## Deployment (GitHub Pages)

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).
Every push to `main` builds and publishes the site.

This template is configured for a **root deployment**, which is the recommended
setup for a personal site and keeps URLs clean (`yourname.dev/blog` rather than
`username.github.io/repo/blog`).

**One-time setup:**

1. Create a repository named `username.github.io` (a user/org site) and push
   this code to it. _Or_ use any repo plus a custom domain (see below).
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Set `site` in `astro.config.mjs` to your final URL
   (`https://username.github.io` or your custom domain).
4. Push to `main`. The **Actions** tab shows the build and the live URL.

**Custom domain:** add a `CNAME` file to `public/` containing your domain
(e.g. `example.com`) and set `site` to `https://example.com`.

> **Project pages** (served under `username.github.io/repo-name`) are not
> recommended here, because the clean root-relative links throughout the site
> assume a root deployment. If you need one, set `base: "/repo-name"` in
> `astro.config.mjs` and wrap internal links with `withBase()` from
> `src/lib/paths.ts`.

---

## Performance & SEO checklist

This site is built to score close to 100 on Lighthouse:

- Static HTML with no render-blocking framework JS.
- System font stack (no web-font network requests).
- Dual-theme syntax highlighting via build-time Shiki.
- Responsive, lazy-loaded images with explicit dimensions.
- `sitemap-index.xml`, `robots.txt`, RSS (`/rss.xml`) and Atom (`/atom.xml`).
- Per-page Open Graph and Twitter card metadata with canonical URLs.

---

## License

Add your preferred license here (e.g. MIT for code, CC-BY for content).
