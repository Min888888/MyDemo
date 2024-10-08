import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 4000, //本地端口号
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true
      }
    }
  }
})
