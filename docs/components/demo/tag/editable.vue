<template>
  <div class="demo-content-row">
    <div class="tag-container">
      <f-tag
        v-for="(tag, index) in tags"
        :key="index"
        closable
        @close="handleClose(index)"
      >
        {{ tag }}
      </f-tag>
      <f-tag v-if="inputVisible" class="tag-input">
        <input
          ref="inputRef"
          v-model="inputValue"
          class="tag-input-field"
          @blur="handleInputConfirm"
          @keyup.enter="handleInputConfirm"
        />
      </f-tag>
      <f-tag v-else theme="primary" class="tag-add" @click="showInput">
        <span class="tag-add-icon">+</span> 添加标签
      </f-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const tags = ref(['标签1', '标签2', '标签3'])
const inputVisible = ref(false)
const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const handleClose = (index: number) => {
  tags.value.splice(index, 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    inputRef.value?.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    tags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>

<style scoped>
.demo-content-row {
  display: flex;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.tag-input-field {
  border: none;
  outline: none;
  background: transparent;
  height: 20px;
  min-width: 80px;
  font-size: 12px;
}

.tag-add-icon {
  margin-right: 4px;
}
</style>
