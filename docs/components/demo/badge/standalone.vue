<template>
  <div class="demo-content-row">
    <f-badge :count="5" />
    <f-badge :count="10" />
    <f-badge shape="round" :count="100" />
    <f-badge text="新" />
    <f-badge shape="round" text="Hot" color="rgb(var(--orange-6))" />
    <f-badge status="processing" /> 进行中
    <f-badge status="success" /> 成功
  </div>
</template>
