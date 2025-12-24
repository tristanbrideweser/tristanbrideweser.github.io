import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for React app
// The 'base' path is required for GitHub Pages deployment
// For user/organization sites (username.github.io), use base: '/'
// For project sites, use base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/', // User/organization GitHub Pages site
})
