<template>
  <div class="demo-content">
    <p>水平间距</p>
    <f-row :gutter="16">
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
    </f-row>

    <p>垂直和水平间距</p>
    <f-row :gutter="[16, 20]">
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
    </f-row>

    <p>响应式间距</p>
    <f-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light">col-6</div>
      </f-col>
    </f-row>
  </div>
</template>

<style scoped>
.grid-content {
  border-radius: var(--border-radius-medium);
  min-height: 36px;
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
