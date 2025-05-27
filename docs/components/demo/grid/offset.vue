<template>
  <div class="demo-content">
    <f-row>
      <f-col :span="8">
        <div class="grid-content bg-primary">col-8</div>
      </f-col>
      <f-col :span="8" :offset="8">
        <div class="grid-content bg-primary-light">col-8 offset-8</div>
      </f-col>
    </f-row>
    <f-row>
      <f-col :span="6" :offset="6">
        <div class="grid-content bg-primary">col-6 offset-6</div>
      </f-col>
      <f-col :span="6" :offset="6">
        <div class="grid-content bg-primary-light">col-6 offset-6</div>
      </f-col>
    </f-row>
    <f-row>
      <f-col :span="12" :offset="6">
        <div class="grid-content bg-primary">col-12 offset-6</div>
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
</style>
