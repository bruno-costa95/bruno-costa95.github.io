import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
   base: '/',

   build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
            main: resolve(__dirname, 'index.html'),
            outro: resolve(__dirname, 'outro/index.html'),
      },
    },
  },
});