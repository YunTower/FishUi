<template>
  <div>
    <f-tabs editable show-add-button @add="handleAdd" @delete="handleDelete">
      <f-tab-pane v-for="(tab, index) in tabs" :key="tab.key" :tabKey="tab.key" :title="tab.title">
        {{ tab.content }}
      </f-tab-pane>
    </f-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref([
  { key: 1, title: '标签1', content: '标签1内容' },
  { key: 2, title: '标签2', content: '标签2内容' },
  { key: 3, title: '标签3', content: '标签3内容' }
])

let newTabIndex = 4

const handleAdd = () => {
  const newTab = {
    key: newTabIndex,
    title: `新标签${newTabIndex}`,
    content: `新标签${newTabIndex}内容`
  }
  tabs.value.push(newTab)
  newTabIndex++
}

const handleDelete = (key) => {
  const targetIndex = tabs.value.findIndex(tab => tab.key === key)
  if (targetIndex > -1) {
    tabs.value.splice(targetIndex, 1)
  }
}
</script>
