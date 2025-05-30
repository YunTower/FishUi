<template>
  <div>
    <div class="demo-content-row">
      <h3>左侧垂直滚动</h3>
      <f-tabs position="left" :wheel-scroll="true" style="height: 300px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane v-for="i in 20" :tab-key="i" :key="i" :title="`标签项${i}`">
          <div class="tab-content">
            <h4>标签{{ i }}的内容</h4>
            <p>这是标签{{ i }}的详细内容。垂直选项卡布局通常用于页面侧边栏导航，当菜单项较多时可以通过滚动查看所有选项。</p>
            <p>当前选中的选项会在右侧边缘显示一条蓝色指示线，表示激活状态。</p>
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>右侧垂直滚动</h3>
      <f-tabs position="right" :wheel-scroll="true" style="height: 300px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane v-for="i in 20" :tab-key="i" :key="i" :title="`标签项${i}`">
          <div class="tab-content">
            <h4>标签{{ i }}的内容</h4>
            <p>这是标签{{ i }}的详细内容。右侧垂直选项卡布局与左侧相反，标签列表位于右侧。</p>
            <p>当前选中的选项会在左侧边缘显示一条蓝色指示线，表示激活状态。</p>
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>卡片样式垂直滚动</h3>
      <f-tabs position="left" type="card" :wheel-scroll="true" style="height: 300px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane v-for="i in 20" :tab-key="i" :key="i" :title="`标签项${i}`">
          <div class="tab-content">
            <h4>标签{{ i }}的内容</h4>
            <p>这是标签{{ i }}的详细内容。卡片样式的垂直选项卡提供了更明显的视觉层次。</p>
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>

<style scoped>
.tab-content {
  padding: 16px;
}

.tab-content h4 {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--color-text-1);
}

.tab-content p {
  margin-bottom: 8px;
  line-height: 1.6;
  color: var(--color-text-2);
}
</style>
