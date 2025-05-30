<template>
  <div>
    <f-tabs>
      <f-tab-pane tab-key="home">
        <template #title>
          <i class="ri-home-line"></i> 首页
        </template>
        首页内容
      </f-tab-pane>
      <f-tab-pane tab-key="user">
        <template #title>
          <i class="ri-user-line"></i> 用户
        </template>
        用户内容
      </f-tab-pane>
      <f-tab-pane tab-key="settings">
        <template #title>
          <i class="ri-settings-line"></i> 设置
        </template>
        设置内容
      </f-tab-pane>
    </f-tabs>
  </div>
</template>
