<template>
  <div>
    <f-tabs v-model:activeTab="activeTab">
      <f-tab-pane title="标签1">标签1内容</f-tab-pane>
      <f-tab-pane title="标签2">标签2内容</f-tab-pane>
      <f-tab-pane title="标签3">标签3内容</f-tab-pane>
    </f-tabs>
    <div style="margin-top: 16px;">
      当前选中的标签：{{ activeTab }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('1')
</script>
