import Theme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import '@fish-ui/styles/index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Demo', Demo)
  },
}
