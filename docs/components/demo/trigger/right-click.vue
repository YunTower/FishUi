<template>
  <f-space>
    <f-trigger type="button" @trigger="handleTrigger">
      <div class="demo-box">左键或右键点击</div>
      <template #icon>
        <i class="ri-more-line"></i>
      </template>
    </f-trigger>
  </f-space>
</template>

<script lang="ts" setup>
const handleTrigger = (event: Event) => {
  if (event instanceof MouseEvent) {
    const buttonType = event.type === 'contextmenu' ? '右键' : '左键'
    alert(`触发器被${buttonType}点击`)
  }
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
