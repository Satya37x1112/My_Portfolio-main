import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize development server
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Add meta tags for better SEO
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
});
