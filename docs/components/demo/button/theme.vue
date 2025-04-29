<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButton>默认按钮</FButton>
      <FButton theme="primary">主要按钮</FButton>
      <FButton theme="success">成功按钮</FButton>
      <FButton theme="warning">警告按钮</FButton>
      <FButton theme="danger">危险按钮</FButton>
    </div>
    <div class="demo-content-row">
      <FButton type="outline">默认按钮</FButton>
      <FButton type="outline" theme="primary">主要按钮</FButton>
      <FButton type="outline" theme="success">成功按钮</FButton>
      <FButton type="outline" theme="warning">警告按钮</FButton>
      <FButton type="outline" theme="danger">危险按钮</FButton>
    </div>
    <div class="demo-content-row">
      <FButton type="text">文本按钮</FButton>
      <FButton type="text" theme="primary">主要按钮</FButton>
      <FButton type="text" theme="success">成功按钮</FButton>
      <FButton type="text" theme="warning">警告按钮</FButton>
      <FButton type="text" theme="danger">危险按钮</FButton>
    </div>
  </div>
</template>
