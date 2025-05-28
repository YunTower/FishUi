<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <p>基础 Flex 布局：</p>
      <f-row>
        <f-col :flex="2">
          <div class="demo-grid-item">2 / 5</div>
        </f-col>
        <f-col :flex="3">
          <div class="demo-grid-item bg-fishblue">3 / 5</div>
        </f-col>
      </f-row>

      <p>Flex 布局：</p>
      <f-row>
        <f-col flex="100px">
          <div class="demo-grid-item">100px</div>
        </f-col>
        <f-col flex="auto">
          <div class="demo-grid-item bg-fishblue">auto</div>
        </f-col>
      </f-row>

      <p>Flex 布局：</p>
      <f-row>
        <f-col flex="1 1 200px">
          <div class="demo-grid-item">1 1 200px</div>
        </f-col>
        <f-col flex="0 1 300px">
          <div class="demo-grid-item bg-fishblue">0 1 300px</div>
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

p {
  margin: 16px 0 8px;
  color: var(--f-text-color-secondary);
}
</style>
