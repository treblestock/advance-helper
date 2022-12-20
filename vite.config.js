import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  if (command === 'serve') {
    return ({
      plugins: [vue()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
      },
    })
  } else {
    return ({
      plugins: [vue()],
      base: '/advance-helper/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
      },
      // build: {
      //   outDir: '../dist'
      // },
    })
  }
})
