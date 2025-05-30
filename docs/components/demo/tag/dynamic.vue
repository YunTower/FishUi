<template>
  <div class="demo-content-row">
    <div class="control-panel">
      <input
        v-model="inputValue"
        class="tag-input-field"
        placeholder="请输入标签内容"
        @keyup.enter="handleAdd"
      />
      <button class="add-button" @click="handleAdd">添加</button>
    </div>
    <div class="tag-container">
      <f-tag
        v-for="(tag, index) in tags"
        :key="index"
        :theme="tag.theme"
        closable
        @close="handleRemove(index)"
      >
        {{ tag.text }}
      </f-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TagItem {
  text: string
  theme: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

const themes: Array<'default' | 'primary' | 'success' | 'warning' | 'danger'> = [
  'default', 'primary', 'success', 'warning', 'danger'
]

const tags = ref<TagItem[]>([
  { text: '标签1', theme: 'default' },
  { text: '标签2', theme: 'primary' },
  { text: '标签3', theme: 'success' }
])

const inputValue = ref('')

const handleAdd = () => {
  if (inputValue.value.trim()) {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)]
    tags.value.push({
      text: inputValue.value.trim(),
      theme: randomTheme
    })
    inputValue.value = ''
  }
}

const handleRemove = (index: number) => {
  tags.value.splice(index, 1)
}
</script>

<style scoped>
.demo-content-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.control-panel {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.tag-input-field {
  flex: 1;
  height: 32px;
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
  padding: 0 12px;
  outline: none;
  transition: all 0.2s;
}

.tag-input-field:focus {
  border-color: rgba(var(--primary-6));
}

.add-button {
  height: 32px;
  background-color: rgba(var(--primary-6));
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.add-button:hover {
  background-color: rgba(var(--primary-5));
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
