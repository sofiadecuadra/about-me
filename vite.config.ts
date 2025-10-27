import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({})],
  server: {
    port: 8081,
  },
  base: "/about-me/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@graphql": path.resolve(__dirname, "./src/graphql"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@logos": path.resolve(__dirname, "./src/assets/logos"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@schemas": path.resolve(__dirname, "./src/schemas"),
    },
  },
});
