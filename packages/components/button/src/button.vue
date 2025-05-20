<script setup lang="ts">
import type { ButtonProps } from './button.ts'

defineOptions({
  name: 'FButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  theme: 'default',
  shape: 'default',
  type: 'default',
  loading: false,
  long: false,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (props.loading || props.disabled) return
  emit('click', event)
}
</script>

<template>
  <button
    class="f-button"
    :class="[
      `f-button--${size}`,
      `f-button--${theme}`,
      `f-button--${shape}`,
      `f-button--${type}`,
      {
        'f-button--loading': loading,
        'f-button--long': long,
        'f-button--disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="loading" class="f-button__loading">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 331.008a32 32 0 0 1-45.248-45.248l135.808-135.68a32 32 0 0 1 45.248 0zM376.32 647.744a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.872-135.808a32 32 0 0 1 45.248 0z"
        />
      </svg>
    </span>
    <slot />
  </button>
</template>

<style scoped>
@import './button.css';
</style>
