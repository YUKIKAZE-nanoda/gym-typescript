import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import someComponent from '@/components/som'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
