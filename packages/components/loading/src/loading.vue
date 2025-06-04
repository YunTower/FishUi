<script setup lang="ts">
import { ref, computed, watch, onUnmounted, type PropType } from 'vue'

defineOptions({
  name: 'FLoading'
})

const props = defineProps({
  attach: {
    type: [String, Function] as PropType<string | (() => HTMLElement)>,
    default: ''
  },
  content: {
    type: [String, Function] as PropType<string | (() => any)>,
    default: undefined
  },
  default: {
    type: [String, Function] as PropType<string | (() => any)>,
    default: undefined
  },
  delay: {
    type: Number,
    default: 0
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  indicator: {
    type: [Boolean, Function] as PropType<boolean | (() => any)>,
    default: true
  },
  inheritColor: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: true
  },
  preventScrollThrough: {
    type: Boolean,
    default: true
  },
  showOverlay: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  text: {
    type: [String, Function] as PropType<string | (() => any)>,
    default: undefined
  },
  zIndex: {
    type: Number,
    default: 3500
  }
})

const visible = ref(false)
let delayTimer: ReturnType<typeof setTimeout> | null = null

const show = () => {
  if (props.delay > 0) {
    delayTimer = setTimeout(() => {
      visible.value = true
    }, props.delay)
  } else {
    visible.value = true
  }
}
const hide = () => {
  if (delayTimer) clearTimeout(delayTimer)
  visible.value = false
}

watch(() => props.loading, (val) => {
  if (val) show()
  else hide()
}, { immediate: true })

onUnmounted(() => {
  if (delayTimer) clearTimeout(delayTimer)
})

// 尺寸适配
const sizeValue = computed(() => {
  const preset = ['small', 'medium', 'large']
  if (preset.includes(props.size)) return props.size
  return 'custom'
})
const customSize = computed(() => {
  if (sizeValue.value === 'custom') return props.size
  return ''
})

const loadingClass = computed(() => [
  'f-loading',
  `f-loading--size-${sizeValue.value}`,
  {
    'f-loading--fullscreen': props.fullscreen,
    'f-loading--inherit-color': props.inheritColor,
    'f-loading--with-overlay': props.showOverlay,
    'f-loading--wrap': !!(slots.default && !props.fullscreen && !props.attach)
  }
])

const styleVars = computed(() => {
  const style: Record<string, any> = { zIndex: props.zIndex }
  if (sizeValue.value === 'custom') {
    style['--f-loading-size'] = customSize.value
  }
  return style
})

const showIndicator = computed(() => props.indicator !== false)
const isCustomIndicator = computed(() => typeof props.indicator === 'function')

const slots = defineSlots()
const renderContent = () => {
  if (props.content) return typeof props.content === 'function' ? props.content() : props.content
  if (props.default) return typeof props.default === 'function' ? props.default() : props.default
  return ''
}
</script>

<template>
  <Teleport v-if="props.attach && (props.fullscreen || props.attach)"
            :to="typeof props.attach === 'function' ? props.attach() : props.attach">
    <div v-show="visible" :class="loadingClass" :style="styleVars">
      <div v-if="props.showOverlay" class="f-loading__overlay"></div>
      <div class="f-loading__content">
        <template v-if="showIndicator">
          <span v-if="isCustomIndicator" class="f-loading__spinner"><component
            :is="props.indicator()" /></span>
          <span v-else class="f-loading__spinner">
           <svg class="f-loading__icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path
             fill="currentColor"
             d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 331.008a32 32 0 0 1-45.248-45.248l135.808-135.68a32 32 0 0 1 45.248 0zM376.32 647.744a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.872-135.808a32 32 0 0 1 45.248 0z"></path></svg>
          </span>
        </template>
        <span v-if="props.text"
              class="f-loading__text">{{ typeof props.text === 'function' ? props.text() : props.text
          }}</span>
        <span v-else-if="renderContent()" class="f-loading__text">{{ renderContent() }}</span>
        <slot v-else />
      </div>
    </div>
  </Teleport>
  <div v-else v-show="visible" :class="loadingClass" :style="styleVars">
    <div v-if="props.showOverlay" class="f-loading__overlay"></div>
    <div class="f-loading__content">
      <template v-if="showIndicator">
        <span v-if="isCustomIndicator" class="f-loading__spinner"><component
          :is="props.indicator()" /></span>
        <span v-else class="f-loading__spinner">
                    <svg class="f-loading__icon" viewBox="0 0 1024 1024"
                         xmlns="http://www.w3.org/2000/svg"><path fill="currentColor"
                                                                  d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 331.008a32 32 0 0 1-45.248-45.248l135.808-135.68a32 32 0 0 1 45.248 0zM376.32 647.744a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.872-135.808a32 32 0 0 1 45.248 0z"></path></svg>
        </span>
      </template>
      <span v-if="props.text"
            class="f-loading__text">{{ typeof props.text === 'function' ? props.text() : props.text
        }}</span>
      <span v-else-if="renderContent()" class="f-loading__text">{{ renderContent() }}</span>
      <slot v-else />
    </div>
    <div v-if="slots.default && !props.fullscreen && !props.attach" class="f-loading__wrap">
      <slot />
    </div>
  </div>
</template>
