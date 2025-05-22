<script lang="ts" setup>
import { computed, provide, ref, toRef } from 'vue'
import type { CSSProperties } from 'vue'
import type { TriggerProps } from '../popover'
import { avatarGroupProps } from './avatar-group'

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
</script>

<template>
  <div class="fish-avatar-group">
    <slot></slot>
    <div
      v-if="maxCount && total > maxCount"
      class="fish-avatar-group__max"
      :style="maxStyle"
    >
      <fish-popover
        v-if="maxPopoverTriggerProps"
        v-bind="maxPopoverTriggerProps"
      >
        <template #trigger>
          <div class="fish-avatar-group__max-count">
            +{{ total - maxCount }}
          </div>
        </template>
        <div class="fish-avatar-group__popover">
          <slot name="max-content">
            <div
              v-for="(_, index) in total - maxCount"
              :key="index"
              class="fish-avatar-group__popover-item"
            >
              <slot :name="`max-${index}`"></slot>
            </div>
          </slot>
        </div>
      </fish-popover>
      <div v-else class="fish-avatar-group__max-count">
        +{{ total - maxCount }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
