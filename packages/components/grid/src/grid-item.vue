<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CSSProperties } from 'vue'
import type { GridItemProps } from './grid-item'
import type { ResponsiveValue } from './types'

defineOptions({
  name: 'FGridItem'
})

const props = withDefaults(defineProps<GridItemProps>(), {
  span: 1,
  offset: 0,
  suffix: false
})

// 注入Grid提供的上下文
const GRID_KEY = Symbol('gridKey')
const { cols } = inject(GRID_KEY, { cols: computed(() => 24) })

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

// 计算GridItem样式
const gridItemStyle = computed(() => {
  const styles: CSSProperties = {}
  const span = getResponsiveValue(props.span)
  const offset = getResponsiveValue(props.offset)

  // 设置跨越列数
  styles.gridColumn = span > 0 ? `span ${span}` : undefined

  // 设置偏移
  if (offset > 0) {
    styles.gridColumnStart = offset + 1
  }

  // 后缀元素放置在末尾
  if (props.suffix) {
    const totalCols = typeof cols.value === 'number' ? cols.value : getResponsiveValue(cols.value)
    styles.gridColumn = `${totalCols - span + 1} / span ${span}`
  }

  return styles
})

// 计算GridItem的class
const gridItemClass = computed(() => {
  return {
    'f-grid-item': true,
    'f-grid-item--suffix': props.suffix
  }
})
</script>

<template>
  <div :class="gridItemClass" :style="gridItemStyle">
    <slot />
  </div>
</template>
