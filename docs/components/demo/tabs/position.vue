<template>
  <div>
    <div class="demo-content-row" style="margin-bottom: 20px;">
      <h3>顶部位置（默认）</h3>
      <f-tabs position="top">
        <f-tab-pane title="标签1">标签1内容</f-tab-pane>
        <f-tab-pane title="标签2">标签2内容</f-tab-pane>
        <f-tab-pane title="标签3">标签3内容</f-tab-pane>
      </f-tabs>
    </div>
    <div class="demo-content-row" style="margin-bottom: 20px;">
      <h3>底部位置</h3>
      <f-tabs position="bottom">
        <f-tab-pane title="标签1">标签1内容</f-tab-pane>
        <f-tab-pane title="标签2">标签2内容</f-tab-pane>
        <f-tab-pane title="标签3">标签3内容</f-tab-pane>
      </f-tabs>
    </div>
    <div class="demo-content-row" style="margin-bottom: 20px;">
      <h3>左侧位置</h3>
      <f-tabs position="left" style="height: 200px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane title="左侧标签1">
          <div class="tab-content">
            左侧位置 - 标签在左侧垂直排列，内容在右侧。垂直选项卡适合侧边导航等场景。
          </div>
        </f-tab-pane>
        <f-tab-pane title="左侧标签2">
          <div class="tab-content">
            标签2内容。垂直选项卡中的标签项是上下排列的，在竖向空间有限时特别有用。
          </div>
        </f-tab-pane>
        <f-tab-pane title="左侧标签3">
          <div class="tab-content">
            标签3内容。垂直选项卡通常用于功能分组或导航菜单。
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>
    <div class="demo-content-row">
      <h3>右侧位置</h3>
      <f-tabs position="right" style="height: 200px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane title="右侧标签1">
          <div class="tab-content">
            右侧位置 - 标签在右侧垂直排列，内容在左侧。
          </div>
        </f-tab-pane>
        <f-tab-pane title="右侧标签2">
          <div class="tab-content">
            标签2内容。右侧垂直选项卡适合阅读习惯从右到左的语言环境。
          </div>
        </f-tab-pane>
        <f-tab-pane title="右侧标签3">
          <div class="tab-content">
            标签3内容。右侧垂直选项卡在一些特定布局中会有更好的视觉效果。
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>

<style scoped>
.tab-content {
  padding: 16px;
  line-height: 1.6;
}
</style>
