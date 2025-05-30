<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { CheckTagGroupProps, CheckTagGroupValue, CheckTagGroupChangeContext } from './check-tag-group.ts'
import FCheckTag from './check-tag.vue'

defineOptions({
  name: 'FCheckTagGroup'
})

const props = withDefaults(defineProps<CheckTagGroupProps>(), {
  multiple: false,
  defaultValue: () => [],
})

const emit = defineEmits<{
  (e: 'change', value: CheckTagGroupValue, context: CheckTagGroupChangeContext): void
  (e: 'update:value', value: CheckTagGroupValue): void
}>()

// 内部状态
const localValue = ref<CheckTagGroupValue>(props.defaultValue || [])

// 计算属性：选中的值
const selectedValue = computed<CheckTagGroupValue>(() => {
  return props.value !== undefined ? props.value : localValue.value
})

// 检查值是否被选中
const isValueSelected = (value: string | number): boolean => {
  return selectedValue.value.includes(value)
}

// 标签点击处理函数
const handleChange = (checked: boolean, context: CheckTagGroupChangeContext) => {
  const { value } = context
  let newValue: CheckTagGroupValue = [...selectedValue.value]

  if (checked) {
    // 选中
    if (!newValue.includes(value)) {
      if (props.multiple) {
        // 多选：添加到选中列表
        newValue.push(value)
      } else {
        // 单选：替换选中列表
        newValue = [value]
      }
    }
  } else {
    // 取消选中：从选中列表中移除
    newValue = newValue.filter(v => v !== value)
  }

  // 更新内部状态
  localValue.value = newValue

  // 触发事件
  const changeContext: CheckTagGroupChangeContext = {
    ...context,
    type: checked ? 'check' : 'uncheck'
  }

  emit('change', newValue, changeContext)
  emit('update:value', newValue)
}

// 监听value属性变化
watch(() => props.value, (val) => {
  if (val !== undefined) {
    localValue.value = [...val]
  }
})
</script>

<template>
  <div class="f-check-tag-group">
    <FCheckTag
      v-for="option in options"
      :key="option.value"
      :checked="isValueSelected(option.value)"
      :disabled="option.disabled"
      :size="option.size"
      :value="option.value"
      :checked-props="checkedProps"
      :unchecked-props="uncheckedProps"
      @change="(checked, ctx) => handleChange(checked, ctx)"
    >
      {{ option.label }}
    </FCheckTag>
    <slot />
  </div>
</template>
