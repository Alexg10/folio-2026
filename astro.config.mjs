// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set your production URL here (used for canonical / OG tags)
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
