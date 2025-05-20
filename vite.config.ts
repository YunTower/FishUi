import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"
import path from "path"


export default defineConfig({
  plugins: [
    vue(),
    // TS 类型生成插件
    dts({
      outDir: ['es'],
      include: ['packages/**/*.ts', 'packages/**/*.vue'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/\.d\.ts$/, '.d.ts'),
        content
      })
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages')
    }
  },

  // 组件库打包配置
  build: {
    lib: {
      name: 'fish-ui',                   // 组件库名称
      entry: "./packages/index.ts",     // 组件库的入口文件
    },
    rollupOptions: {
      external: ["vue"],						    // 外部依赖，不会被打包
      input: './packages/index.ts',			// 组件库的入口文件
      output: [
        {
          format: "es",					        // 打包为 ES 格式
          entryFileNames: "[name].mjs",	// 文件名格式
          preserveModules: false,			  // 保留原文件结构
          exports: "named",				      // 使用具名导出
          dir: "es",						        // 打包后的文件位置
          globals: {
            vue: 'Vue'
          }
        },
        {
          format: "cjs",					      // 打包为 CommonJS 格式
          entryFileNames: "[name].js",
          preserveModules: false,
          exports: "named",
          dir: "lib",
          globals: {
            vue: 'Vue'
          }
        },
      ],
    }
  },

  // CSS 样式配置
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  },
})
