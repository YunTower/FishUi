<script setup lang="ts">
import { ref, computed, provide, onMounted, onUnmounted } from 'vue'
import type { CSSProperties } from 'vue'
import type { GridProps } from './grid'
import type { ResponsiveValue } from './types'

defineOptions({
  name: 'FGrid'
})

const props = withDefaults(defineProps<GridProps>(), {
  cols: 24,
  rowGap: 0,
  colGap: 0,
  collapsed: false,
  collapsedRows: 1
})

// 用于提供给GridItem的上下文
const GRID_KEY = Symbol('gridKey')
provide(GRID_KEY, {
  cols: computed(() => props.cols)
})

// 处理响应式值
const getResponsiveValue = (value: number | ResponsiveValue): number => {
  if (typeof value === 'number') {
    return value
  }
  if (!value) return 0

  // 响应式断点
  const screenWidth = window.innerWidth
  if (screenWidth >= 1600 && value.xxl !== undefined) return value.xxl
  if (screenWidth >= 1200 && value.xl !== undefined) return value.xl
  if (screenWidth >= 992 && value.lg !== undefined) return value.lg
  if (screenWidth >= 768 && value.md !== undefined) return value.md
  if (screenWidth >= 576 && value.sm !== undefined) return value.sm
  if (screenWidth < 576 && value.xs !== undefined) return value.xs

  return 0
}

// 计算栅格样式
const gridStyle = computed(() => {
  const styles: CSSProperties = {}
  const cols = getResponsiveValue(props.cols)
  const rowGap = getResponsiveValue(props.rowGap)
  const colGap = getResponsiveValue(props.colGap)

  // 设置Grid模板列和间距
  styles.display = 'grid'
  styles.gridTemplateColumns = `repeat(${cols}, 1fr)`

  if (rowGap > 0) {
    styles.rowGap = `${rowGap}px`
  }

  if (colGap > 0) {
    styles.columnGap = `${colGap}px`
  }

  // 处理折叠状态
  if (props.collapsed) {
    styles.gridTemplateRows = `repeat(${props.collapsedRows}, auto)`
    styles.overflow = 'hidden'
  }

  return styles
})

// 计算Grid的class
const gridClass = computed(() => {
  return {
    'f-grid': true,
    'f-grid--collapsed': props.collapsed
  }
})

// 监听窗口大小变化，重新计算样式
const resizeHandler = () => {
  // 强制重新计算gridStyle
  gridStyle.value
}

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
  <div :class="gridClass" :style="gridStyle">
    <slot />
  </div>
</template>
