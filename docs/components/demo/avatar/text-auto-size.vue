<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space align="center">
        <!-- 动态文本头像 -->
        <f-avatar :size="60" :style="{ backgroundColor }">{{ currentText }}</f-avatar>

        <!-- 控制按钮 -->
        <f-button @click="changeText">切换文本</f-button>
      </f-space>
    </div>

    <div class="demo-content-row" style="margin-top: 16px;">
      <f-space>
        <!-- 自适应对比 -->
        <div class="compare-item">
          <div class="compare-title">自适应开启</div>
          <f-avatar :size="40" :auto-fix-font-size="true">ABCDEF</f-avatar>
        </div>

        <div class="compare-item">
          <div class="compare-title">自适应关闭</div>
          <f-avatar :size="40" :auto-fix-font-size="false">ABCDEF</f-avatar>
        </div>
      </f-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 文本列表
const textList = [
  'A',
  'AB',
  'ABC',
  'ABCD',
  'ABCDE',
  'ABCDEF',
  '你好',
  '你好啊',
  '你好世界',
]

// 颜色列表
const colorList = [
  '#1677ff',
  '#13c2c2',
  '#52c41a',
  '#faad14',
  '#f5222d',
  '#722ed1',
]

const currentIndex = ref(0)
const currentText = ref(textList[0])
const backgroundColor = ref(colorList[0])

// 切换文本
const changeText = () => {
  currentIndex.value = (currentIndex.value + 1) % textList.length
  currentText.value = textList[currentIndex.value]
  backgroundColor.value = colorList[currentIndex.value % colorList.length]
}
</script>

<style scoped>
.compare-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.compare-title {
  font-size: 14px;
  color: #666;
}
</style>
