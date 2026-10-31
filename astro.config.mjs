// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Test: GitHub Pages (https://pabloesteves91.github.io/zurichfood/)
// Live: SITE_URL=https://zurichfood.ch BASE_PATH=/ npm run build
const site = process.env.SITE_URL ?? 'https://pabloesteves91.github.io';
const base = process.env.BASE_PATH ?? '/zurichfood';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(admin|redaktion|404)\//.test(page),
    }),
  ],
  image: { responsiveStyles: true },
});
