<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-row>
        <f-col :span="6" :order="4">
          <div class="demo-grid-item">1 col-order-4</div>
        </f-col>
        <f-col :span="6" :order="3">
          <div class="demo-grid-item">2 col-order-3</div>
        </f-col>
        <f-col :span="6" :order="2">
          <div class="demo-grid-item">3 col-order-2</div>
        </f-col>
        <f-col :span="6" :order="1">
          <div class="demo-grid-item">4 col-order-1</div>
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
