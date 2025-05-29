<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, computed, useSlots, getCurrentInstance } from 'vue'
import type { TabPaneProps } from './tabs'

defineOptions({
  name: 'FTabPane'
})

const props = withDefaults(defineProps<TabPaneProps & { key?: string | number }>(), {
  title: '',
  disabled: false,
  closable: true,
  destroyOnHide: false
})

const slots = useSlots()
const instance = getCurrentInstance()
const tabs = inject('tabs', null) as any
// 使用一个唯一的标识符
const uid = Symbol('tab-pane') as symbol

// 尝试获取父组件传递给我们的key
const panelKey = computed(() => {
  // 1. 优先使用props.key
  if (props.key !== undefined) {
    return props.key
  }
  // 2. 如果props.key未定义，则使用vnode的key
  const vnodeKey = instance?.vnode.key
  if (vnodeKey !== undefined && vnodeKey !== null) {
    return String(vnodeKey)
  }
  // 3. 都没有则返回undefined
  return undefined
})

// 获取title插槽内容
const renderTitle = () => {
  if (slots.title) {
    return slots.title()
  }
  return props.title
}

const isActive = computed(() => {
  return tabs?.isPaneActive(panelKey.value, uid)
})

const shouldRender = computed(() => {
  if (props.destroyOnHide) {
    return isActive.value
  }
  return true
})

onMounted(() => {
  if (tabs) {
    tabs.addPane({
      key: panelKey.value,
      uid,
      title: props.title,
      renderTitle,
      disabled: props.disabled,
      closable: props.closable
    })
  }
})

onBeforeUnmount(() => {
  if (tabs) {
    tabs.removePane(panelKey.value, uid)
  }
})

// 向父组件暴露必要的属性
defineExpose({
  uid,
  key: panelKey
})
</script>

<template>
  <div
    v-show="isActive"
    class="f-tab-pane"
    :class="{ 'f-tab-pane--active': isActive }"
  >
    <div v-if="shouldRender">
      <slot />
    </div>
  </div>
</template>
