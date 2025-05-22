<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space>
        <f-trigger :trigger="['click', 'hover']" @trigger="handleTrigger">
          <div class="demo-box">点击或悬浮触发</div>
          <template #icon>
            <i class="ri-edit-line"></i>
          </template>
        </f-trigger>

        <f-trigger :trigger="['hover', 'focus']" @trigger="handleTrigger">
          <div class="demo-box">悬浮或聚焦触发</div>
          <template #icon>
            <i class="ri-edit-line"></i>
          </template>
        </f-trigger>

        <f-trigger :trigger="['click', 'hover', 'focus']" @trigger="handleTrigger">
          <div class="demo-box">所有方式触发</div>
          <template #icon>
            <i class="ri-edit-line"></i>
          </template>
        </f-trigger>
      </f-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleTrigger = (event: Event) => {
  alert(`触发器被触发，事件类型: ${event.type}`)
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
