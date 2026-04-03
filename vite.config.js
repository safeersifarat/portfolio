import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    strictPort: true,
    port: parseInt(process.env.PORT) || 5173,
    allowedHosts: true,
  },
  preview: {
    host: true,
    strictPort: true,
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: true,
  }
})