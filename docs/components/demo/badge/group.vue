<template>
  <div>
    <div class="demo-content-row">
      <p>水平方向（默认）：</p>
      <f-badge-group :gap="16">
        <f-badge :count="5">
          <f-button>按钮1</f-button>
        </f-badge>
        <f-badge :count="10">
          <f-button>按钮2</f-button>
        </f-badge>
        <f-badge dot>
          <f-button>按钮3</f-button>
        </f-badge>
      </f-badge-group>
    </div>
    <div class="demo-content-row">
      <p>垂直方向：</p>
      <f-badge-group direction="vertical" :gap="16">
        <f-badge :count="5">
          <f-button>按钮1</f-button>
        </f-badge>
        <f-badge :count="10">
          <f-button>按钮2</f-button>
        </f-badge>
        <f-badge dot>
          <f-button>按钮3</f-button>
        </f-badge>
      </f-badge-group>
    </div>
  </div>
</template>
