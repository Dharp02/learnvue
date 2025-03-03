import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  meteor: {
    clientEntry: 'imports/ui/main.js',
  },
  optimizeDeps: {
    exclude: ['vue-meteor-tracker'],
  },
  server: {
    port: 5173 // Ensure this is correct
  }
})
