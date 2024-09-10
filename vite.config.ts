import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true, // if it's true no need to import describe , test & ... in each file & it is all imported global
    environment: "jsdom",
    // setupFiles: ["./tests/vitest.setup.ts"],
    coverage: {
      provider: "istanbul", // or 'v8'
    },
    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: { exportType: "named", ref: true },
      include: "**/*.svg",
    }),
  ],
});
