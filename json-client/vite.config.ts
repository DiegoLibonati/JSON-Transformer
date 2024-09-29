import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const root = resolve(__dirname);

export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@/src": resolve(root, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [react()],
});
