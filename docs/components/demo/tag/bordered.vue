<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">默认标签 + 边框</div>
      <div class="tag-row">
        <f-tag bordered>默认标签</f-tag>
        <f-tag bordered theme="primary">主要标签</f-tag>
        <f-tag bordered theme="success">成功标签</f-tag>
        <f-tag bordered theme="warning">警告标签</f-tag>
        <f-tag bordered theme="danger">危险标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">轮廓型标签</div>
      <div class="tag-row">
        <f-tag variant="outline">默认标签</f-tag>
        <f-tag variant="outline" theme="primary">主要标签</f-tag>
        <f-tag variant="outline" theme="success">成功标签</f-tag>
        <f-tag variant="outline" theme="warning">警告标签</f-tag>
        <f-tag variant="outline" theme="danger">危险标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">浅色轮廓型标签</div>
      <div class="tag-row">
        <f-tag variant="light-outline">默认标签</f-tag>
        <f-tag variant="light-outline" theme="primary">主要标签</f-tag>
        <f-tag variant="light-outline" theme="success">成功标签</f-tag>
        <f-tag variant="light-outline" theme="warning">警告标签</f-tag>
        <f-tag variant="light-outline" theme="danger">危险标签</f-tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
