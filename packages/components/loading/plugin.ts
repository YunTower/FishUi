import { createApp, h, type App, type VNode } from 'vue'
import Loading from './src/Loading.vue'

export interface LoadingInstance {
  hide: () => void
}

function createLoadingInstance(props: any): LoadingInstance {
  const container = document.createElement('div')
  document.body.appendChild(container)
  let app: App | null = null

  const vm = h(Loading, {
    ...props,
    loading: true
  })

  app = createApp({
    render: () => vm
  })
  app.mount(container)

  return {
    hide() {
      app && app.unmount()
      if (container.parentNode) container.parentNode.removeChild(container)
    }
  }
}

function $loading(options: boolean | Record<string, any>): LoadingInstance {
  if (typeof options === 'boolean') {
    return createLoadingInstance({ loading: options })
  }
  return createLoadingInstance(options)
}

export default {
  install(app: App) {
    app.config.globalProperties.$loading = $loading
  }
}

export { $loading }