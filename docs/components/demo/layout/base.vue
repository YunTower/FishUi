<template>
  <f-layout>
    <f-layout-header>Header</f-layout-header>
    <f-layout-content>Content</f-layout-content>
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
  background-color: rgb(var(--fishblue-6));
}
</style>
