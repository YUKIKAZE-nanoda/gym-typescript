import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import someComponent from '@compo'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
