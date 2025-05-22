<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space>
        <f-trigger disabled @trigger="handleTrigger">
          <div class="demo-box">禁用状态</div>
          <template #icon>
            <i class="ri-edit-line"></i>
          </template>
        </f-trigger>

        <f-trigger type="button" disabled @trigger="handleTrigger">
          <div class="demo-box">禁用状态</div>
          <template #icon>
            <i class="ri-add-line"></i>
          </template>
        </f-trigger>
      </f-space>
    </div>
  </div>
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
