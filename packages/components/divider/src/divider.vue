<script setup lang="ts">
import { computed } from 'vue'
import { dividerProps } from './divider'

defineOptions({
  name: 'FDivider'
})

const props = defineProps(dividerProps)
const slots = defineSlots()

const dividerClass = computed(() => [
  'f-divider',
  `f-divider--${props.direction}`,
  `f-divider-type--${props.type}`,
  {
    'f-divider-with-text': !!slots.default,
    [`f-divider-orientation--${props.orientation}`]: !!slots.default,
  },
])

const dividerStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.direction === 'horizontal') {
    if (props.size) style.borderTopWidth = props.size + 'px'
    if (props.margin !== undefined) {
      style.margin = `${props.margin}${typeof props.margin === 'number' ? 'px' : ''} 0`;
    }
  } else {
    if (props.size) style.borderLeftWidth = props.size + 'px'
    if (props.margin !== undefined) {
      style.margin = `0 ${props.margin}${typeof props.margin === 'number' ? 'px' : ''}`;
    }
    style.height = '100%'
    style.alignSelf = 'stretch'
  }
  return style
})
</script>

<template>
  <div :class="dividerClass" :style="dividerStyle">
    <template v-if="slots.default && props.direction === 'horizontal'">
      <span class="f-divider__text">
        <slot />
      </span>
    </template>
  </div>
</template>
