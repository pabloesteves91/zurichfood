import type { APIContext } from 'astro';
import { SITE } from '../config';

export function GET({ site }: APIContext) {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href;
  const body = SITE.indexing
    ? `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /redaktion/\n\nSitemap: ${sitemap}\n`
    : `# Testumgebung: Indexierung deaktiviert (PUBLIC_INDEXING=true für Live)\nUser-agent: *\nDisallow: /admin/\nDisallow: /redaktion/\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
