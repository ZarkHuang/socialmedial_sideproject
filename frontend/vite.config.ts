import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:1337",
        changeOrigin: true,
        secure: false,
      },
      "/upload": {
        target: "http://localhost:1337",
        changeOrigin: true,
        secure: false,
      },
      "/uploads": {
        target: "http://localhost:1337",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
