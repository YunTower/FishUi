<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">预设颜色变体</div>
      <div class="tag-row">
        <f-tag variant="dark" color="red">深色红</f-tag>
        <f-tag variant="light" color="red">浅色红</f-tag>
        <f-tag variant="outline" color="red">轮廓红</f-tag>
        <f-tag variant="light-outline" color="red">浅轮廓红</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">自定义样式</div>
      <div class="tag-row">
        <f-tag class="custom-tag custom-green">自定义绿</f-tag>
        <f-tag class="custom-tag custom-purple">自定义紫</f-tag>
        <f-tag class="custom-tag custom-gradient">渐变标签</f-tag>
        <f-tag class="custom-tag custom-shadow">阴影标签</f-tag>
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

.custom-tag {
  color: white;
}

.custom-green {
  background-color: #18a058 !important;
}

.custom-purple {
  background-color: #8a2be2 !important;
}

.custom-gradient {
  background: linear-gradient(90deg, #ff7e5f, #feb47b) !important;
}

.custom-shadow {
  background-color: #1677ff !important;
  box-shadow: 0 2px 6px rgba(22, 119, 255, 0.5);
}
</style>
