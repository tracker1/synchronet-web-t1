import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // use sbbs local web api while developing
      "/sbbs-api": "http://localhost:8080",
    },
  },
});
