<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { CheckTagProps, CheckTagChangeContext } from './check-tag.ts'
import FTag from './tag.vue'

defineOptions({
  name: 'FCheckTag'
})

const props = withDefaults(defineProps<CheckTagProps>(), {
  disabled: false,
  size: 'medium'
})

const emit = defineEmits<{
  (e: 'change', checked: boolean, context: CheckTagChangeContext): void
  (e: 'click', context: { e: MouseEvent }): void
  (e: 'update:checked', checked: boolean): void
}>()

// 内部状态
const localChecked = ref(props.defaultChecked ?? false)

// 计算属性：是否选中
const isChecked = computed(() => {
  return props.checked !== undefined ? props.checked : localChecked.value
})

// 监听checked属性变化
watch(() => props.checked, (val) => {
  if (val !== undefined) {
    localChecked.value = val
  }
})

// 标签点击处理函数
const handleClick = (e: MouseEvent) => {
  if (props.disabled) return

  emit('click', { e })

  const newChecked = !isChecked.value
  localChecked.value = newChecked

  const context: CheckTagChangeContext = {
    e,
    value: props.value ?? ''
  }

  emit('change', newChecked, context)
  emit('update:checked', newChecked)
}
</script>

<template>
  <FTag
    :checkable="true"
    :checked="isChecked"
    :disabled="disabled"
    :size="size"
    v-bind="isChecked ? checkedProps : uncheckedProps"
    @click="handleClick"
  >
    <slot />
  </FTag>
</template>
