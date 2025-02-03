import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

export default defineConfig({
  optimizeDeps: {
    include: ["react-dom/server", "react", "react-dom"],
  },
  plugins: [
    reactRouter({
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths(),
  ],
});
