<template>
  <div class="demo-content-row">
    <f-badge :count="5">
      <f-button>基本使用</f-button>
    </f-badge>
    <f-badge :count="0" show-zero>
      <f-button>显示零值</f-button>
    </f-badge>
    <f-badge :count="99">
      <f-button>默认最大值</f-button>
    </f-badge>
  </div>
</template>
