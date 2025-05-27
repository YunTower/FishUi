<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <p>顶部对齐：</p>
      <f-row align="start" class="demo-row">
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 40px">40px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 60px">60px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 80px">80px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 100px">100px</div>
        </f-col>
      </f-row>

      <p>居中对齐：</p>
      <f-row align="center" class="demo-row">
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 40px">40px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 60px">60px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 80px">80px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 100px">100px</div>
        </f-col>
      </f-row>

      <p>底部对齐：</p>
      <f-row align="end" class="demo-row">
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 40px">40px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 60px">60px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 80px">80px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 100px">100px</div>
        </f-col>
      </f-row>

      <p>拉伸对齐：</p>
      <f-row align="stretch" class="demo-row">
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 40px">40px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 60px">60px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 80px">80px</div>
        </f-col>
        <f-col :span="6">
          <div class="demo-grid-item" style="height: 100px">100px</div>
        </f-col>
      </f-row>
    </div>
  </div>
</template>
<style scoped>
.demo-row {
  margin-bottom: 16px;
  background-color: var(--color-primary-light-4);
  border-radius: 4px;
  padding: 16px;
}

.demo-grid-item {
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: var(--color-primary-light-4);
  border-radius: 4px;
}

p {
  margin: 16px 0 8px;
  color: var(--f-text-color-secondary);
}
</style>
