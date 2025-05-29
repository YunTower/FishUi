<template>
  <div>
    <f-tabs v-model:activeKey="activeKey">
      <f-tab-pane :tabKey="'1'" title="标签1">标签1内容</f-tab-pane>
      <f-tab-pane :tabKey="'2'" title="标签2">标签2内容</f-tab-pane>
      <f-tab-pane :tabKey="'3'" title="标签3">标签3内容</f-tab-pane>
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
