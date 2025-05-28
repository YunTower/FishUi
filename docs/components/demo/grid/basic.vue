<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-row>
        <f-col :span="24">
          <div class="demo-grid-item">24</div>
        </f-col>
      </f-row>
      <f-row>
        <f-col :span="12">
          <div class="demo-grid-item">12</div>
        </f-col>
        <f-col :span="12">
          <div class="demo-grid-item bg-fishblue">12</div>
        </f-col>
      </f-row>
      <f-row>
        <f-col :span="8">
          <div class="demo-grid-item">8</div>
        </f-col>
        <f-col :span="8">
          <div class="demo-grid-item bg-fishblue">8</div>
        </f-col>
        <f-col :span="8">
          <div class="demo-grid-item">8</div>
        </f-col>
      </f-row>
      <f-row>
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
  margin-bottom: 16px;
}
</style>
