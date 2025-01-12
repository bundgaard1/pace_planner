import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@Models': path.resolve(__dirname, './wailsjs/go/models.ts'),
      '@Controllers': path.resolve(__dirname, './wailsjs/go/controllers'),
      '@Store': path.resolve(__dirname, './src/store'),
      '@Lib': path.resolve(__dirname, './src/lib'),
    },
  },
  plugins: [svelte()],
});

