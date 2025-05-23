import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Root-relative paths for production
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.indexOf('node_modules') !== -1) {
            if (id.indexOf('react') !== -1 || id.indexOf('react-dom') !== -1 || id.indexOf('react-router') !== -1) {
              return 'vendor-react';
            }
            if (id.indexOf('react-icons') !== -1 || id.indexOf('headlessui') !== -1) {
              return 'vendor-ui';
            }
            return 'vendor';
          }
          return undefined;
        }
      }
    }
  },
  server: {
    open: true
  },
  preview: {
    port: 8080
  }
})
