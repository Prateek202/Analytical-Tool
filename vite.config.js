import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: 10000, // Ensure it matches the Render port
    strictPort: true,
  },
  preview: {
    allowedHosts: ["analytical-tool-4.onrender.com"], // Add Render host here
  },
});
