<template>
  <div class="demo-avatar">
    <f-avatar :size="40">U</f-avatar>
    <f-avatar :size="40" image-url="https://example.com/avatar.jpg" />
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.demo-avatar {
  display: flex;
  gap: 16px;
}
</style>
