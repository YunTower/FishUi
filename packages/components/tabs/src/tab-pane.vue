<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, computed, useSlots, getCurrentInstance } from 'vue'
import type { TabPaneProps } from './tabs'

defineOptions({
  name: 'FTabPane'
})

const props = withDefaults(defineProps<TabPaneProps>(), {
  title: '',
  disabled: false,
  closable: true,
  destroyOnHide: false
})

const slots = useSlots()
const instance = getCurrentInstance()
const tabs = inject('tabs', null) as any
const uid = Symbol('tab-pane') as symbol

const panelKey = computed(() => {
  if (props.tabKey !== undefined) {
    return props.tabKey
  }
  const vnodeKey = instance?.vnode.key
  if (vnodeKey !== undefined && vnodeKey !== null) {
    return String(vnodeKey)
  }
  return undefined
})

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

defineExpose({
  uid,
  panelKey
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
