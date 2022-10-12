import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
}

export default defineConfig({
  plugins: [vue(), vueJsx()],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'uiVite',
      fileName: 'ui-vite',
      // 导出模块格式
      formats: ["es", "umd", "iife"]
    }
  }
})