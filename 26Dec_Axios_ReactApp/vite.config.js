import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //tailwind part(shadCN,tailwind ke liye) 
import path from "path" //for shadCN

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   //we did this part for shadCN along with tailwindcss
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
