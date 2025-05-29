<script setup lang="ts">
import { ref, shallowRef, onMounted, nextTick } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useToggle } from '@vueuse/core'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css'
import 'highlight.js/styles/atom-one-dark.css'

defineOptions({
  name: 'VpDemo'
})

const props = defineProps<{
  src: string
}>()

const { copy } = useClipboard()
const [showCode, toggleCode] = useToggle(false)

const codeBlock = ref()
const demoCode = ref('')
const demoComponent = shallowRef()
const modules = import.meta.glob('../../components/demo/**/*.vue', {
  eager: true,
  as: 'raw'
})

// 监听主题变化
const isDark = ref(false)
const updateTheme = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

// 初始化主题
onMounted(() => {
  updateTheme()
  // 监听主题变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        updateTheme()
      }
    })
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

hljs.registerLanguage('javascript', javascript)

onMounted(async () => {
  try {
    // Clean up the src path
    const cleanSrc = props.src.replace(/^\.\//, '')

    // Find the matching module
    const modulePath = Object.keys(modules).find(
      (path) => path.endsWith(cleanSrc) || path.endsWith(`/${cleanSrc}`)
    )

    if (modulePath && modules[modulePath]) {
      demoCode.value = hljs.highlight(modules[modulePath], { language: 'javascript' }).value
      const componentModules = import.meta.glob('../../components/demo/**/*.vue', { eager: true })
      if (componentModules[modulePath]) {
        demoComponent.value = componentModules[modulePath].default
        if (codeBlock.value) {
          hljs.highlightElement(codeBlock.value)
        }
      } else {
        console.error(`Demo component not found: ${cleanSrc}`)
      }
    } else {
      console.error(`Demo source not found: ${cleanSrc}`)
    }
  } catch (error) {
    console.error('Failed to load demo component:', error)
  }
})

const copyCode = async () => {
  await copy(demoCode.value)
}

const handleToggleCode = () => {
  toggleCode()
  nextTick(() => {
    if (codeBlock.value) {
      hljs.highlightElement(codeBlock.value)
    }
  })
}
</script>

<template>
  <div class="demo-container">
    <div class="demo-wrapper">
      <div class="demo-content">
        <component :is="demoComponent" v-if="demoComponent" />
      </div>
    </div>
    <div class="demo-actions">
      <div class="demo-actions-wrapper">
        <span class="demo-action-item" @click="copyCode">
          <span class="demo-action-text">复制代码</span>
        </span>
        <span class="demo-action-item" @click="handleToggleCode">
          <span class="demo-action-text">显示代码</span>
        </span>
      </div>
    </div>
    <div class="demo-code-wrapper" :style="{ display: showCode ? 'block' : 'none' }">
      <div class="demo-code" :class="{ 'is-dark': isDark }">
        <pre><code ref="codeBlock" class="language-javascript" v-html="demoCode"></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.hljs) {
  background-color: unset;
}

.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
}

.demo-wrapper {
  padding: 24px;
}

.demo-content {
  padding: 20px;
}

:deep(.bg-fishblue) {
  background: rgb(var(--fishblue-6));
}

:deep(.bg-primary) {
  background-color: var(--color-primary-light-4);
}

:deep(.demo-content-row) {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;
}

:deep(.demo-content-row) h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-1);
}

.demo-actions {
  border-top: 1px solid var(--vp-c-divider);
  padding: 8px 16px;
}

.demo-actions-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.demo-action-item {
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.demo-action-item:hover {
  color: var(--vp-c-text-1);
}

.demo-action-text {
  font-size: 14px;
}

.demo-code-wrapper {
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-code-block-bg);
  overflow: hidden;
  transition: height 0.25s;
}

.demo-code {
  padding: 16px;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.5;
  overflow: auto;
}

.demo-code.is-dark {
  background-color: var(--vp-c-bg-soft);
}

:deep(pre) {
  margin: 0;
  padding: 0;
}

:deep(code) {
  padding: 0;
  background: transparent;
}
</style>
