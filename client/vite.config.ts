import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: ['**/node_modules/**', '**/vite.config.ts'],
      include: [
        './vite.config.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
      ],
    }),
    splitVendorChunkPlugin(),
  ],
})
