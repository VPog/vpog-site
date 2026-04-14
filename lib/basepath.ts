// Next.js <Image> with unoptimized:true does NOT prepend basePath to src.
// Use this helper for all local image paths.
const BASE_PATH = "/vpog-site";

export function img(src: string): string {
  if (!src || src.startsWith("http") || src.startsWith("//")) return src;
  // Avoid double-prefixing
  if (src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}
