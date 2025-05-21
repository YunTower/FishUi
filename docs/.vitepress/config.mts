import { defineConfig } from 'vitepress'
import { demoPlugin } from './plugins/demo.js'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fish UI',
  description: '一个 Vue 3 组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      {
        text: '0.0.25',
        items: [
          { text: '更新日志', link: '/guide/changelog' },
          { text: '参与贡献', link: 'https://github.com/YunTower/FishUi' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '致谢', link: '/guide/thanks' },
            { text: '快速开始', link: '/guide/start' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '按钮 Button', link: '/components/button' },
            { text: '链接 Link', link: '/components/link' },
            { text: '图标 Icon', link: '/components/icon' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/YunTower/FishUi' }],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('demo-'),
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(demoPlugin, {
        componentsDir: fileURLToPath(new URL('../components/demo', import.meta.url)),
      })
    },
  },
  vite: {
    resolve: {
      alias: {
        '@fish-ui': fileURLToPath(new URL('../../packages', import.meta.url)),
      },
    },
  },
})
