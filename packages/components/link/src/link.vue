<script setup lang="ts">
import type { LinkProps } from './link.ts'

defineOptions({
  name: 'FLink',
})

const props = withDefaults(defineProps<LinkProps>(), {
  content: '',
  disabled: false,
  download: undefined,
  href: '',
  size: 'medium',
  theme: 'default',
  target: undefined,
  underline: 'hover',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return
  emit('click', event)
}
</script>

<template>
  <a
    class="f-link"
    :class="[
      `f-link-size--${size}`,
      `f-link-theme--${theme}`,
      {
        'f-link--disabled': disabled,
        [`f-link--underline-${underline}`]: underline,
      },
    ]"
    :href="disabled ? undefined : href"
    :target="target"
    :download="download"
    :tabindex="disabled ? -1 : undefined"
    @click="handleClick"
  >
    <span v-if="$slots.prefixIcon" class="f-link__prefix-icon">
      <slot name="prefixIcon" />
    </span>
    <slot>{{ content }}</slot>
    <span v-if="$slots.suffixIcon" class="f-link__suffix-icon">
      <slot name="suffixIcon" />
    </span>
  </a>
</template>
