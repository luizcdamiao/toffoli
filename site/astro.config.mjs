import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// SITE_URL só deve apontar para o domínio oficial quando ele for aprovado.
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'static',
  adapter: node({ mode: 'middleware' }),
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
});
