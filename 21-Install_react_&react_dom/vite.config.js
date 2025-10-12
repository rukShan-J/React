// Import the defineConfig helper from Vite
import { defineConfig } from "vite";

// Import the official React plugin for Vite
import react from "@vitejs/plugin-react";

// Export Vite configuration
export default defineConfig({
  plugins: [react()], // Enable React support (JSX, Fast Refresh, etc.)
  root: "src"         // Set "src" as the project root directory
});
