// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set your production URL here (used for canonical / OG tags)
  site: 'https://alexandre-guerard.fr',
  vite: {
    plugins: [tailwindcss()],
  },
});
