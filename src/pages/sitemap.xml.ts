import type { APIRoute } from "astro";
import { site } from "@content/site";

const routes = [
  "/",
  "/features",
  "/pricing",
  "/faqs",
  "/about",
  "/contact",
  "/policies",
  "/android"
];

export const GET: APIRoute = () => {
  const urls = routes
    .map((route) => {
      const loc = new URL(route, site.url).toString();
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};