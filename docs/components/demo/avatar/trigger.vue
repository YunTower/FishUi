<template>
  <div class="demo-avatar">
    <f-avatar
      :size="40"
      trigger-type="mask"
      @click="handleClick"
    >
      <template #trigger-icon>
        <i class="ri-camera-line"></i>
      </template>
      U
    </f-avatar>
    <f-avatar
      :size="40"
      trigger-type="button"
      @click="handleClick"
    >
      <template #trigger-icon>
        <i class="ri-camera-line"></i>
      </template>
      U
    </f-avatar>
  </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
  alert('avatar clicked')
}
</script>

<style scoped>
.demo-avatar {
  display: flex;
  gap: 16px;
}
</style>
