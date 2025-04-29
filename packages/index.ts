import { components } from './components'
import type { App } from 'vue'

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export * from './components'
export default install
