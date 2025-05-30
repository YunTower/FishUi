<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">单选模式</div>
      <f-check-tag-group v-model:value="singleValue" :options="options" />
      <div class="result">已选中: {{ singleValue }}</div>
    </div>
    <div class="section">
      <div class="section-title">多选模式</div>
      <f-check-tag-group
        v-model:value="multipleValue"
        :options="options"
        multiple
      />
      <div class="result">已选中: {{ multipleValue }}</div>
    </div>
    <div class="section">
      <div class="section-title">自定义样式</div>
      <f-check-tag-group
        v-model:value="customValue"
        :options="options"
        multiple
        :checked-props="{ theme: 'primary' }"
        :unchecked-props="{ variant: 'outline' }"
      />
      <div class="result">已选中: {{ customValue }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CheckTagGroupOption } from '@/components/tag'

const options: CheckTagGroupOption[] = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4', disabled: true },
  { label: '选项5', value: '5' }
]

const singleValue = ref(['1'])
const multipleValue = ref(['1', '3'])
const customValue = ref(['2', '5'])
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

.result {
  margin-top: 8px;
  font-size: 14px;
  color: var(--color-text-2);
}
</style>
