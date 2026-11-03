// Servidor de produção: serve os arquivos estáticos com compressão e cache, e entrega o resto ao Astro (formulário, robots, sitemap).
// O adaptador padrão do Astro não comprime e manda `max-age=0` até nos arquivos com hash.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { handler } from './dist/server/entry.mjs';

const raiz = path.dirname(fileURLToPath(import.meta.url));
const cliente = path.join(raiz, 'dist', 'client');
const porta = Number(process.env.PORT || 4321);
const host = process.env.HOST || '0.0.0.0';

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};
const comprimiveis = new Set(['.html', '.css', '.js', '.json', '.svg', '.xml', '.txt']);
const cache = new Map();

const seguranca = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Cross-Origin-Opener-Policy': 'same-origin',
};

function achar(urlPath) {
  let caminho;
  try {
    caminho = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  if (caminho.endsWith('/')) caminho += 'index.html';
  const arquivo = path.resolve(cliente, '.' + caminho);
  if (arquivo !== cliente && !arquivo.startsWith(cliente + path.sep)) return null;
  try {
    const st = fs.statSync(arquivo);
    if (st.isFile()) return { arquivo, st };
    if (st.isDirectory()) {
      const idx = path.join(arquivo, 'index.html');
      const si = fs.statSync(idx);
      if (si.isFile()) return { arquivo: idx, st: si };
    }
  } catch {}
  return null;
}

function servir(req, res, { arquivo, st }, urlPath) {
  const ext = path.extname(arquivo).toLowerCase();
  const etag = `W/"${st.size.toString(16)}-${Math.floor(st.mtimeMs).toString(16)}"`;
  const imutavel = urlPath.startsWith('/_astro/');
  res.setHeader('Content-Type', tipos[ext] || 'application/octet-stream');
  res.setHeader('ETag', etag);
  res.setHeader('Last-Modified', st.mtime.toUTCString());
  res.setHeader('Cache-Control', imutavel ? 'public, max-age=31536000, immutable' : ext === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=86400');
  if (comprimiveis.has(ext)) res.setHeader('Vary', 'Accept-Encoding');
  if (req.headers['if-none-match'] === etag) {
    res.statusCode = 304;
    return res.end();
  }

  const aceita = String(req.headers['accept-encoding'] || '');
  const codificacao = comprimiveis.has(ext) && st.size > 1024 ? (/\bbr\b/.test(aceita) ? 'br' : /\bgzip\b/.test(aceita) ? 'gzip' : '') : '';
  if (codificacao) {
    const chave = `${arquivo}|${codificacao}|${etag}`;
    let corpo = cache.get(chave);
    if (!corpo) {
      const origem = fs.readFileSync(arquivo);
      corpo = codificacao === 'br'
        ? zlib.brotliCompressSync(origem, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } })
        : zlib.gzipSync(origem, { level: 9 });
      cache.set(chave, corpo);
    }
    res.setHeader('Content-Encoding', codificacao);
    res.setHeader('Content-Length', corpo.length);
    res.statusCode = 200;
    return req.method === 'HEAD' ? res.end() : res.end(corpo);
  }
  res.setHeader('Content-Length', st.size);
  res.statusCode = 200;
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(arquivo).pipe(res);
}

const servidor = http.createServer((req, res) => {
  for (const [k, v] of Object.entries(seguranca)) res.setHeader(k, v);
  const urlPath = (req.url || '/').split('?')[0].split('#')[0];
  if (req.method === 'GET' || req.method === 'HEAD') {
    const achado = achar(urlPath);
    if (achado) return servir(req, res, achado, urlPath);
  }
  handler(req, res, () => {
    res.statusCode = 404;
    res.end('Não encontrado');
  });
});

servidor.listen(porta, host, () => console.log(`Toffoli & Antônio em http://${host}:${porta}`));
