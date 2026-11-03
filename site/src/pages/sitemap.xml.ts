import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const producao = import.meta.env.SITE_ENV === 'production' && !!site;
  if (!producao) return new Response('Not found', { status: 404 });
  const corpo = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${new URL('/', site).href}</loc></url>\n</urlset>\n`;
  return new Response(corpo, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
