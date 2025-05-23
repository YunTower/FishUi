<template>
  <div class="demo-content-row">
    <f-layout>
      <f-layout-header>Header</f-layout-header>
      <f-layout has-sider>
        <f-layout-sider
          collapsible
          :width="200"
          :collapsed-width="64"
          theme="dark">
          <div class="sider-content">
            <div v-for="i in 5" :key="i">菜单项 {{ i }}</div>
          </div>
          <template #trigger="{ collapsed }">
            <div class="custom-trigger">
              {{ collapsed ? '>> 展开' : '<< 收起' }}
            </div>
          </template>
        </f-layout-sider>
        <f-layout-content>Content</f-layout-content>
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
  height: 200px;
  width: 100%;
  background-color: rgb(var(--fishblue-6));
}

:deep(.f-layout-sider) {
  background-color: var(--color-primary-light-3);
}

:deep(.sider-content) {
  padding: 12px;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

:deep(.sider-content div) {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
}

:deep(.sider-content div:hover) {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

:deep(.custom-trigger) {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  background-color: var(--color-primary-light-5);
  height: 32px;
  cursor: pointer;
}

:deep(.custom-trigger:hover) {
  background-color: var(--color-primary-light-6);
}
</style>
