<script setup lang="ts">
import type { AvatarProps } from './avatar'
import { withDefaults, defineProps, defineEmits, computed, ref, onMounted, watch, nextTick } from 'vue'

// 组件名
defineOptions({
  name: 'FAvatar'
})

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'circle',
  imageUrl: '',
  size: 40,
  autoFixFontSize: true,
  triggerType: undefined,
  triggerIconStyle: () => ({}),
  objectFit: 'cover',
  backgroundColor: undefined
})
console.log(props)

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
  (e: 'error'): void
  (e: 'load'): void
}>()

const imageError = ref(false)

const cssVars = computed(() => {
  const vars: Record<string, string> = {
    '--f-avatar-size': `${props.size}px`,
    '--f-avatar-object-fit': props.objectFit,
    '--f-avatar-font-size': getFontSize(slotText.value),
  }

  return vars
})

const avatarStyle = computed(() => {
  const style = { ...cssVars.value }
  if (props.backgroundColor) {
    style.background = props.backgroundColor
  }
  return style
})

const imageStyle = computed(() => ({
  objectFit: props.objectFit
}))

const triggerIconStyle = computed(() => ({
  ...props.triggerIconStyle,
  transition: 'var(--f-avatar-trigger-transition-duration)'
}))

const MAX_TEXT_LENGTH = 6

const getDisplayText = (text: string) => {
  if (!text) return ''
  return text.length > MAX_TEXT_LENGTH ? text.slice(0, MAX_TEXT_LENGTH) : text
}

const getFontSize = (text: string) => {
  // 基于字符数动态调整字体，字符越多字体越小
  const base = props.size * 0.5
  const len = Math.max(1, Math.min(MAX_TEXT_LENGTH, text.length))
  // 1字符最大，6字符最小
  return `${base / (0.6 + 0.15 * (len - 1))}px`
}

const slotText = ref('')

const textDiv = ref<HTMLElement | null>(null)

const updateSlotText = () => {
  if (textDiv.value) {
    slotText.value = textDiv.value.innerText.trim()
  }
}

onMounted(() => {
  nextTick(updateSlotText)
})
watch(() => props.size, updateSlotText)

const handleClick = (ev: MouseEvent) => {
  emit('click', ev)
}

const handleError = () => {
  imageError.value = true
  emit('error')
}

const handleLoad = () => {
  emit('load')
}
</script>

<template>
  <div
    class="f-avatar"
    :class="[
      `f-avatar--${props.shape}`,
      { 'f-avatar--clickable': true }
    ]"
    :style="avatarStyle"
    @click="handleClick"
  >
    <img
      v-if="props.imageUrl"
      :src="props.imageUrl"
      :style="imageStyle"
      @error="handleError"
      @load="handleLoad"
    />
    <div v-else class="f-avatar__text">
      <span ref="textDiv">{{ getDisplayText(slotText) }}</span>
      <slot />
    </div>
    <div
      v-if="props.triggerType"
      class="f-avatar__trigger"
      :class="`f-avatar__trigger--${props.triggerType}`"
      :style="triggerIconStyle"
      @click.stop="handleClick"
    >
      <slot name="trigger-icon">
        <i class="ri-camera-line"></i>
      </slot>
    </div>
  </div>
</template>

<style scoped>
@import './avatar.css';
</style>
