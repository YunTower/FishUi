<template>
  <f-button @click="showFullscreen">全屏加载</f-button>
  <f-loading v-if="fullscreen" fullscreen text="全屏加载" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const fullscreen = ref(false)
function showFullscreen() {
  fullscreen.value = true
  setTimeout(() => fullscreen.value = false, 3000)
}
</script>
