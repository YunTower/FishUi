<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">超长文本省略</div>
      <div class="tag-row">
        <f-tag nowrap :max-width="100">这是一个很长很长很长很长很长很长的标签</f-tag>
        <f-tag nowrap :max-width="150" theme="primary">这是一个很长很长很长很长很长很长的标签</f-tag>
        <f-tag nowrap :max-width="200" theme="success">这是一个很长很长很长很长很长很长的标签</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">不同尺寸的超长文本</div>
      <div class="tag-row">
        <f-tag nowrap :max-width="100" size="small">小尺寸超长省略标签</f-tag>
        <f-tag nowrap :max-width="150" size="medium">中尺寸超长省略标签</f-tag>
        <f-tag nowrap :max-width="200" size="large">大尺寸超长省略标签</f-tag>
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
