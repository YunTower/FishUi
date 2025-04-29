<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButton>默认按钮</FButton>
      <FButton shape="round">圆角按钮</FButton>
      <FButton shape="circle">圆</FButton>
    </div>
    <div class="demo-content-row">
      <FButton theme="primary">默认按钮</FButton>
      <FButton theme="primary" shape="round">圆角按钮</FButton>
      <FButton theme="primary" shape="circle">圆</FButton>
    </div>
  </div>
</template>
