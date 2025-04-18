import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'img',
    rollupOptions: {
      output: {
        assetFileNames: 'img/[name].[ext]'
      }
    }
  }
})
