import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    host: '0.0.0.0',
    // proxy: {
    //   '/api': 'http://localhost:3002'
    // }
    proxy: {
      '/api': 'http://host.docker.internal:3002',  // Use this on Docker for Mac/Windows
    },
  },
  preview: {
    // Configure the preview server (used when you run `npm run preview`)
    port: 4173,  
    allowedHosts: ['my-app.example.com', 'localhost', '0.0.0.0'], // Add your domain here
  },
})
