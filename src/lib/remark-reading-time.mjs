import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

/**
 * Remark plugin that computes the estimated reading time of a Markdown file
 * and stores it on `frontmatter.readingTime` (e.g. "4 min read").
 *
 * Because it runs at build time it adds zero client-side JavaScript.
 */
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const reading = getReadingTime(textOnPage);
    data.astro.frontmatter.readingTime = reading.text;
    data.astro.frontmatter.readingMinutes = Math.max(1, Math.round(reading.minutes));
    data.astro.frontmatter.wordCount = reading.words;
  };
}
