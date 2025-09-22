import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Remove development helpers in production
    jsxRuntime: 'automatic'
  })],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react/jsx-runtime'],
  },
  
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable source maps for debugging but keep them external
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 2048,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minimize bundle with default minifier
    minify: 'esbuild',
    // Set target for better browser support
    target: 'es2015',
  },
  
  // Optimize development server
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  
  // Optimize preview
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  
  // Add meta tags for better SEO
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
});
