<script setup lang="ts">
import { ref, watch, computed, defineEmits } from 'vue'
import { layoutSiderProps } from './layout-sider'

defineOptions({ name: 'FLayoutSider' })

const props = defineProps(layoutSiderProps)
const emit = defineEmits(['collapse', 'breakpoint'])

const collapsed = ref(props.defaultCollapsed)

watch(() => props.collapsed, (val) => {
  if (typeof val === 'boolean') collapsed.value = val
})

const siderClass = computed(() => [
  'f-layout-sider',
  `f-layout-sider-theme-${props.theme}`,
  { 'f-layout-sider-collapsed': collapsed.value }
])

const siderStyle = computed(() => ({
  width: collapsed.value ? `${props.collapsedWidth}px` : `${props.width}px`
}))

function toggleCollapse(type = 'clickTrigger') {
  if (!props.collapsible) return
  collapsed.value = !collapsed.value
  emit('collapse', collapsed.value, type)
}
</script>
<template>
  <aside :class="siderClass" :style="siderStyle">
    <div class="f-layout-sider-children">
      <slot />
    </div>
    <template v-if="props.collapsible && !props.hideTrigger">
      <div class="f-layout-sider-trigger" @click="toggleCollapse('clickTrigger')">
        <slot name="trigger" :collapsed="collapsed">
          <span>{{ collapsed ? '展开' : '收起' }}</span>
        </slot>
      </div>
    </template>
  </aside>
</template>
