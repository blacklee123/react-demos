import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src/',
      '/#/': '/types/',
    },
  },
  // 代理
  server: {
    host: '127.0.0.1',
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://qaq-dev.pandadagames.net',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/static': {
        target: 'https://qaq-dev.pandadagames.net',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
