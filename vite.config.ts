import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/zhaobeauty/',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('lucide-react')) return 'lucide';
            if (id.includes('@radix-ui')) return 'radix';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor';
            return 'vendor-other';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
