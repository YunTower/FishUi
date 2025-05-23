<template>
  <div class="demo-content-row">
    <f-layout>
      <f-layout-header>Header</f-layout-header>
      <f-layout has-sider>
        <f-layout-sider theme="dark" style="width: 150px;">
          Sider
        </f-layout-sider>
        <f-layout>
          <f-layout-header style="height: 48px; line-height: 48px;">
            Sub Header
          </f-layout-header>
          <f-layout has-sider>
            <f-layout-content>
              <div style="padding: 16px;">Content</div>
            </f-layout-content>
            <f-layout-sider style="width: 120px; background-color: var(--color-primary-light-2);">
              Sub Sider
            </f-layout-sider>
          </f-layout>
          <f-layout-footer style="height: 48px; line-height: 48px;">
            Sub Footer
          </f-layout-footer>
        </f-layout>
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

:deep(.f-layout) {
  color: white;
}
</style>
