import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pages = [
  'index.html',
  'nyancat.html',
  'nyancat-vertical.html',
  'nyancat-combined.html',
  'nyancat-collision.html',
  'nyancat-collision-diagonal.html',
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page.replace('.html', ''), resolve(__dirname, page)])),
    },
  },
});
