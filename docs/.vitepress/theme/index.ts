import Theme from 'vitepress/theme'
import type { App } from 'vue'
import Demo from '../components/Demo.vue'
import './custom.css'

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Demo', Demo)
  },
}
