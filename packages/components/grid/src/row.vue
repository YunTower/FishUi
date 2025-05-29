<script setup lang="ts">
import { computed, provide, onMounted, onUnmounted } from 'vue'
import type { CSSProperties } from 'vue'
import type { RowProps } from './row'
import type { ResponsiveValue } from './types'
import './style.css'

defineOptions({
  name: 'FRow'
})

const props = withDefaults(defineProps<RowProps>(), {
  gutter: 0,
  justify: 'start',
  align: 'start',
  div: false,
  wrap: true
})

// 用于提供给Col组件的上下文
const ROW_KEY = Symbol('rowKey')
provide(ROW_KEY, { gutter: computed(() => props.gutter) })

// 处理响应式gutter
const getGutter = (gutter: number | ResponsiveValue | undefined): number => {
  if (typeof gutter === 'number') {
    return gutter
  }
  if (!gutter) return 0

  // 响应式断点
  const screenWidth = window.innerWidth
  if (screenWidth >= 1600 && gutter.xxl !== undefined) return gutter.xxl
  if (screenWidth >= 1200 && gutter.xl !== undefined) return gutter.xl
  if (screenWidth >= 992 && gutter.lg !== undefined) return gutter.lg
  if (screenWidth >= 768 && gutter.md !== undefined) return gutter.md
  if (screenWidth >= 576 && gutter.sm !== undefined) return gutter.sm
  if (screenWidth < 576 && gutter.xs !== undefined) return gutter.xs

  return 0
}

// 计算水平和垂直间距
const gutterStyle = computed(() => {
  if (props.div) return {}

  const gutter = props.gutter
  let horizontalGutter = 0
  let verticalGutter = 0

  if (Array.isArray(gutter)) {
    horizontalGutter = getGutter(gutter[0])
    verticalGutter = gutter.length > 1 ? getGutter(gutter[1]) : 0
  } else {
    horizontalGutter = getGutter(gutter)
  }

  const styles: CSSProperties = {}

  if (horizontalGutter > 0) {
    styles.marginLeft = styles.marginRight = `-${horizontalGutter / 2}px`
  }

  if (verticalGutter > 0) {
    styles.marginTop = styles.marginBottom = `-${verticalGutter / 2}px`
  }

  return styles
})

// 计算Row的class
const rowClass = computed(() => {
  if (props.div) return {}

  return {
    'f-row': true,
    [`f-row-justify--${props.justify}`]: props.justify !== 'start',
    [`f-row-align--${props.align}`]: props.align !== 'start',
    'f-row--nowrap': !props.wrap
  }
})

// 使用防抖处理resize事件
function debounce(fn: Function, delay: number) {
  let timer: number | null = null
  return function(this: any, ...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 监听窗口大小变化，重新计算样式
const resizeHandler = debounce(() => {
  // 强制重新计算gutterStyle
  gutterStyle.value
}, 100)

// 组件挂载时添加resize监听器
onMounted(() => {
  window.addEventListener('resize', resizeHandler)
})

// 组件卸载时移除resize监听器
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <div v-if="div">
    <slot />
  </div>
  <div v-else :class="rowClass" :style="gutterStyle">
    <slot />
  </div>
</template>
