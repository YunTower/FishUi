<template>
  <div>
    <div class="demo-content-row">
      <h3>线性标签（默认）</h3>
      <f-tabs type="line">
        <f-tab-pane title="标签1">线性标签内容 - 线性标签是最常用的标签类型，底部有下划线指示当前选中的标签。</f-tab-pane>
        <f-tab-pane title="标签2">标签2内容</f-tab-pane>
        <f-tab-pane title="标签3">标签3内容</f-tab-pane>
      </f-tabs>
    </div>
    <div class="demo-content-row">
      <h3>卡片标签</h3>
      <f-tabs type="card">
        <f-tab-pane title="标签1">卡片标签内容 - 卡片标签像文件夹一样，将内容区域包裹起来，适合需要明确分组的场景。</f-tab-pane>
        <f-tab-pane title="标签2">标签2内容</f-tab-pane>
        <f-tab-pane title="标签3">标签3内容</f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>

<style scoped>
.demo-content-row {
  margin-bottom: 20px;
}

.demo-content-row h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-1);
}
</style>
