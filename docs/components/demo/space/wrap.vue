<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space wrap style="width: 200px;">
        <f-button v-for="i in 10" :key="i">按钮{{ i }}</f-button>
      </f-space>
    </div>
  </div>
</template>
