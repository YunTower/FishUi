<template>
  <div class="demo-content">
    <p>start</p>
    <f-row justify="start">
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary-light"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
    </f-row>

    <p>center</p>
    <f-row justify="center">
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary-light"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
    </f-row>

    <p>end</p>
    <f-row justify="end">
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary-light"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
    </f-row>

    <p>space-between</p>
    <f-row justify="space-between">
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary-light"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
    </f-row>

    <p>space-around</p>
    <f-row justify="space-around">
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary-light"></div>
      </f-col>
      <f-col :span="4">
        <div class="grid-content bg-primary"></div>
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
