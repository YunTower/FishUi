<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">基础用法</div>
      <div class="tag-row">
        <f-check-tag v-model:checked="checked1">选项1</f-check-tag>
        <f-check-tag v-model:checked="checked2">选项2</f-check-tag>
        <f-check-tag v-model:checked="checked3">选项3</f-check-tag>
      </div>
      <div class="result">
        已选中: {{ [checked1, checked2, checked3].filter(Boolean).length }}
      </div>
    </div>
    <div class="section">
      <div class="section-title">自定义样式</div>
      <div class="tag-row">
        <f-check-tag
          v-model:checked="custom1"
          :checked-props="{ theme: 'primary' }"
          :unchecked-props="{ variant: 'outline' }"
        >
          主要
        </f-check-tag>
        <f-check-tag
          v-model:checked="custom2"
          :checked-props="{ theme: 'success' }"
          :unchecked-props="{ variant: 'outline' }"
        >
          成功
        </f-check-tag>
        <f-check-tag
          v-model:checked="custom3"
          :checked-props="{ theme: 'danger' }"
          :unchecked-props="{ variant: 'outline' }"
        >
          危险
        </f-check-tag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)

const custom1 = ref(false)
const custom2 = ref(true)
const custom3 = ref(false)
</script>

<style scoped>
.demo-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.result {
  margin-top: 8px;
  font-size: 14px;
  color: var(--color-text-2);
}
</style>
