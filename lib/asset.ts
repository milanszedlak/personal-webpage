/** Prefix a file in /public with the configured base path (plain <a>/<img> tags don't get it automatically). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
