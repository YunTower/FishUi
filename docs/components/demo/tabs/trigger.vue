<template>
  <div>
    <div class="demo-content-row" style="margin-bottom: 20px;">
      <h3>点击触发（默认）</h3>
      <f-tabs trigger="click">
        <f-tab-pane title="标签1">点击切换标签</f-tab-pane>
        <f-tab-pane title="标签2">标签2内容</f-tab-pane>
        <f-tab-pane title="标签3">标签3内容</f-tab-pane>
      </f-tabs>
    </div>
    <div class="demo-content-row">
      <h3>悬停触发</h3>
      <f-tabs trigger="hover">
        <f-tab-pane title="标签1">鼠标悬停切换标签</f-tab-pane>
        <f-tab-pane title="标签2">标签2内容</f-tab-pane>
        <f-tab-pane title="标签3">标签3内容</f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>
