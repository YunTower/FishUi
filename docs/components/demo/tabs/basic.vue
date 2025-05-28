<template>
  <div class="demo-content">
    <f-tabs v-model:activeKey="activeKey">
      <f-tab-pane :key="'1'" title="标签1">标签1内容</f-tab-pane>
      <f-tab-pane :key="'2'" title="标签2">标签2内容</f-tab-pane>
      <f-tab-pane :key="'3'" title="标签3">标签3内容</f-tab-pane>
    </f-tabs>
    <div style="margin-top: 16px;">
      当前选中的标签：{{ activeKey }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeKey = ref('1')
</script>
