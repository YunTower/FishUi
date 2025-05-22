<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space>
        <f-trigger trigger="click" @trigger="handleTrigger('click')">
          <div class="demo-box">点击触发</div>
          <template #icon>
            <i class="ri-mouse-line"></i>
          </template>
        </f-trigger>

        <f-trigger trigger="hover" @trigger="handleTrigger('hover')">
          <div class="demo-box">悬浮触发</div>
          <template #icon>
            <i class="ri-cursor-line"></i>
          </template>
        </f-trigger>

        <f-trigger trigger="focus" @trigger="handleTrigger('focus')">
          <div class="demo-box">聚焦触发</div>
          <template #icon>
            <i class="ri-focus-3-line"></i>
          </template>
        </f-trigger>
      </f-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleTrigger = (type: string) => {
  alert(`${type}触发器被触发`)
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
