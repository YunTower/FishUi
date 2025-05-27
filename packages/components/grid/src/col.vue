<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CSSProperties } from 'vue'
import type { ColProps } from './col'
import type { GutterType } from './types'

defineOptions({
  name: 'FCol'
})

const props = withDefaults(defineProps<ColProps>(), {
  span: 24
})

// 注入Row提供的gutter
const ROW_KEY = Symbol('rowKey')
const { gutter } = inject(ROW_KEY, { gutter: computed(() => 0) })

// 计算响应式样式
const sizeClasses = computed(() => {
  const ret: Record<string, boolean> = {}
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

  sizes.forEach(size => {
    const sizeProps = props[size]
    if (!sizeProps) return

    if (typeof sizeProps === 'number') {
      ret[`f-col-${size}-${sizeProps}`] = true
    } else if (typeof sizeProps === 'object') {
      // 处理对象形式的响应式配置
      const objProps = sizeProps as Record<string, any>
      // 只处理span, offset和order属性
      if (objProps.span !== undefined) {
        ret[`f-col-${size}-${objProps.span}`] = true
      }
      if (objProps.offset !== undefined) {
        ret[`f-col-${size}-offset-${objProps.offset}`] = true
      }
      if (objProps.order !== undefined) {
        ret[`f-col-${size}-order-${objProps.order}`] = true
      }
    }
  })

  return ret
})

// 计算Col的class
const colClass = computed(() => {
  const classes: Record<string, boolean> = {
    'f-col': true
  }

  // 基础class
  if (props.span) {
    classes[`f-col-${props.span}`] = true
  }

  // 偏移
  if (props.offset) {
    classes[`f-col-offset-${props.offset}`] = true
  }

  // 排序
  if (props.order) {
    classes[`f-col-order-${props.order}`] = true
  }

  // 合并响应式class
  Object.assign(classes, sizeClasses.value)

  return classes
})

// 计算间距样式
const gutterStyle = computed(() => {
  const styles: CSSProperties = {}
  const gutterVal = gutter.value as GutterType

  if (!gutterVal) {
    return styles
  }

  // 处理水平和垂直间距
  if (Array.isArray(gutterVal)) {
    const horizontalGutter = gutterVal[0]
    const verticalGutter = gutterVal.length > 1 ? gutterVal[1] : 0

    if (typeof horizontalGutter === 'number' && horizontalGutter > 0) {
      styles.paddingLeft = styles.paddingRight = `${horizontalGutter / 2}px`
    }

    if (typeof verticalGutter === 'number' && verticalGutter > 0) {
      styles.paddingTop = styles.paddingBottom = `${verticalGutter / 2}px`
    }
  } else if (typeof gutterVal === 'number' && gutterVal > 0) {
    styles.paddingLeft = styles.paddingRight = `${gutterVal / 2}px`
  }

  return styles
})

// 计算flex样式
const flexStyle = computed(() => {
  const styles: CSSProperties = {}

  if (props.flex) {
    styles.flex = props.flex
  }

  return styles
})

// 合并所有样式
const colStyle = computed(() => {
  return {
    ...gutterStyle.value,
    ...flexStyle.value
  }
})
</script>

<template>
  <div :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>
