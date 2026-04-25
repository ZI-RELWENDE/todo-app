import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ma To-Do App',
        short_name: 'Todo',
        description: 'Mon application de tâches',
        theme_color: '#646cff',
        background_color: '#f0f2f5',
        display: 'standalone',
        icons: [
  {
    src: '/logo 2.png',
    sizes: '192x192',
    type: 'image/png'
  }
]
      }
    })
  ],
})