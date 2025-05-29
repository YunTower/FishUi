<script setup lang="ts">
import type { BadgeGroupProps } from './badge-group'
import { computed } from 'vue'

defineOptions({
  name: 'FBadgeGroup'
})

const props = withDefaults(defineProps<BadgeGroupProps>(), {
  gap: 8,
  direction: 'horizontal'
})

const groupStyle = computed(() => {
  const style: Record<string, any> = {}

  // 设置间距
  if (props.gap !== undefined) {
    const gap = typeof props.gap === 'number' ? `${props.gap}px` : props.gap
    style.gap = gap
  }

  return style
})
</script>

<template>
  <div
    class="f-badge-group"
    :class="[`f-badge-group--${direction}`]"
    :style="groupStyle"
  >
    <slot></slot>
  </div>
</template>

<style>
.f-badge-group {
  display: inline-flex;
  align-items: center;
}

.f-badge-group--horizontal {
  flex-direction: row;
}

.f-badge-group--vertical {
  flex-direction: column;
  align-items: flex-start;
}

.f-badge-group .f-badge {
  margin: 0;
}
</style>
