/**
 * Join a root-relative path with the configured deployment base path so links
 * work whether the site is hosted at the domain root or under /repo-name/.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
