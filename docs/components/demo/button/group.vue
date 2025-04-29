<script setup lang="ts">
import FButton from '../../../../packages/components/button/src/button.vue'
import FButtonGroup from '../../../../packages/components/button/src/button-group.vue'
</script>

<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <FButtonGroup size="small">
        <FButton size="small">上一页</FButton>
        <FButton size="small">1</FButton>
        <FButton size="small">2</FButton>
        <FButton size="small">3</FButton>
        <FButton size="small">下一页</FButton>
      </FButtonGroup>
    </div>
    <div class="demo-content-row">
      <FButtonGroup size="medium">
        <FButton>上一页</FButton>
        <FButton>1</FButton>
        <FButton>2</FButton>
        <FButton>3</FButton>
        <FButton>下一页</FButton>
      </FButtonGroup>
    </div>
    <div class="demo-content-row">
      <FButtonGroup size="large">
        <FButton>上一页</FButton>
        <FButton>1</FButton>
        <FButton>2</FButton>
        <FButton>3</FButton>
        <FButton>下一页</FButton>
      </FButtonGroup>
    </div>
  </div>
</template>
