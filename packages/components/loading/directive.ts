import type { DirectiveBinding, ObjectDirective } from 'vue'
import { createApp, h } from 'vue'
import Loading from './src/Loading.vue'

interface LoadingEl extends HTMLElement {
  __loadingApp__?: ReturnType<typeof createApp>
  __loadingContainer__?: HTMLElement
}

const vLoading: ObjectDirective = {
  mounted(el: LoadingEl, binding: DirectiveBinding) {
    if (!binding.value) return
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.top = '0'
    container.style.left = '0'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.pointerEvents = 'none'
    el.style.position = 'relative'
    el.appendChild(container)
    const app = createApp(Loading, typeof binding.value === 'object' ? binding.value : { loading: !!binding.value })
    app.mount(container)
    el.__loadingApp__ = app
    el.__loadingContainer__ = container
  },
  updated(el: LoadingEl, binding: DirectiveBinding) {
    if (binding.value && !el.__loadingApp__) {
      vLoading.mounted!(el, binding)
    } else if (!binding.value && el.__loadingApp__) {
      vLoading.unmounted!(el)
    } else if (binding.value && el.__loadingApp__) {
      // 更新props
      const instance = el.__loadingApp__
      if (instance && instance._instance && instance._instance.props) {
        Object.assign(instance._instance.props, typeof binding.value === 'object' ? binding.value : { loading: !!binding.value })
      }
    }
  },
  unmounted(el: LoadingEl) {
    if (el.__loadingApp__) {
      el.__loadingApp__.unmount()
      el.__loadingApp__ = undefined
    }
    if (el.__loadingContainer__ && el.contains(el.__loadingContainer__)) {
      el.removeChild(el.__loadingContainer__)
      el.__loadingContainer__ = undefined
    }
  }
}

export default vLoading
