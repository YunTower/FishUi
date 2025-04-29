<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButton :long="true">默认按钮</FButton>
      <FButton theme="primary" :long="true">主要按钮</FButton>
      <FButton theme="success" :long="true">成功按钮</FButton>
      <FButton theme="warning" :long="true">警告按钮</FButton>
      <FButton theme="danger" :long="true">危险按钮</FButton>
    </div>
  </div>
</template>
