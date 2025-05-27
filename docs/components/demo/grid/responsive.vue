<template>
  <div class="demo-content">
    <f-row :gutter="10">
      <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="grid-content bg-primary">响应式列</div>
      </f-col>
      <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="grid-content bg-primary-light">响应式列</div>
      </f-col>
      <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="grid-content bg-primary">响应式列</div>
      </f-col>
      <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="grid-content bg-primary-light">响应式列</div>
      </f-col>
      <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="grid-content bg-primary">响应式列</div>
      </f-col>
      <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <div class="grid-content bg-primary-light">响应式列</div>
      </f-col>
    </f-row>

    <p>响应式对象形式:</p>
    <f-row :gutter="10">
      <f-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8, offset: 2 }">
        <div class="grid-content bg-primary">xs=24 sm=12 md=8 offset=2</div>
      </f-col>
      <f-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8, offset: 6 }">
        <div class="grid-content bg-primary-light">xs=24 sm=12 md=8 offset=6</div>
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
