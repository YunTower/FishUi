<script setup lang="ts">
import { ref, computed, provide, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import type { TabsProps } from './tabs'

defineOptions({
  name: 'FTabs'
})

const props = withDefaults(defineProps<TabsProps>(), {
  position: 'top',
  size: 'medium',
  type: 'line',
  direction: 'horizontal',
  editable: false,
  showAddButton: false,
  destroyOnHide: false,
  lazyLoad: false,
  justify: false,
  animation: false,
  headerPadding: true,
  autoSwitch: false,
  hideContent: false,
  trigger: 'click',
  scrollPosition: 'auto',
  wheelScroll: true
})

const emit = defineEmits<{
  (e: 'change', key: string | number): void
  (e: 'tab-click', key: string | number): void
  (e: 'add'): void
  (e: 'delete', key: string | number): void
  (e: 'update:activeKey', key: string | number): void
}>()

const activeKey = ref<string | number | undefined>(props.defaultActiveKey)
const activeUid = ref<symbol | null>(null)
const panes = ref<{
  key?: string | number;
  uid: symbol;
  title: string;
  renderTitle?: () => any;
  disabled?: boolean;
  closable?: boolean;
}[]>([])

// 滚动相关
const navRef = ref<HTMLElement | null>(null)
const navContainerRef = ref<HTMLElement | null>(null)
const isScrollable = ref(false)
const showPrevArrow = ref(false)
const showNextArrow = ref(false)

const currentActiveKey = computed({
  get: () => props.activeKey !== undefined ? props.activeKey : activeKey.value,
  set: (val) => {
    if (props.activeKey === undefined) {
      activeKey.value = val
    }
    emit('update:activeKey', val as string | number)
  }
})

// 判断面板是否激活
const isPaneActive = (key: string | number | undefined, uid: symbol) => {
  if (key !== undefined && currentActiveKey.value !== undefined) {
    return String(currentActiveKey.value) === String(key)
  }

  if (activeUid.value !== null) {
    return activeUid.value === uid
  }

  if (currentActiveKey.value === undefined) {
    if (panes.value.length > 0) {
      const firstPane = panes.value.find(pane => !pane.disabled)
      return firstPane && firstPane.uid === uid
    }
  }

  return false
}

const addPane = (pane: {
  key?: string | number;
  uid: symbol;
  title: string;
  renderTitle?: () => any;
  disabled?: boolean;
  closable?: boolean;
}) => {
  panes.value.push(pane)

  if (panes.value.length === 1 && currentActiveKey.value === undefined && activeUid.value === null && !pane.disabled) {
    activeUid.value = pane.uid
    if (pane.key !== undefined) {
      activeKey.value = pane.key
    }
  }

  nextTick(() => {
    updateNavScroll()
  })
}

const removePane = (key: string | number | undefined, uid: symbol) => {
  const index = key !== undefined
    ? panes.value.findIndex(pane => pane.key !== undefined && String(pane.key) === String(key))
    : panes.value.findIndex(pane => pane.uid === uid)

  if (index > -1) {
    const removedPane = panes.value[index]
    panes.value.splice(index, 1)

    if (isPaneActive(removedPane.key, removedPane.uid)) {
      let newActiveIndex = -1

      if (index < panes.value.length) {
        newActiveIndex = index
      } else if (index > 0) {
        newActiveIndex = index - 1
      }

      if (newActiveIndex >= 0 && !panes.value[newActiveIndex].disabled) {
        const newActivePane = panes.value[newActiveIndex]
        setActivePane(newActivePane)
      }
    }

    nextTick(() => {
      updateNavScroll()
    })
  }
}

const handleTabClick = (key: string | number | undefined, uid: symbol, disabled = false) => {
  if (disabled) return

  if (props.trigger === 'click') {
    setActivePane({ key, uid })
  }
  emit('tab-click', key !== undefined ? key : 0)
}

const handleTabHover = (key: string | number | undefined, uid: symbol, disabled = false) => {
  if (disabled) return

  if (props.trigger === 'hover') {
    setActivePane({ key, uid })
  }
}

const setActivePane = (pane: { key?: string | number, uid: symbol }) => {
  const index = panes.value.findIndex(p => p.uid === pane.uid)
  if (index === -1) return

  if (isPaneActive(pane.key, pane.uid)) return

  activeUid.value = pane.uid

  if (pane.key !== undefined) {
    currentActiveKey.value = pane.key
  } else {
    if (props.activeKey !== undefined) {
      emit('update:activeKey', index)
    }
  }

  emit('change', pane.key !== undefined ? pane.key : index)

  nextTick(() => {
    scrollToActiveTab()
  })
}

const handleAdd = () => {
  emit('add')
}

const handleDelete = (key: string | number | undefined, uid: symbol) => {
  emit('delete', key !== undefined ? key : 0)
  removePane(key, uid)
}

const initDefaultActiveKey = () => {
  if (panes.value.length && currentActiveKey.value === undefined && activeUid.value === null) {
    const firstEnabledPane = panes.value.find(pane => !pane.disabled)
    if (firstEnabledPane) {
      nextTick(() => {
        setActivePane(firstEnabledPane)
      })
    }
  } else if (currentActiveKey.value !== undefined) {
    const pane = panes.value.find(p => p.key !== undefined && String(p.key) === String(currentActiveKey.value))
    if (pane) {
      activeUid.value = pane.uid
    }
  }
}

// 更新滚动状态
const updateNavScroll = () => {
  if (!navRef.value || !navContainerRef.value) return

  const navElement = navRef.value
  const containerElement = navContainerRef.value

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    isScrollable.value = navElement.scrollWidth > containerElement.clientWidth
  } else {
    isScrollable.value = navElement.scrollHeight > containerElement.clientHeight
  }

  if (isScrollable.value) {
    updateArrowVisibility()
  } else {
    showPrevArrow.value = false
    showNextArrow.value = false
  }
}

