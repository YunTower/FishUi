import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),

    // TS 类型生成插件
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
      outDir: ['es', 'lib'],
      include: ['packages/**/*.ts', 'packages/**/*.tsx', 'packages/**/*.vue'],
      exclude: ['node_modules', 'dist'],
      insertTypesEntry: true,
      copyDtsFiles: true,
      cleanVueFileName: true,
      skipDiagnostics: false,
      logDiagnostics: true,
      rollupTypes: true,
      staticImport: true,
      afterBuild: () => {
        // 构建后的钩子
        console.log('Type definitions generated successfully!')
      },
    }),
  ],

  build: {
    lib: {
      name: 'fish-ui',
      entry: './packages/index.ts',
    },
    rollupOptions: {
      external: ['vue'],
      input: './packages/index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: 'es',
          preserveModulesRoot: 'packages',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: 'lib',
          preserveModulesRoot: 'packages',
        },
      ],
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
