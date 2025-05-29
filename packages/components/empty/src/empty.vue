<script setup lang="ts">
import type { EmptyProps } from './empty.ts'
import { emptyProps } from './empty.ts'
import { FIcon } from '../../icon'

defineOptions({
  name: 'FEmpty'
})

// 使用defineProps注册组件的props，同时使用emptyProps定义
const props = defineProps(emptyProps)

// 根据类型获取默认图标
const getTypeIcon = () => {
  switch (props.type) {
    case 'success':
      return 'ri-checkbox-circle-line'
    case 'fail':
      return 'ri-error-warning-line'
    case 'network-error':
      return 'ri-global-line'
    case 'maintenance':
      return 'ri-tools-line'
    default:
      return ''
  }
}
</script>

<template>
  <div
    class="f-empty"
    :class="[
      `f-empty--${size}`,
      `f-empty--${type}`
    ]"
  >
    <div class="f-empty__image" :style="imageStyle">
      <slot name="image">
        <img v-if="imgSrc" :src="imgSrc" alt="empty" />
        <f-icon v-else-if="type !== 'empty'" :name="getTypeIcon()" class="f-empty__type-icon" />
        <svg v-else class="f-empty__image-default" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
            <ellipse class="f-empty__fill-1" cx="32" cy="33" rx="32" ry="7" />
            <g class="f-empty__fill-2" fill-rule="nonzero">
              <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
              <path
                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                class="f-empty__fill-3"
              />
            </g>
          </g>
        </svg>
      </slot>
    </div>
    <div v-if="title" class="f-empty__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="f-empty__description">
      <slot>{{ description }}</slot>
    </div>
    <div v-if="$slots.action" class="f-empty__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>
