<script setup lang="ts">
import FLink from '../../../../packages/components/link/src/link.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="default" :disabled="true">
        默认链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="primary" :disabled="true">
        主要链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="danger" :disabled="true">
        危险链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="warning" :disabled="true">
        警告链接
      </FLink>
      <FLink href="https://github.com/YunTower/FishUi" target="_blank" theme="success" :disabled="true">
        成功链接
      </FLink>
    </div>
  </div>
</template>

