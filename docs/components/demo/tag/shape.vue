<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">方形标签（默认）</div>
      <div class="tag-row">
        <f-tag shape="square">默认标签</f-tag>
        <f-tag shape="square" theme="primary">主要标签</f-tag>
        <f-tag shape="square" theme="success">成功标签</f-tag>
        <f-tag shape="square" theme="warning">警告标签</f-tag>
        <f-tag shape="square" theme="danger">危险标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">圆角标签</div>
      <div class="tag-row">
        <f-tag shape="round">默认标签</f-tag>
        <f-tag shape="round" theme="primary">主要标签</f-tag>
        <f-tag shape="round" theme="success">成功标签</f-tag>
        <f-tag shape="round" theme="warning">警告标签</f-tag>
        <f-tag shape="round" theme="danger">危险标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">标记型标签</div>
      <div class="tag-row">
        <f-tag shape="mark">默认标签</f-tag>
        <f-tag shape="mark" theme="primary">主要标签</f-tag>
        <f-tag shape="mark" theme="success">成功标签</f-tag>
        <f-tag shape="mark" theme="warning">警告标签</f-tag>
        <f-tag shape="mark" theme="danger">危险标签</f-tag>
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
