import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true
},
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      events: resolve(__dirname, 'events/index.html')
    }
  }
}
});
