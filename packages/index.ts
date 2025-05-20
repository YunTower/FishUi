import { components } from './components'
import type { App } from 'vue'

// 导入样式文件
import './styles/theme.css'  // 先导入主题变量
import './styles/index.css'  // 再导入组件样式
import './styles/remixicon.css'  // 最后导入图标样式

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
