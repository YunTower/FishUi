<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-row>
        <f-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="demo-grid-item">Col</div>
        </f-col>
        <f-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="demo-grid-item">Col</div>
        </f-col>
        <f-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="demo-grid-item">Col</div>
        </f-col>
        <f-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="demo-grid-item">Col</div>
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
