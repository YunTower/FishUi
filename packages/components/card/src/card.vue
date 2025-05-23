<script setup lang="ts">
import type { CardProps } from './card'

defineOptions({
  name: 'FCard'
})

const props = withDefaults(defineProps<CardProps>(), {
  bordered: true,
  loading: false,
  hoverable: false,
  size: 'medium',
  headerStyle: () => ({}),
  bodyStyle: () => ({})
})
</script>

<template>
  <div
    class="f-card"
    :class="[
      `f-card-size-${size}`,
      {
        'f-card-bordered': bordered,
        'f-card-hoverable': hoverable,
        'f-card-loading': loading
      }
    ]"
  >
    <div v-if="$slots.title || title || $slots.extra || extra" class="f-card-header">
      <div v-if="$slots.title || title" class="f-card-header-title" :style="headerStyle">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="$slots.extra || extra" class="f-card-header-extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>
    <div v-if="$slots.cover" class="f-card-cover">
      <slot name="cover"></slot>
    </div>
    <div class="f-card-body" :style="bodyStyle">
      <div v-if="loading" class="f-card-loading-content">
        <div class="f-card-loading-block"></div>
        <div class="f-card-loading-block"></div>
        <div class="f-card-loading-block"></div>
      </div>
      <slot v-else></slot>
    </div>
    <div v-if="$slots.actions" class="f-card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
