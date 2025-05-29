<script setup lang="ts">
import type { BadgeProps } from './badge'
import { computed } from 'vue'

defineOptions({
  name: 'FBadge'
})

const props = withDefaults(defineProps<BadgeProps>(), {
  dot: false,
  maxCount: 99,
  offset: () => [0, 0],
  shape: 'circle',
  size: 'medium',
  showZero: false
})

// 是否显示徽标
const showBadge = computed(() => {
  if (props.dot) return true
  if (props.text) return true
  if (props.status) return true

  const count = props.count
  if (count === 0) {
    return props.showZero
  }
  return !!count
})

// 徽标内容
const badgeContent = computed(() => {
  if (props.dot) return ''
  if (props.text) return props.text

  const count = props.count
  if (count === undefined || count === null) return ''

  return count > props.maxCount ? `${props.maxCount}+` : `${count}`
})

// 处理内置颜色
const getColorClass = computed(() => {
  if (!props.color || props.status) return ''

  // 内置颜色类型
  const internalColors = ['primary', 'success', 'warning', 'danger']
  if (internalColors.includes(props.color)) {
    return `f-badge__color--${props.color}`
  }

  return ''
})

// 徽标样式
const badgeStyle = computed(() => {
  const style: Record<string, any> = { ...props.dotStyle }

  // 设置偏移
  if (props.offset && props.offset.length === 2) {
    const [x, y] = props.offset
    if (x !== undefined) {
      style.right = typeof x === 'number' ? `${-x}px` : x
    }
    if (y !== undefined) {
      style.top = typeof y === 'number' ? `${y}px` : y
    }
  }

  // 设置自定义颜色（非内置颜色且非状态点）
  if (props.color && !props.status && !getColorClass.value) {
    style.backgroundColor = props.color
  }

  return style
})

// 获取状态类名
const getStatusClass = computed(() => {
  if (!props.status) return ''
  return `f-badge__status--${props.status}`
})
</script>

<template>
  <div class="f-badge">
    <slot></slot>
    <span
      v-if="showBadge"
      class="f-badge__content"
      :class="[
        `f-badge__content--${shape}`,
        `f-badge__content--${size}`,
        {
          'f-badge__content--dot': dot,
          'f-badge__content--has-color': !!color && !getColorClass,
          'f-badge__content--status': !!status,
          [getStatusClass]: !!status,
          [getColorClass]: !!getColorClass,
          'f-badge__content--standalone': !$slots.default
        }
      ]"
      :style="badgeStyle"
    >
      {{ badgeContent }}
    </span>
  </div>
</template>

<style>
.f-badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 8px;
}

.f-badge__content {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  white-space: nowrap;
  box-shadow: 0 0 0 1px var(--color-bg-1);
  background-color: rgb(var(--red-6));
  color: var(--color-white);
}

.f-badge__content--standalone {
  position: relative;
  transform: none;
  margin: 0 4px;
}

.f-badge__content--circle {
  border-radius: var(--border-radius-circle);
}

.f-badge__content--round {
  border-radius: var(--border-radius-large);
}

.f-badge__content--small {
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  font-size: 12px;
  line-height: 16px;
}

.f-badge__content--medium {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  font-size: 12px;
  line-height: 20px;
}

.f-badge__content--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--border-radius-circle);
}

.f-badge__content--has-color {
  background-color: var(--color);
}

/* 内置颜色 */
.f-badge__color--primary {
  background-color: rgb(var(--primary-6));
}

.f-badge__color--success {
  background-color: rgb(var(--green-6));
}

.f-badge__color--warning {
  background-color: rgb(var(--orange-6));
}

.f-badge__color--danger {
  background-color: rgb(var(--red-6));
}

/* 状态点样式 */
.f-badge__content--status {
  position: relative;
  transform: none;
  margin-right: 8px;
  margin-left: 0;
}

.f-badge__status--normal {
  background-color: var(--color-neutral-6);
}

.f-badge__status--processing {
  background-color: rgb(var(--primary-6));
}

.f-badge__status--processing::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgb(var(--primary-6));
  animation: f-badge-processing 1.2s infinite ease-in-out;
}

.f-badge__status--success {
  background-color: rgb(var(--green-6));
}

.f-badge__status--warning {
  background-color: rgb(var(--orange-6));
}

.f-badge__status--danger {
  background-color: rgb(var(--red-6));
}

@keyframes f-badge-processing {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
</style>
