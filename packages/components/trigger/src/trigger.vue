<script setup lang="ts">
import type { TriggerProps } from './trigger'
import { withDefaults, defineProps, defineEmits, computed, ref } from 'vue'

// 组件名
defineOptions({
  name: 'FTrigger'
})

const props = withDefaults(defineProps<TriggerProps>(), {
  trigger: () => ['click'],
  type: 'mask',
  disabled: false,
  iconStyle: () => ({})
})

const emit = defineEmits<{
  (e: 'trigger', ev: Event): void
}>()

const isActive = ref(false)

const triggerList = computed(() => {
  if (typeof props.trigger === 'string') {
    return [props.trigger]
  }
  return props.trigger
})

const iconStyle = computed(() => ({
  ...props.iconStyle,
  transition: 'var(--f-trigger-transition-duration, 0.2s)'
}))

const handleClick = (ev: MouseEvent) => {
  if (props.disabled) return

  if (triggerList.value.includes('click')) {
    if (props.type === 'mask') {
      isActive.value = !isActive.value
    }
    emit('trigger', ev)
  }
}

const handleContextMenu = (ev: MouseEvent) => {
  if (props.disabled) return

  if (props.type === 'button' && triggerList.value.includes('click')) {
    ev.preventDefault()
    emit('trigger', ev)
  }
}

const handleMouseEnter = (ev: MouseEvent) => {
  if (props.disabled) return

  if (triggerList.value.includes('hover')) {
    emit('trigger', ev)
  }
}

const handleFocus = (ev: FocusEvent) => {
  if (props.disabled) return

  if (triggerList.value.includes('focus')) {
    emit('trigger', ev)
  }
}
</script>

<template>
  <div
    class="f-trigger"
    :class="{
      'f-trigger--active': isActive,
      'f-trigger--disabled': props.disabled
    }"
    @click="handleClick"
    @contextmenu="handleContextMenu"
    @mouseenter="handleMouseEnter"
    @focus="handleFocus"
    tabindex="0"
  >
    <div class="f-trigger__content">
      <slot></slot>
    </div>
    <div
      class="f-trigger__overlay"
      :class="[
        `f-trigger__overlay--${props.type}`,
        ...triggerList.map(t => `f-trigger__overlay--${t}`)
      ]"
      :style="iconStyle"
      @click.stop="handleClick"
      @contextmenu.stop="handleContextMenu"
    >
      <slot name="icon">
        <i class="ri-camera-line"></i>
      </slot>
    </div>
  </div>
</template>

<style scoped>
@import './trigger.css';
</style>
