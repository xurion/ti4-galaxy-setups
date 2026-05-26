import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ti4-galaxy-setups/", // Hosted on GitHub pages
  plugins: [react()],
});
