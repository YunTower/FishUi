<script setup lang="ts">
import type { ButtonGroupProps } from './button-group'

defineOptions({
  name: 'FButtonGroup',
})

withDefaults(defineProps<ButtonGroupProps>(), {
  size: 'medium',
  theme: 'default',
  shape: 'default',
  type: 'default',
})
</script>

<template>
  <div
    class="f-button-group"
    :class="[
      `f-button-group--${size}`,
      `f-button-group--${theme}`,
      `f-button-group--${shape}`,
      `f-button-group--${type}`,
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
@import './button-group.css';
</style>
