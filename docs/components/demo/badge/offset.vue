<template>
  <div class="demo-content-row">
    <f-badge :count="5" :offset="[10, 10]">
      <f-button>自定义偏移 [10, 10]</f-button>
    </f-badge>
    <f-badge :count="5" :offset="[-10, 0]">
      <f-button>自定义偏移 [-10, 0]</f-button>
    </f-badge>
  </div>
</template>
