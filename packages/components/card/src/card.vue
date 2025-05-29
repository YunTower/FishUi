<script setup lang="ts">
import type { CardProps } from './card'
import { withDefaults } from 'vue'

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
      `f-card-size-${props.size}`,
      {
        'f-card-bordered': props.bordered,
        'f-card-hoverable': props.hoverable,
        'f-card-loading': props.loading
      }
    ]"
  >
    <div v-if="$slots.title || props.title || $slots.extra || props.extra" class="f-card-header">
      <div v-if="$slots.title || props.title" class="f-card-header-title" :style="props.headerStyle">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div v-if="$slots.extra || props.extra" class="f-card-header-extra">
        <slot name="extra">{{ props.extra }}</slot>
      </div>
    </div>
    <div v-if="$slots.cover" class="f-card-cover">
      <slot name="cover"></slot>
    </div>
    <div class="f-card-body" :style="props.bodyStyle">
      <div v-if="props.loading" class="f-card-loading-content">
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
