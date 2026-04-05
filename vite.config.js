import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   server: {
    host: true,   // 👈 IMPORTANT (allows external access)
    port: 5173
  }
})
