<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <h3>默认状态</h3>
      <f-empty description="暂无数据" />
    </div>
    <div class="demo-content-row">
      <h3>成功状态</h3>
      <f-empty type="success" title="操作成功" description="您的数据已成功提交" />
    </div>
    <div class="demo-content-row">
      <h3>失败状态</h3>
      <f-empty type="fail" title="操作失败" description="提交过程中发生错误，请重试" />
    </div>
    <div class="demo-content-row">
      <h3>网络错误</h3>
      <f-empty type="network-error" title="网络错误" description="网络连接失败，请检查您的网络设置" />
    </div>
    <div class="demo-content-row">
      <h3>系统维护</h3>
      <f-empty type="maintenance" title="系统维护中" description="系统正在升级维护，请稍后再试" />
    </div>
  </div>
</template>
