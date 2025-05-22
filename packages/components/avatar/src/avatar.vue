<template>
  <div
    class="fish-avatar"
    :class="[
      `fish-avatar--${shape}`,
      `fish-avatar--${size}px`,
      { 'fish-avatar--clickable': triggerType }
    ]"
    :style="avatarStyle"
    @click="handleClick"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :style="imageStyle"
      @error="handleError"
      @load="handleLoad"
    />
    <div v-else class="fish-avatar__text" :style="textStyle">
      <slot>{{ text }}</slot>
    </div>
    <div
      v-if="triggerType"
      class="fish-avatar__trigger"
      :class="`fish-avatar__trigger--${triggerType}`"
    >
      <slot name="trigger-icon">
        <i class="ri-camera-line"></i>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { avatarProps } from './avatar'

defineProps(avatarProps)

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
  (e: 'error'): void
  (e: 'load'): void
}>()

const text = ref('')
const imageError = ref(false)

const avatarStyle = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`
  }
})

const imageStyle = computed(() => {
  return {
    objectFit: props.objectFit
  }
})

const textStyle = computed(() => {
  if (!props.autoFixFontSize) return {}

  const fontSize = Math.floor(props.size * 0.4)
  return {
    fontSize: `${fontSize}px`
  }
})

const handleClick = (ev: MouseEvent) => {
  emit('click', ev)
}

const handleError = () => {
  imageError.value = true
  emit('error')
}

const handleLoad = () => {
  emit('load')
}
</script>

<style scoped>

</style>
