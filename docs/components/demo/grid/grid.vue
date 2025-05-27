<template>
  <div class="demo-content">
    <p>基础栅格布局</p>
    <f-grid :cols="3" :col-gap="16" :row-gap="16">
      <f-grid-item v-for="i in 6" :key="i">
        <div class="grid-item-content bg-primary">{{ i }}</div>
      </f-grid-item>
    </f-grid>

    <p>响应式栅格布局</p>
    <f-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" :col-gap="16" :row-gap="16">
      <f-grid-item v-for="i in 12" :key="i">
        <div class="grid-item-content bg-primary-light">{{ i }}</div>
      </f-grid-item>
    </f-grid>

    <p>指定项目跨度</p>
    <f-grid :cols="4" :col-gap="16" :row-gap="16">
      <f-grid-item :span="2">
        <div class="grid-item-content bg-primary">span: 2</div>
      </f-grid-item>
      <f-grid-item>
        <div class="grid-item-content bg-primary-light">span: 1</div>
      </f-grid-item>
      <f-grid-item>
        <div class="grid-item-content bg-primary-light">span: 1</div>
      </f-grid-item>
      <f-grid-item :span="4">
        <div class="grid-item-content bg-primary">span: 4</div>
      </f-grid-item>
      <f-grid-item :span="2">
        <div class="grid-item-content bg-primary-light">span: 2</div>
      </f-grid-item>
      <f-grid-item :span="2">
        <div class="grid-item-content bg-primary-light">span: 2</div>
      </f-grid-item>
    </f-grid>

    <p>指定项目偏移</p>
    <f-grid :cols="4" :col-gap="16" :row-gap="16">
      <f-grid-item :offset="1">
        <div class="grid-item-content bg-primary">offset: 1</div>
      </f-grid-item>
      <f-grid-item :span="2">
        <div class="grid-item-content bg-primary-light">span: 2</div>
      </f-grid-item>
      <f-grid-item :offset="2">
        <div class="grid-item-content bg-primary">offset: 2</div>
      </f-grid-item>
      <f-grid-item>
        <div class="grid-item-content bg-primary-light">span: 1</div>
      </f-grid-item>
    </f-grid>

    <p>折叠示例</p>
    <f-grid :cols="3" :col-gap="16" :row-gap="16" :collapsed="collapsed" :collapsed-rows="2">
      <f-grid-item v-for="i in 9" :key="i">
        <div class="grid-item-content bg-primary">{{ i }}</div>
      </f-grid-item>
    </f-grid>
    <div class="collapse-action">
      <button @click="toggleCollapse">{{ collapsed ? '展开' : '折叠' }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(true)

const toggleCollapse = () => {
  collapsed.value = !collapsed.value
}
</script>

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

.bg-primary-light {
  background-color: rgb(var(--fishblue-4));
}

p {
  margin: 24px 0 8px;
  color: var(--color-text-2);
}

.collapse-action {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

button {
  padding: 8px 16px;
  background-color: rgb(var(--fishblue-6));
  color: white;
  border: none;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
}

button:hover {
  background-color: rgb(var(--fishblue-5));
}
</style>
