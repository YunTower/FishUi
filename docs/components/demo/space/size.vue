<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space size="mini">
        <f-button>mini</f-button>
        <f-button>mini</f-button>
      </f-space>
    </div>
    <div class="demo-content-row">
      <f-space size="small">
        <f-button>small</f-button>
        <f-button>small</f-button>
      </f-space>
    </div>
    <div class="demo-content-row">
      <f-space size="medium">
        <f-button>medium</f-button>
        <f-button>medium</f-button>
      </f-space>
    </div>
    <div class="demo-content-row">
      <f-space size="large">
        <f-button>large</f-button>
        <f-button>large</f-button>
      </f-space>
    </div>
    <div class="demo-content-row">
      <f-space :size="[32, 8]">
        <f-button>横32px竖8px</f-button>
        <f-button>横32px竖8px</f-button>
      </f-space>
    </div>
  </div>
</template>
