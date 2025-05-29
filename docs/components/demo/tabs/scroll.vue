<template>
  <div>
    <div class="demo-content-row">
      <h3>自动滚动 (默认)</h3>
      <f-tabs :wheel-scroll="true">
        <f-tab-pane v-for="i in 20" :key="i" :tabKey="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>滚动位置: 开始</h3>
      <f-tabs scroll-position="start" :wheel-scroll="true">
        <f-tab-pane v-for="i in 20" :key="i" :tabKey="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>滚动位置: 中间</h3>
      <f-tabs scroll-position="center" :wheel-scroll="true">
        <f-tab-pane v-for="i in 20" :key="i" :tabKey="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>滚动位置: 结束</h3>
      <f-tabs scroll-position="end" :wheel-scroll="true">
        <f-tab-pane v-for="i in 20" :key="i" :tabKey="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>禁用滚轮滚动</h3>
      <f-tabs :wheel-scroll="false">
        <f-tab-pane v-for="i in 20" :key="i" :tabKey="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-content-row">
      <h3>卡片样式滚动</h3>
      <f-tabs type="card" :wheel-scroll="true">
        <f-tab-pane v-for="i in 20" :key="i" :tabKey="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>
<style scoped>
.demo-content-row {
  margin-bottom: 24px;
}
</style>
