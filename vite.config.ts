import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      entryRoot: './src/main.ts',
      outDir: './dist/types'
    })
  ],
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'js-utils',
      formats: ['es', 'umd'],
      fileName: (format: string, fileName: string) => `${fileName}.${format}.js`
    },
    target: 'esnext',
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
