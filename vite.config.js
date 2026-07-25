import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Must match pages_build_output_dir in wrangler.jsonc.
    outDir: "build",
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
});
