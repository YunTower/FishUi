<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-row>
        <f-col :span="8">
          <div class="demo-grid-item">col-8</div>
        </f-col>
        <f-col :span="8" :offset="8">
          <div class="demo-grid-item">col-8 offset-8</div>
        </f-col>
      </f-row>
      <f-row>
        <f-col :span="6" :offset="6">
          <div class="demo-grid-item">col-6 offset-6</div>
        </f-col>
        <f-col :span="6" :offset="6">
          <div class="demo-grid-item">col-6 offset-6</div>
        </f-col>
      </f-row>
      <f-row>
        <f-col :span="12" :offset="6">
          <div class="demo-grid-item">col-12 offset-6</div>
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
  border-radius: 4px;
  margin-bottom: 16px;
}
</style>
