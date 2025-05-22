<script lang="ts" setup>
import { computed, provide, ref, toRef, h, Fragment } from 'vue'
import type { CSSProperties, VNode, Slots } from 'vue'
import type { TriggerProps } from '../popover'
import { avatarGroupProps } from './avatar-group'
import FAvatar from './avatar.vue'

defineProps(avatarGroupProps)

const total = ref(0)

// 提供给子组件的上下文
provide('avatar-group', {
  shape: toRef(props, 'shape'),
  size: toRef(props, 'size'),
  autoFixFontSize: toRef(props, 'autoFixFontSize'),
  zIndexAscend: toRef(props, 'zIndexAscend'),
  total,
  increment: () => total.value++,
  decrement: () => total.value--
})

// 头像重叠比例
const overlapPercent = 0.1

// 处理slot子节点，生成重叠头像和+N
const renderAvatars = (slots: Slots) => {
  const children = slots.default ? slots.default().filter(v => v.type && v.type !== Comment) : []
  const max = props.maxCount || children.length
  const showList = children.slice(0, max)
  const extra = children.length - max
  const avatars = showList.map((v, i) => {
    return h('div', {
      class: 'fish-avatar-group__item',
      style: {
        marginLeft: i === 0 ? 0 : `-${overlapPercent * 100}%`,
        zIndex: props.zIndexAscend ? i : showList.length - i
      }
    }, [v])
  })
  if (extra > 0) {
    avatars.push(h('div', {
      class: 'fish-avatar-group__item',
      style: {
        marginLeft: `-${overlapPercent * 100}%`,
        zIndex: 0
      }
    }, [
      h(FAvatar, {
        size: props.size,
        shape: props.shape,
        style: { background: '#888', color: '#fff' }
      }, {
        default: () => `+${extra}`
      })
    ]))
  }
  return avatars
}
</script>

<template>
  <div class="fish-avatar-group">
    <slot v-if="false"></slot>
    <component :is="Fragment">
      <template v-for="item in renderAvatars($slots)">
        <component :is="item" />
      </template>
    </component>
  </div>
</template>

<style scoped>
.fish-avatar-group {
  display: inline-flex;
  align-items: center;
}
.fish-avatar-group__item {
  display: inline-flex;
  align-items: center;
}
</style>
