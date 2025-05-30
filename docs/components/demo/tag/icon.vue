<template>
  <div class="demo-content">
    <f-tag>
      <template #icon>
        <i class="ri-home-line"></i>
      </template>
      首页
    </f-tag>
    <f-tag theme="primary">
      <template #icon>
        <i class="ri-user-line"></i>
      </template>
      用户
    </f-tag>
    <f-tag theme="success">
      <template #icon>
        <i class="ri-check-line"></i>
      </template>
      成功
    </f-tag>
    <f-tag theme="warning">
      <template #icon>
        <i class="ri-alert-line"></i>
      </template>
      警告
    </f-tag>
    <f-tag theme="danger">
      <template #icon>
        <i class="ri-close-circle-line"></i>
      </template>
      错误
    </f-tag>
  </div>
</template>

<style scoped>
.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
