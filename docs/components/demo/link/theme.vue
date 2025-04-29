<script setup lang="ts">
import FLink from '../../../../packages/components/link/src/link.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="default">
        默认链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="primary">
        主要链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="danger">
        危险链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="warning">
        警告链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="success">
        成功链接
      </FLink>
    </div>
  </div>
</template>
