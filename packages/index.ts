import { components } from './components'
import type { App } from 'vue'

// 导入样式文件
import './styles/index.css'
import './styles/theme.css'
import './styles/remixicon.css'

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
