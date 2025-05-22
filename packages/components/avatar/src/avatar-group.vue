<script setup lang="ts">
import type { AvatarGroupProps } from './avatar-group'
import { withDefaults, defineProps, provide, computed, ref, onMounted, nextTick } from 'vue'
import FAvatar from './avatar.vue'

// 组件名
defineOptions({
  name: 'FAvatarGroup'
})

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  shape: 'circle',
  size: 40,
  maxCount: 0,
  zIndexAscend: false,
  autoFixFontSize: true,
  extraAvatarStyle: () => ({})
})

// 计算尺寸类名
const sizeClass = computed(() => {
  if (typeof props.size === 'number') {
    if (props.size <= 32) return 'f-avatar-group--small'
    if (props.size >= 48) return 'f-avatar-group--large'
    return 'f-avatar-group--medium'
  }

  switch (props.size) {
    case 'mini':
    case 'small':
      return 'f-avatar-group--small'
    case 'large':
      return 'f-avatar-group--large'
    case 'medium':
    default:
      return 'f-avatar-group--medium'
  }
})

// 获取所有子元素
const avatarGroup = ref<HTMLElement | null>(null)
const avatars = ref<HTMLElement[]>([])

// 收集子元素并设置z-index
const updateAvatarsZIndex = () => {
  if (!avatarGroup.value) return

  // 获取所有子头像元素
  const children = Array.from(avatarGroup.value.querySelectorAll('.f-avatar'))
  avatars.value = children as HTMLElement[]

  // 设置z-index，确保后面的头像在上层
  if (avatars.value.length > 0) {
    avatars.value.forEach((avatar, index) => {
      // 升序：后面的头像层级更高
      avatar.style.zIndex = String(index + 1)
    })
  }
}

onMounted(() => {
  nextTick(updateAvatarsZIndex)
})

// 计算需要显示的头像和额外数量
const visibleAvatars = computed(() => {
  if (props.maxCount <= 0 || avatars.value.length <= props.maxCount) {
    return {
      visible: avatars.value,
      extra: 0
    }
  }

  return {
    visible: avatars.value.slice(0, props.maxCount),
    extra: avatars.value.length - props.maxCount
  }
})

// 提供给子组件的上下文
provide('avatar-group', {
  shape: computed(() => props.shape),
  size: computed(() => props.size),
  autoFixFontSize: computed(() => props.autoFixFontSize)
})
</script>

<template>
  <div
    ref="avatarGroup"
    class="f-avatar-group"
    :class="[sizeClass]"
  >
    <slot></slot>
    <template v-if="visibleAvatars.extra > 0">
      <f-avatar
        :size="props.size"
        :shape="props.shape"
        class="f-avatar-group__extra"
        :style="{
          background: 'var(--color-fill-4, #c0c4cc)', // 默认背景色
          color: '#fff',
          ...props.extraAvatarStyle,
          zIndex: avatars.length + 1
        }"
      >
        +{{ visibleAvatars.extra }}
      </f-avatar>
    </template>
  </div>
</template>
