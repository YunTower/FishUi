<script setup lang="ts">
import { computed } from 'vue'
import { layoutProps } from './layout'

defineOptions({
  name: 'FLayout'
})

const props = defineProps(layoutProps)

const layoutClass = computed(() => [
  'f-layout',
  { 'f-layout-has-sider': props.hasSider }
])
</script>
<template>
  <section :class="layoutClass">
    <slot />
  </section>
</template>