// 更新箭头可见性
const updateArrowVisibility = () => {
  if (!navRef.value) return

  const navElement = navRef.value

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    showPrevArrow.value = navElement.scrollLeft > 0
    showNextArrow.value = navElement.scrollLeft + navElement.clientWidth < navElement.scrollWidth
  } else {
    showPrevArrow.value = navElement.scrollTop > 0
    showNextArrow.value = navElement.scrollTop + navElement.clientHeight < navElement.scrollHeight
  }
}

const scrollTo = (position: number) => {
  if (!navRef.value) return

  const navElement = navRef.value

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    navElement.scrollTo({
      left: position,
      behavior: 'smooth'
    })
  } else {
    navElement.scrollTo({
      top: position,
      behavior: 'smooth'
    })
  }

  setTimeout(() => {
    updateArrowVisibility()
  }, 300)
}

// 点击前一个箭头
const handlePrevClick = () => {
  if (!navRef.value) return

  const navElement = navRef.value

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    // 水平方向
    const containerWidth = navElement.clientWidth
    const targetPosition = Math.max(0, navElement.scrollLeft - containerWidth)
    scrollTo(targetPosition)
  } else {
    // 垂直方向
    const containerHeight = navElement.clientHeight
    const targetPosition = Math.max(0, navElement.scrollTop - containerHeight)
    scrollTo(targetPosition)
  }
}

// 点击后一个箭头
const handleNextClick = () => {
  if (!navRef.value) return

  const navElement = navRef.value

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    // 水平方向
    const containerWidth = navElement.clientWidth
    const maxScrollLeft = navElement.scrollWidth - containerWidth
    const targetPosition = Math.min(maxScrollLeft, navElement.scrollLeft + containerWidth)
    scrollTo(targetPosition)
  } else {
    // 垂直方向
    const containerHeight = navElement.clientHeight
    const maxScrollTop = navElement.scrollHeight - containerHeight
    const targetPosition = Math.min(maxScrollTop, navElement.scrollTop + containerHeight)
    scrollTo(targetPosition)
  }
}

