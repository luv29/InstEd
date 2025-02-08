import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config({
  path: "../.env"
}) 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src"),
    }
  },
  server: {
    proxy: {
      '/api': `http://localhost:${process.env.VITE_BACKEND_PORT}`
    },
  },
})
