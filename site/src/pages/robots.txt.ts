import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const producao = import.meta.env.SITE_ENV === 'production' && !!site;
  const corpo = producao
    ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
