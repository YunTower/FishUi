<template>
  <f-loading :loading="true" :indicator="customIndicator" text="自定义指示器" />
</template>
<script setup lang="ts">
import { h } from 'vue'
const customIndicator = () => h('span', { style: 'color: #67c23a' }, '🔄')
</script>