// 滚动到当前选中的标签
const scrollToActiveTab = () => {
  if (!navRef.value) return

  const navElement = navRef.value
  const activeIndex = panes.value.findIndex(pane =>
    (pane.key !== undefined && String(pane.key) === String(currentActiveKey.value)) ||
    (activeUid.value !== null && pane.uid === activeUid.value)
  )

  if (activeIndex === -1) return

  // 获取当前激活的标签元素
  const activeTabElement = navElement.children[activeIndex] as HTMLElement
  if (!activeTabElement) return

  // 水平方向滚动逻辑
  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    const navWidth = navElement.clientWidth
    const tabLeft = activeTabElement.offsetLeft
    const tabWidth = activeTabElement.offsetWidth

    let targetPosition

    // 根据scrollPosition属性决定滚动位置
    switch (props.scrollPosition) {
      case 'start':
        targetPosition = tabLeft
        break
      case 'end':
        targetPosition = tabLeft + tabWidth - navWidth
        break
      case 'center':
        targetPosition = tabLeft + (tabWidth - navWidth) / 2
        break
      case 'auto':
      default:
        // 如果标签在可视区域外，才进行滚动
        if (tabLeft < navElement.scrollLeft) {
          // 标签在左侧不可见区域
          targetPosition = tabLeft
        } else if (tabLeft + tabWidth > navElement.scrollLeft + navWidth) {
          // 标签在右侧不可见区域
          targetPosition = tabLeft + tabWidth - navWidth
        } else {
          // 标签在可见区域内，不需要滚动
          return
        }
        break
    }

    // 如果scrollPosition是数字，将其作为偏移量
    if (typeof props.scrollPosition === 'number') {
      targetPosition = tabLeft - props.scrollPosition
    }

    // 确保滚动位置在有效范围内
    targetPosition = Math.max(0, Math.min(navElement.scrollWidth - navWidth, targetPosition))

    // 执行滚动
    scrollTo(targetPosition)
  } else {
    // 垂直方向滚动逻辑
    const navHeight = navElement.clientHeight
    const tabTop = activeTabElement.offsetTop
    const tabHeight = activeTabElement.offsetHeight

    let targetPosition

    // 根据scrollPosition属性决定滚动位置
    switch (props.scrollPosition) {
      case 'start':
        targetPosition = tabTop
        break
      case 'end':
        targetPosition = tabTop + tabHeight - navHeight
        break
      case 'center':
        targetPosition = tabTop + (tabHeight - navHeight) / 2
        break
      case 'auto':
      default:
        // 如果标签在可视区域外，才进行滚动
        if (tabTop < navElement.scrollTop) {
          // 标签在上方不可见区域
          targetPosition = tabTop
        } else if (tabTop + tabHeight > navElement.scrollTop + navHeight) {
          // 标签在下方不可见区域
          targetPosition = tabTop + tabHeight - navHeight
        } else {
          // 标签在可见区域内，不需要滚动
          return
        }
        break
    }

    // 如果scrollPosition是数字，将其作为偏移量
    if (typeof props.scrollPosition === 'number') {
      targetPosition = tabTop - props.scrollPosition
    }

    // 确保滚动位置在有效范围内
    targetPosition = Math.max(0, Math.min(navElement.scrollHeight - navHeight, targetPosition))

    scrollTo(targetPosition)
  }
}

const handleScroll = () => {
  updateArrowVisibility()
}

const handleWheel = (event: WheelEvent) => {
  if (!navRef.value || !props.wheelScroll) return

  // 获取鼠标事件发生时所在元素的位置信息
  const navElement = navRef.value
  const rect = navElement.getBoundingClientRect()

  // 检查鼠标是否在导航区域内
  if (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  ) {
    // 阻止默认的滚动行为
    event.preventDefault()
    event.stopPropagation()

    // 确定滚动方向和距离
    let scrollAmount = event.deltaY

    // 检测是否为触摸板事件，触摸板的滚动量通常较小而且精确
    const isTouchpad = Math.abs(scrollAmount) < 10 || event.deltaMode !== 0

    // 确定滚动方向（垂直或水平）
    let isVertical = props.position === 'left' || props.position === 'right'

    // 调整滚动量
    if (isVertical) {
      // 垂直滚动
      scrollAmount = event.deltaY * (isTouchpad ? 2 : 8)
      navElement.scrollTop += scrollAmount
    } else {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        scrollAmount = event.deltaX
      }
      scrollAmount = scrollAmount * (isTouchpad ? 1 : 5)
      navElement.scrollLeft += scrollAmount
    }

    updateArrowVisibility()
  }
}

