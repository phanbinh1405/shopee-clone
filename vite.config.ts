import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  css: {
    devSourcemap: true // hiển thị css thuộc dòng nào trong file nào trên devtool
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
