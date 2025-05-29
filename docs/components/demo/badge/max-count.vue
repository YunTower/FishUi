<template>
  <div class="demo-content-row">
    <f-badge :count="99">
      <f-button>默认最大值</f-button>
    </f-badge>
    <f-badge :count="100">
      <f-button>超过最大值</f-button>
    </f-badge>
    <f-badge :count="1000" :max-count="999">
      <f-button>自定义最大值</f-button>
    </f-badge>
  </div>
</template>
