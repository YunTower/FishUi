<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const collapsed = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
  collapsed.value = isMobile.value
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div class="demo-content-row">
    <f-layout>
      <f-layout-header>
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 16px;">Header</span>
          <span v-if="isMobile" @click="collapsed = !collapsed" style="cursor: pointer;">
            {{ collapsed ? '点击展开菜单' : '点击收起菜单' }}
          </span>
        </div>
      </f-layout-header>
      <f-layout has-sider>
        <f-layout-sider
          :collapsed="collapsed"
          :width="200"
          :collapsed-width="0"
          theme="dark">
          <div class="sider-content">
            <div v-for="i in 5" :key="i">菜单项 {{ i }}</div>
          </div>
        </f-layout-sider>
        <f-layout-content>
          <div style="padding: 16px;">
            <p>调整浏览器窗口大小查看响应式效果</p>
            <p>当前状态: {{ isMobile ? '移动端' : '桌面端' }}</p>
          </div>
        </f-layout-content>
      </f-layout>
      <f-layout-footer>Footer</f-layout-footer>
    </f-layout>
  </div>
</template>

<style scoped>
:deep(.f-layout-header), :deep(.f-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

:deep(.f-layout-content) {
  width: 100%;
  background-color: rgb(var(--fishblue-6));
}

:deep(.f-layout-sider) {
  background-color: var(--color-primary-light-3);
}

:deep(.sider-content) {
  padding: 12px;
  color: white;
}

:deep(.sider-content div) {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
}
</style>
