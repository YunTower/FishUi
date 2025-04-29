<script setup lang="ts">
import FLink from '../../../../packages/components/link/src/link.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" underline="always">
        始终显示下划线
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" underline="hover">
        悬浮时显示下划线
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" underline="none">
        不显示下划线
      </FLink>
    </div>
  </div>
</template>

<style scoped>
.demo-content {
  padding: 20px;
}

.demo-content-row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
</style>
