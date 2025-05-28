<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <p>水平间距 16px：</p>
      <f-row :gutter="16">
        <f-col :span="6">
          <div class="demo-grid-item">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item bg-fishblue">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item bg-fishblue">6</div>
        </f-col>
      </f-row>

      <p>垂直间距 16px：</p>
      <f-row :gutter="[0, 16]">
        <f-col :span="6">
          <div class="demo-grid-item">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item bg-fishblue">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item bg-fishblue">6</div>
        </f-col>
      </f-row>

      <p>水平垂直间距 16px：</p>
      <f-row :gutter="[16, 16]">
        <f-col :span="6">
          <div class="demo-grid-item">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item bg-fishblue">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item">6</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item bg-fishblue">6</div>
        </f-col>
      </f-row>
    </div>
  </div>
</template>
<style scoped>
.demo-grid-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: var(--color-primary-light-4);
}

p {
  margin: 16px 0 8px;
  color: var(--f-text-color-secondary);
}
</style>
