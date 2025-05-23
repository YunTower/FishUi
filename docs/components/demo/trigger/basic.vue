<template>
  <f-space>
    <f-trigger type="mask" @trigger="handleTrigger">
      <div class="demo-box">遮罩触发器</div>
      <template #icon>
        <i class="ri-edit-line"></i>
      </template>
    </f-trigger>

    <f-trigger type="button" @trigger="handleTrigger">
      <div class="demo-box">按钮触发器</div>
      <template #icon>
        <i class="ri-add-line"></i>
      </template>
    </f-trigger>
  </f-space>
</template>

<script lang="ts" setup>
const handleTrigger = () => {
  alert('触发器被触发')
}
</script>

<style scoped>
.demo-box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-fill-2);
  border-radius: 4px;
}
</style>
