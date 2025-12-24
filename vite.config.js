import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for React app
// The 'base' path is required for GitHub Pages deployment
// Change this to match your repository name if different
export default defineConfig({
  plugins: [react()],
  base: '/tristanbrideweser.github.io/',
})
