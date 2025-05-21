import Theme from 'vitepress/theme'
import type { App } from 'vue'
import Demo from '../components/Demo.vue'
import './custom.css'
// 引入组件库
import FishUI from '../../../packages/index'
import '../../../packages/styles/index.css'

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    app.use(FishUI)
    app.component('Demo', Demo)
  }
}
