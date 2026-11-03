import type { APIRoute } from 'astro';

// Em homologação o sitemap fica vazio (sem URLs) para não expor o endereço de teste.
export const GET: APIRoute = ({ site }) => {
  const producao = import.meta.env.SITE_ENV === 'production' && !!site;
  const urls = producao ? `  <url><loc>${new URL('/', site).href}</loc></url>\n` : '';
  const corpo = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}</urlset>\n`;
  return new Response(corpo, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
