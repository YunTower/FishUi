<template>
  <div class="demo-content">
    <p>后缀元素示例</p>
    <f-grid :cols="6" :col-gap="16" :row-gap="16">
      <f-grid-item :span="2">
        <div class="grid-item-content bg-primary">常规内容</div>
      </f-grid-item>
      <f-grid-item :span="2">
        <div class="grid-item-content bg-primary">常规内容</div>
      </f-grid-item>
      <f-grid-item :span="2" suffix>
        <div class="grid-item-content bg-suffix">后缀元素</div>
      </f-grid-item>
    </f-grid>

    <p>多行后缀元素</p>
    <f-grid :cols="6" :col-gap="16" :row-gap="16">
      <f-grid-item v-for="i in 4" :key="i">
        <div class="grid-item-content bg-primary">常规内容 {{ i }}</div>
      </f-grid-item>
      <f-grid-item :span="2" suffix>
        <div class="grid-item-content bg-suffix">后缀元素</div>
      </f-grid-item>
      <f-grid-item v-for="i in 4" :key="i + 4">
        <div class="grid-item-content bg-primary">常规内容 {{ i + 4 }}</div>
      </f-grid-item>
      <f-grid-item :span="2" suffix>
        <div class="grid-item-content bg-suffix">后缀元素</div>
      </f-grid-item>
    </f-grid>
  </div>
</template>

<style scoped>
.grid-item-content {
  border-radius: var(--border-radius-medium);
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.bg-primary {
  background-color: rgb(var(--fishblue-6));
}

.bg-suffix {
  background-color: rgb(var(--purple-6));
}

p {
  margin: 24px 0 8px;
  color: var(--color-text-2);
}
</style>
