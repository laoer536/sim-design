import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
const fileName = fileURLToPath(import.meta.url)
const dirName = dirname(fileName)

export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    //别名
    // alias: {
    //   '@compo': resolve(__dirname, './hooks'),
    // },
  },
  build: {
    lib: {
      entry: dirName + '/index.ts',
      name: 'sim-design',
      fileName: (format) => `vite-lib.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
