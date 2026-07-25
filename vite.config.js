import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Firebase Hosting serves from "build" (see firebase.json).
    outDir: "build",
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
});
