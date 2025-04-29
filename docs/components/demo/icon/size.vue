<script setup lang="ts">
import FIcon from '../../../../packages/components/icon/src/icon.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FIcon name="home-line" :size="16" />
      <FIcon name="home-line" :size="24" />
      <FIcon name="home-line" :size="32" />
    </div>
    <div class="demo-content-row">
      <FIcon name="home-line" size="1em" />
      <FIcon name="home-line" size="1.5em" />
      <FIcon name="home-line" size="2em" />
    </div>
    <div class="demo-content-row">
      <FIcon name="home-line" size="16px" />
      <FIcon name="home-line" size="24px" />
      <FIcon name="home-line" size="32px" />
    </div>
  </div>
</template>
