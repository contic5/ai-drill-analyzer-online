import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
   build: {
    outDir: 'dist' // Optional — only if you want `build` instead of `dist`
  },
  base: "/ai-drill-analyzer-online/", // 👈 replace with your repo name
  plugins: [react()],
})
