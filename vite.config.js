import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
})
