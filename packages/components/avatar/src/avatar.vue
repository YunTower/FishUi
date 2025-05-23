<script setup lang="ts">
import type { AvatarProps } from './avatar'
import { withDefaults, defineProps, defineEmits, computed, ref, onMounted, watch, nextTick, inject, onUpdated } from 'vue'

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
  objectFit: 'cover'
})

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
  (e: 'error'): void
  (e: 'load'): void
}>()

// 接收父组件传值，优先使用头像组的参数
const avatarGroup: any = inject('avatar-group', null)
const avatarSize = computed(() => {
  if (avatarGroup?.size?.value !== undefined) {
    return avatarGroup.size.value
  }
  return props.size
})

const avatarShape = computed(() => {
  if (avatarGroup?.shape?.value !== undefined) {
    return avatarGroup.shape.value
  }
  return props.shape
})

const autoFixFontSize = computed(() => {
  if (avatarGroup?.autoFixFontSize?.value !== undefined) {
    return avatarGroup.autoFixFontSize.value
  }
  return props.autoFixFontSize
})

const imageError = ref(false)

const cssVars = computed(() => {
  const vars: Record<string, string> = {
    '--f-avatar-size': `${avatarSize.value}px`,
    '--f-avatar-object-fit': props.objectFit,
  }
  return vars
})

const avatarStyle = computed(() => {
  return cssVars.value
})

const imageStyle = computed(() => ({
  objectFit: props.objectFit
}))

const triggerIconStyle = computed(() => ({
  ...props.triggerIconStyle,
  transition: 'var(--f-avatar-trigger-transition-duration)'
}))

const slotText = ref('')
const avatarRef = ref<HTMLElement | null>(null)
const textDiv = ref<HTMLElement | null>(null)

// 文字内容自适应
const autoSize = () => {
  if (!autoFixFontSize.value || !avatarRef.value || !textDiv.value) return

  const avatarWidth = avatarRef.value.clientWidth
  const textWidth = textDiv.value.clientWidth

  // 添加一些内边距，防止文字太靠近边缘
  const padding = 8
  const scale = (avatarWidth - padding) / (textWidth || 1)

  // 限制缩放范围，避免文字过大或过小
  const finalScale = Math.min(Math.max(0.5, scale), 1.2)

  textDiv.value.style.transform = `scale(${finalScale})`
  textDiv.value.style.display = 'inline-block'
}

const updateSlotText = () => {
  if (textDiv.value) {
    slotText.value = textDiv.value.innerText.trim()
    nextTick(autoSize)
  }
}

onMounted(() => {
  nextTick(updateSlotText)
})

onUpdated(() => {
  nextTick(autoSize)
})

watch(() => avatarSize.value, updateSlotText)

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
    ref="avatarRef"
    class="f-avatar"
    :class="[
      `f-avatar--${avatarShape}`,
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
      <span ref="textDiv" class="f-avatar__text-inner">
        <slot></slot>
      </span>
    </div>
    <div
      v-if="props.triggerType"
      class="f-avatar__trigger"
      :class="`f-avatar__trigger--${props.triggerType}`"
      :style="triggerIconStyle"
      @click.stop="handleClick"
      @contextmenu.stop="handleClick"
    >
      <slot name="trigger-icon">
        <i class="ri-camera-line"></i>
      </slot>
    </div>
  </div>
</template>
