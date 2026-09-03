import type { APIContext } from "astro";

export function GET({ site }: APIContext) {
  const origin = site ?? new URL("https://sausage-5464.github.io");
  const sitemap = new URL("/sitemap-index.xml", origin);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
