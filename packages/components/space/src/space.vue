<script setup lang="ts">
import type { SpaceProps, SpaceSize } from './space'
import { withDefaults, defineProps, useSlots, computed } from 'vue'

defineOptions({ name: 'FSpace' })

const sizeMap: Record<string, string> = {
  mini: '4px',
  small: '8px',
  medium: '16px',
  large: '24px'
}

const props = withDefaults(defineProps<SpaceProps>(), {
  align: undefined,
  direction: 'horizontal',
  size: 'small',
  wrap: false,
  fill: false
})

const slots = useSlots()
const children = computed(() => {
  const defaultSlot = slots.default?.()
  if (!defaultSlot) return []
  return defaultSlot.flatMap(child => {
    if (child.type === Symbol.for('v-fgt')) {
      return child.children || []
    }
    return [child]
  })
})

function getSize(val: SpaceSize | undefined): string {
  if (typeof val === 'number') return `${val}px`
  if (typeof val === 'string') return sizeMap[val] || val
  return sizeMap.small
}

const cssVars = computed(() => {
  let horizontal = '8px', vertical = '8px'
  if (Array.isArray(props.size)) {
    horizontal = getSize(props.size[0])
    vertical = getSize(props.size[1])
  } else {
    horizontal = vertical = getSize(props.size)
  }
  return props.direction === 'vertical'
    ? { '--f-space-row-gap': vertical, '--f-space-col-gap': '0px' }
    : { '--f-space-col-gap': horizontal, '--f-space-row-gap': vertical }
})

const flexAlign = computed(() => {
  switch (props.align) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'center':
      return 'center'
    case 'baseline':
      return 'baseline'
    default:
      return undefined
  }
})
</script>

<template>
  <div
    class="f-space"
    :class="[
      `f-space--${props.direction}`,
      { 'f-space--wrap': props.wrap, 'f-space--fill': props.fill }
    ]"
    :style="{ ...cssVars, alignItems: flexAlign }"
  >
    <template v-for="(child, idx) in children" :key="idx">
      <div class="f-space__item" :style="props.fill ? { flex: 1 } : undefined">
        <component :is="child" />
      </div>
      <template v-if="slots.split && idx < children.length - 1">
        <span class="f-space__split">
          <slot name="split" />
        </span>
      </template>
    </template>
  </div>
</template>
