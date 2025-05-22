<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space>
        <!-- 文字头像 -->
        <f-avatar :size="40">U</f-avatar>

        <!-- 图片头像 -->
        <f-avatar :size="40" image-url="/pic.jpg" />

        <!-- 自定义背景色 -->
        <f-avatar :size="40" style="background-color: #1677ff">U</f-avatar>
      </f-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
