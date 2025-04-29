<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButton :disabled="true">默认按钮</FButton>
      <FButton theme="primary" :disabled="true">主要按钮</FButton>
      <FButton theme="success" :disabled="true">成功按钮</FButton>
      <FButton theme="warning" :disabled="true">警告按钮</FButton>
      <FButton theme="danger" :disabled="true">危险按钮</FButton>
    </div>
  </div>
</template>
