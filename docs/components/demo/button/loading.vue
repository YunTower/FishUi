<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButton :loading="true">默认按钮</FButton>
      <FButton theme="primary" :loading="true">主要按钮</FButton>
      <FButton theme="success" :loading="true">成功按钮</FButton>
      <FButton theme="warning" :loading="true">警告按钮</FButton>
      <FButton theme="danger" :loading="true">危险按钮</FButton>
    </div>
  </div>
</template>
