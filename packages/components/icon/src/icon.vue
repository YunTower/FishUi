<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './icon'

defineOptions({
  name: 'FIcon',
})

const props = defineProps(iconProps)

const iconStyle = computed(() => {
  const style: Record<string, string> = {
    color: props.color,
  }

  if (typeof props.size === 'number') {
    style.fontSize = `${props.size}px`
  } else {
    style.fontSize = props.size
  }

  return style
})

const iconClass = computed(() => {
  return ['ri-' + props.name]
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <i class="f-icon" :class="iconClass" :style="iconStyle" @click="handleClick"></i>
</template>
