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
      `f-button-group-size--${size}`,
      `f-button-group-theme--${theme}`,
      `f-button-group-shape--${shape}`,
      `f-button-group-type--${type}`,
    ]"
  >
    <slot />
  </div>
</template>
