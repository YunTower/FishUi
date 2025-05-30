<template>
  <div class="demo-content">
    <f-tag v-for="(tag, index) in tags" :key="index" closable @close="handleClose(index)">
      {{ tag }}
    </f-tag>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['标签1', '标签2', '标签3', '标签4'])

const handleClose = (index: number) => {
  tags.value.splice(index, 1)
}
</script>

<style scoped>
.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
