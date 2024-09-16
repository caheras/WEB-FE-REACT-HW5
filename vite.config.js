import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/WEB-FE-REACT-HW5/',
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js'),
  },
});