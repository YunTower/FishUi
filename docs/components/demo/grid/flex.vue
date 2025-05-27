<template>
  <div class="demo-content">
    <p>Flex 数值</p>
    <f-row>
      <f-col :flex="2">
        <div class="grid-content bg-primary">flex: 2</div>
      </f-col>
      <f-col :flex="3">
        <div class="grid-content bg-primary-light">flex: 3</div>
      </f-col>
      <f-col :flex="1">
        <div class="grid-content bg-primary">flex: 1</div>
      </f-col>
    </f-row>

    <p>Flex 固定宽度与自动填充</p>
    <f-row>
      <f-col flex="100px">
        <div class="grid-content bg-primary">100px</div>
      </f-col>
      <f-col flex="auto">
        <div class="grid-content bg-primary-light">auto</div>
      </f-col>
    </f-row>

    <p>Flex 自定义比例</p>
    <f-row>
      <f-col flex="1 1 200px">
        <div class="grid-content bg-primary">1 1 200px</div>
      </f-col>
      <f-col flex="0 1 300px">
        <div class="grid-content bg-primary-light">0 1 300px</div>
      </f-col>
    </f-row>

    <p>Flex 结合排序</p>
    <f-row>
      <f-col :flex="2" :order="3">
        <div class="grid-content bg-primary">flex: 2, order: 3</div>
      </f-col>
      <f-col :flex="1" :order="2">
        <div class="grid-content bg-primary-light">flex: 1, order: 2</div>
      </f-col>
      <f-col :flex="1" :order="1">
        <div class="grid-content bg-primary">flex: 1, order: 1</div>
      </f-col>
    </f-row>
  </div>
</template>

<style scoped>
.grid-content {
  border-radius: var(--border-radius-medium);
  min-height: 36px;
  margin: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.bg-primary {
  background-color: rgb(var(--fishblue-6));
}

.bg-primary-light {
  background-color: rgb(var(--fishblue-4));
}

p {
  margin: 16px 0 8px;
  color: var(--color-text-2);
}
</style>
