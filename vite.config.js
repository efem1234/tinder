import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteRequire } from "vite-require";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
