import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import someComponent from '@/components/someC'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
