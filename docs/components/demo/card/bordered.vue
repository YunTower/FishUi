<template>
  <div class="demo-content" style="background: var(--color-bg-3); padding: 16px;">
    <f-card style="width: 360px; margin-bottom: 16px" title="有边框卡片" extra="更多">
      这是一个有边框的卡片，默认bordered为true
    </f-card>
    <f-card style="width: 360px" :bordered="false" title="无边框卡片" extra="更多">
      这是一个无边框的卡片，bordered设置为false
    </f-card>
  </div>
</template>
