<script setup lang="ts">
import FLink from '../../../../packages/components/link/src/link.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" hover="underline"
        >下划线悬浮态</FLink
      >
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" hover="color"
        >颜色变化悬浮态</FLink
      >
    </div>
    <div class="demo-content-row">
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" underline
        >默认显示下划线</FLink
      >
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" underline hover="color"
        >默认显示下划线，悬浮时颜色变化</FLink
      >
    </div>
  </div>
</template>
