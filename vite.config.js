import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensures the server binds to all network interfaces
    port: process.env.PORT || 5173 // Use the PORT environment variable if available, fallback to 5173
  }
})
