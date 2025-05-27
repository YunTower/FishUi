<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <p>基础 Grid 布局：</p>
      <f-grid :cols="3" :gap="16">
        <f-grid-item>
          <div class="demo-grid-item">1</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">2</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">3</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">4</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">5</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">6</div>
        </f-grid-item>
      </f-grid>

      <p>响应式 Grid 布局：</p>
      <f-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4 }" :gap="16">
        <f-grid-item>
          <div class="demo-grid-item">1</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">2</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">3</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">4</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">5</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">6</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">7</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">8</div>
        </f-grid-item>
      </f-grid>

      <p>Grid 布局（带后缀）：</p>
      <f-grid :cols="3" :gap="16">
        <f-grid-item>
          <div class="demo-grid-item">1</div>
        </f-grid-item>
        <f-grid-item>
          <div class="demo-grid-item">2</div>
        </f-grid-item>
        <f-grid-item suffix>
          <div class="demo-grid-item">3 (suffix)</div>
        </f-grid-item>
      </f-grid>
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
}

p {
  margin: 16px 0 8px;
  color: var(--f-text-color-secondary);
}
</style>
