<script setup lang="ts">
import { computed, ref, useSlots, watch } from 'vue'
import type { TagProps } from './tag.ts'

defineOptions({
  name: 'FTag'
})

const props = withDefaults(defineProps<TagProps>(), {
  size: 'medium',
  shape: 'square',
  bordered: false,
  visible: true,
  loading: false,
  closable: false,
  disabled: false,
  nowrap: false,
  theme: 'default',
  variant: 'dark'
})

const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void
  (e: 'update:visible', visible: boolean): void
}>()

const slots = useSlots()

// 内部状态
const localVisible = ref(props.visible) // 初始值取自 visible 属性

// 计算属性：是否显示
const isVisible = computed(() => {
  return props.visible !== undefined ? props.visible : localVisible.value
})

// 计算属性：样式类
const tagClasses = computed(() => {
  return [
    `f-tag-size--${props.size}`,
    `f-tag-shape--${props.shape}`,
    `f-tag-theme--${props.theme}`,
    `f-tag-variant--${props.variant}`,
    {
      'f-tag--bordered': props.bordered,
      'f-tag--loading': props.loading,
      'f-tag--closable': props.closable,
      'f-tag--disabled': props.disabled,
      'f-tag--nowrap': props.nowrap,
      [`f-tag-color--${props.color}`]: props.color,
    }
  ]
})

// 计算属性：标签样式
const tagStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.maxWidth) {
    style.maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  }

  return style
})

// 关闭标签处理函数
const handleClose = (event: MouseEvent) => {
  if (props.disabled) return
  event.stopPropagation()
  localVisible.value = false
  emit('close', event)
  emit('update:visible', false)
}

// 监听visible属性变化
watch(() => props.visible, (val) => {
  if (val !== undefined) {
    localVisible.value = val
  }
})
</script>

<template>
  <span
    v-if="isVisible"
    class="f-tag"
    :class="tagClasses"
    :style="tagStyle"
  >
    <!-- 加载中图标 -->
    <span v-if="loading" class="f-tag__loading">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 331.008a32 32 0 0 1-45.248-45.248l135.808-135.68a32 32 0 0 1 45.248 0zM376.32 647.744a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.872-135.808a32 32 0 0 1 45.248 0z"
        />
      </svg>
    </span>
    <!-- 图标插槽 -->
    <span v-if="slots.icon" class="f-tag__icon">
      <slot name="icon" />
    </span>
    <!-- 默认内容插槽 -->
    <span class="f-tag__content">
      <slot />
    </span>
    <!-- 关闭按钮 -->
    <span v-if="closable && !loading" class="f-tag__close" @click="handleClose">
      <slot name="close-icon">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
          <path
            fill="currentColor"
            d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
          />
        </svg>
      </slot>
    </span>
  </span>
</template>
