<script setup lang="ts">
import type { CardMetaProps } from './card-meta'
import { withDefaults } from 'vue'

defineOptions({
  name: 'FCardMeta'
})

const props = withDefaults(defineProps<CardMetaProps>(), {})
</script>

<template>
  <div class="f-card-meta">
    <div v-if="$slots.avatar" class="f-card-meta-avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="f-card-meta-detail">
      <div v-if="$slots.title || props.title" class="f-card-meta-title">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div v-if="$slots.description || props.description" class="f-card-meta-description">
        <slot name="description">{{ props.description }}</slot>
      </div>
    </div>
  </div>
</template>
