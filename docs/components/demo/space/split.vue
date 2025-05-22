<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space>
        <template #split>
          <span class="split-divider">|</span>
        </template>
        <f-button>按钮1</f-button>
        <f-button>按钮2</f-button>
        <f-button>按钮3</f-button>
      </f-space>
    </div>
    <div class="demo-content-row">
      <f-space>
        <template #split>
          <span class="split-arrow">→</span>
        </template>
        <f-button>上一步</f-button>
        <f-button>下一步</f-button>
        <f-button>完成</f-button>
      </f-space>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.split-divider {
  color: var(--vp-c-text-3);
  font-size: 14px;
}

.split-arrow {
  color: var(--vp-c-text-3);
  font-size: 16px;
}
</style>
