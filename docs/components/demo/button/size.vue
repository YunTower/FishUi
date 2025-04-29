<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButton size="small">小按钮</FButton>
      <FButton>默认按钮</FButton>
      <FButton size="large">大按钮</FButton>
    </div>
    <div class="demo-content-row">
      <FButton size="small" shape="round">小按钮</FButton>
      <FButton shape="round">默认按钮</FButton>
      <FButton size="large" shape="round">大按钮</FButton>
    </div>
    <div class="demo-content-row">
      <FButton size="small" shape="circle">小</FButton>
      <FButton shape="circle">默</FButton>
      <FButton size="large" shape="circle">大</FButton>
    </div>
  </div>
</template>
