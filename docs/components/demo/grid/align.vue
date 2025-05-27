<template>
  <div class="demo-content">
    <p>start</p>
    <f-row align="start" class="row-height">
      <f-col :span="6">
        <div class="grid-content bg-primary height-50">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-80">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary height-100">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-60">col-6</div>
      </f-col>
    </f-row>

    <p>center</p>
    <f-row align="center" class="row-height">
      <f-col :span="6">
        <div class="grid-content bg-primary height-50">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-80">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary height-100">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-60">col-6</div>
      </f-col>
    </f-row>

    <p>end</p>
    <f-row align="end" class="row-height">
      <f-col :span="6">
        <div class="grid-content bg-primary height-50">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-80">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary height-100">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-60">col-6</div>
      </f-col>
    </f-row>

    <p>stretch</p>
    <f-row align="stretch" class="row-height">
      <f-col :span="6">
        <div class="grid-content bg-primary height-auto">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-auto">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary height-auto">col-6</div>
      </f-col>
      <f-col :span="6">
        <div class="grid-content bg-primary-light height-auto">col-6</div>
      </f-col>
    </f-row>
  </div>
</template>

<style scoped>
.grid-content {
  border-radius: var(--border-radius-medium);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.row-height {
  height: 120px;
  margin-bottom: 20px;
}

.height-50 {
  height: 50px;
}

.height-60 {
  height: 60px;
}

.height-80 {
  height: 80px;
}

.height-100 {
  height: 100px;
}

.height-auto {
  height: 100%;
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
