import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import solidPlugin from "@suid/vite-plugin";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    solid({ssr:true}),
    solidPlugin()
  ],
})
