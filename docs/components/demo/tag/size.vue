<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">小型标签</div>
      <div class="tag-row">
        <f-tag size="small">默认标签</f-tag>
        <f-tag size="small" theme="primary">主要标签</f-tag>
        <f-tag size="small" theme="success">成功标签</f-tag>
        <f-tag size="small" theme="warning">警告标签</f-tag>
        <f-tag size="small" theme="danger">危险标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">中型标签 (默认)</div>
      <div class="tag-row">
        <f-tag size="medium">默认标签</f-tag>
        <f-tag size="medium" theme="primary">主要标签</f-tag>
        <f-tag size="medium" theme="success">成功标签</f-tag>
        <f-tag size="medium" theme="warning">警告标签</f-tag>
        <f-tag size="medium" theme="danger">危险标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">大型标签</div>
      <div class="tag-row">
        <f-tag size="large">默认标签</f-tag>
        <f-tag size="large" theme="primary">主要标签</f-tag>
        <f-tag size="large" theme="success">成功标签</f-tag>
        <f-tag size="large" theme="warning">警告标签</f-tag>
        <f-tag size="large" theme="danger">危险标签</f-tag>
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
  align-items: center;
}
</style>
