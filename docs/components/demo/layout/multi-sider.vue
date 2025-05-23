<template>
  <f-layout>
    <f-layout-header>Header</f-layout-header>
    <f-layout has-sider>
      <f-layout-sider style="width: 64px;">Sider</f-layout-sider>
      <f-layout-sider style="width: 206px; margin-left: 1px;">Sider</f-layout-sider>
      <f-layout-content>Content</f-layout-content>
    </f-layout>
    <f-layout-footer>Footer</f-layout-footer>
  </f-layout>
</template>
<style scoped>
:deep(.f-layout-header), :deep(.f-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

:deep(.f-layout-content) {
  height: 128px;
  width: 100%;
  background-color: rgb(var(--fishblue-6));
}

:deep(.f-layout-sider) {
  background-color: var(--color-primary-light-3);
}
</style>
