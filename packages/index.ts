import { components } from './components'
import type { App } from 'vue'

export interface FishUIInstance {
  install: (app: App) => void
}

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export * from './components'

const FishUI: FishUIInstance = {
  install,
}

export default FishUI