// 初始化滚动容器
const initScrollContainer = () => {
  if (!navRef.value) return

  const navElement = navRef.value

  // 设置滚动行为
  navElement.style.scrollBehavior = 'smooth'

  // 针对垂直tabs进行特殊处理
  if (props.position === 'left' || props.position === 'right') {
    // 强制设置垂直滚动样式
    navElement.style.overflowY = 'auto'
    navElement.style.overflowX = 'hidden'
    navElement.style.scrollbarWidth = 'none'
    // 使用类型断言解决TypeScript错误
    ;(navElement.style as any).msOverflowStyle = 'none'
    ;(navElement.style as any).webkitOverflowScrolling = 'touch'

    // 确保滚动事件能被正确处理
    if (props.wheelScroll) {
      const wheelHandler = (e: WheelEvent) => {
        if (!navRef.value) return

        e.preventDefault()
        e.stopPropagation()

        const delta = e.deltaY || e.deltaX
        const scrollSpeed = Math.abs(delta) < 10 ? 20 : 40 // 根据输入设备调整滚动速度

        navElement.scrollTop += (delta > 0 ? scrollSpeed : -scrollSpeed)
        updateArrowVisibility()
        return false
      }

      navElement.addEventListener('wheel', wheelHandler, { passive: false, capture: true })

      cleanupFunctions.push(() => {
        navElement.removeEventListener('wheel', wheelHandler, { capture: true })
      })
    }
  }
}

const cleanupFunctions: (() => void)[] = []

provide('tabs', {
  isPaneActive,
  addPane,
  removePane
})

watch(() => props.activeKey, (val) => {
  if (val !== undefined) {
    const pane = panes.value.find(p => p.key !== undefined && String(p.key) === String(val))
    if (pane) {
      activeUid.value = pane.uid
      nextTick(() => {
        scrollToActiveTab()
      })
    }
  }
})

watch(() => panes.value, (val) => {
  if (val.length > 0) {
    initDefaultActiveKey()
  }
}, { immediate: true })

onMounted(() => {
  nextTick(() => {
    initDefaultActiveKey()
    updateNavScroll()
    initScrollContainer()

    // 如果有选中的标签，滚动到选中的标签
    if (currentActiveKey.value !== undefined || activeUid.value !== null) {
      scrollToActiveTab()
    }

    window.addEventListener('resize', updateNavScroll)

    if (props.wheelScroll) {
      document.addEventListener('wheel', handleWheel, { passive: false, capture: true })
      if (navRef.value) {
        navRef.value.classList.add('f-tabs__nav--wheel-scroll')
      }
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateNavScroll)

  if (props.wheelScroll) {
    document.removeEventListener('wheel', handleWheel, { capture: true })
  }

  cleanupFunctions.forEach(cleanup => cleanup())
})
</script>

<template>
  <div
    class="f-tabs"
    :class="[
      `f-tabs--${type}`,
      `f-tabs--${position}`,
      position === 'left' || position === 'right' ? 'f-tabs--vertical' : 'f-tabs--horizontal',
      `f-tabs--${size}`,
      {
        'f-tabs--justify': justify,
        'f-tabs--no-padding': !headerPadding,
        'f-tabs--nav-scrollable': isScrollable,
        'f-tabs--wheel-scroll': wheelScroll
      }
    ]"
  >
    <div class="f-tabs__header">
      <div
        ref="navContainerRef"
        class="f-tabs__nav-container"
      >
        <div
          v-if="isScrollable && showPrevArrow"
          class="f-tabs__nav-prev"
          @click="handlePrevClick"
        >
          <i class="ri-arrow-left-s-line"></i>
        </div>
        <div
          ref="navRef"
          class="f-tabs__nav"
          @scroll="handleScroll"
        >
          <div
            v-for="pane in panes"
            :key="String(pane.uid)"
            class="f-tabs__tab"
            :class="{
              'f-tabs__tab--active': isPaneActive(pane.key, pane.uid),
              'f-tabs__tab--disabled': pane.disabled
            }"
            @click="handleTabClick(pane.key, pane.uid, pane.disabled)"
            @mouseenter="handleTabHover(pane.key, pane.uid, pane.disabled)"
          >
            <span class="f-tabs__tab-title">
              <component :is="() => pane.renderTitle ? pane.renderTitle() : pane.title" />
            </span>
            <span
              v-if="editable && pane.closable"
              class="f-tabs__tab-close"
              @click.stop="handleDelete(pane.key, pane.uid)"
            >
              <i class="ri-close-line"></i>
            </span>
          </div>
        </div>
        <div
          v-if="isScrollable && showNextArrow"
          class="f-tabs__nav-next"
          @click="handleNextClick"
        >
          <i class="ri-arrow-right-s-line"></i>
        </div>
      </div>
      <div v-if="editable && showAddButton" class="f-tabs__add" @click="handleAdd">
        <i class="ri-add-line"></i>
      </div>
      <slot name="extra" />
    </div>
    <div class="f-tabs__content" :class="{ 'f-tabs__content--hidden': hideContent }">
      <slot />
    </div>
  </div>
</template>
