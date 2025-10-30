// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
      host: '0.0.0.0',
      port: 4321,
  },

  integrations: [
    alpinejs(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
