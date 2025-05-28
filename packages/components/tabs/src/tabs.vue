<script setup lang="ts">
import { ref, computed, provide, watch, nextTick, onMounted, h, onBeforeUnmount } from 'vue'
import type { TabsProps } from './tabs'
import { tabsProps } from './tabs'

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

// 判断一个面板是否激活
const isPaneActive = (key: string | number | undefined, uid: symbol) => {
  // 1. 如果有key且当前activeKey有值，则比较key
  if (key !== undefined && currentActiveKey.value !== undefined) {
    return String(currentActiveKey.value) === String(key)
  }

  // 2. 如果有activeUid，则比较uid
  if (activeUid.value !== null) {
    return activeUid.value === uid
  }

  // 3. 如果没有activeKey和activeUid，则检查是否是第一个非禁用面板
  if (currentActiveKey.value === undefined && activeUid.value === null) {
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

  // 如果是第一个添加的面板，且没有activeKey，则设置为激活
  if (panes.value.length === 1 && currentActiveKey.value === undefined && activeUid.value === null && !pane.disabled) {
    activeUid.value = pane.uid
    if (pane.key !== undefined) {
      activeKey.value = pane.key
    }
  }

  // 当添加新的面板时，更新滚动状态
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

    // 如果删除的是当前激活的标签页，则激活上一个或下一个标签页
    if (isPaneActive(removedPane.key, removedPane.uid)) {
      let newActiveIndex = -1

      // 尝试激活下一个标签页
      if (index < panes.value.length) {
        newActiveIndex = index
      }
      // 如果没有下一个，尝试激活上一个标签页
      else if (index > 0) {
        newActiveIndex = index - 1
      }

      if (newActiveIndex >= 0 && !panes.value[newActiveIndex].disabled) {
        const newActivePane = panes.value[newActiveIndex]
        setActivePane(newActivePane)
      }
    }

    // 当删除面板时，更新滚动状态
    nextTick(() => {
      updateNavScroll()
    })
  }
}

const handleTabClick = (key: string | number | undefined, uid: symbol, disabled = false) => {
  if (disabled) return

  if (props.trigger === 'click') {
    setActivePane({key, uid})
  }
  emit('tab-click', key !== undefined ? key : 0)
}

const handleTabHover = (key: string | number | undefined, uid: symbol, disabled = false) => {
  if (disabled) return

  if (props.trigger === 'hover') {
    setActivePane({key, uid})
  }
}

const setActivePane = (pane: {key?: string | number, uid: symbol}) => {
  // 找到对应的面板
  const index = panes.value.findIndex(p => p.uid === pane.uid)
  if (index === -1) return

  // 如果已经是激活状态，不做处理
  if (isPaneActive(pane.key, pane.uid)) return

  // 设置激活状态
  activeUid.value = pane.uid

  // 如果有key，更新activeKey
  if (pane.key !== undefined) {
    currentActiveKey.value = pane.key
  } else {
    // 如果没有key，但是v-model绑定了activeKey，我们需要发送一个索引值
    if (props.activeKey !== undefined) {
      emit('update:activeKey', index)
    }
  }

  // 发送change事件
  emit('change', pane.key !== undefined ? pane.key : index)

  // 滚动到选中的标签页
  nextTick(() => {
    scrollToActiveTab()
  })
}

const handleChange = (key: string | number | symbol) => {
  if (typeof key === 'symbol') {
    // 如果是Symbol类型，找到对应的面板
    const pane = panes.value.find(p => p.uid === key)
    if (pane) {
      setActivePane(pane)
    }
  } else {
    // 如果是string或number类型，找到对应的面板
    const pane = panes.value.find(p => p.key !== undefined && String(p.key) === String(key))
    if (pane) {
      setActivePane(pane)
    } else {
      // 如果找不到对应的面板，尝试使用索引
      const index = Number(key)
      if (!isNaN(index) && index >= 0 && index < panes.value.length) {
        setActivePane(panes.value[index])
      }
    }
  }
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
    // 如果有activeKey，找到对应的面板并设置activeUid
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

  // 检查是否需要滚动
  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    isScrollable.value = navElement.scrollWidth > containerElement.clientWidth
  } else {
    // 垂直方向
    isScrollable.value = navElement.scrollHeight > containerElement.clientHeight
  }

  // 检查是否显示前后箭头
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
    // 水平方向
    showPrevArrow.value = navElement.scrollLeft > 0
    showNextArrow.value = navElement.scrollLeft + navElement.clientWidth < navElement.scrollWidth
  } else {
    // 垂直方向
    showPrevArrow.value = navElement.scrollTop > 0
    showNextArrow.value = navElement.scrollTop + navElement.clientHeight < navElement.scrollHeight
  }
}

// 滚动到指定位置
const scrollTo = (position: number) => {
  if (!navRef.value) return

  const navElement = navRef.value

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    // 水平方向滚动
    navElement.scrollTo({
      left: position,
      behavior: 'smooth'
    })
  } else {
    // 垂直方向滚动
    navElement.scrollTo({
      top: position,
      behavior: 'smooth'
    })
  }

  // 更新箭头状态
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

    // 执行滚动
    scrollTo(targetPosition)
  }
}

// 处理滚动事件
const handleScroll = () => {
  updateArrowVisibility()
}

// 处理鼠标滚轮事件
const handleWheel = (event: WheelEvent) => {
  console.log('Wheel event triggered')
  if (!navRef.value) return

  // 阻止默认的垂直滚动
  event.preventDefault()

  const navElement = navRef.value

  // 确定滚动方向和距离
  let scrollAmount = event.deltaY

  // 如果没有按下shift键，某些触控板的deltaX可能为0
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
    scrollAmount = event.deltaX
  }

  // 根据浏览器和操作系统不同，调整滚动速度
  // 在一些触控板上，deltaY可能非常大，需要减缓滚动速度
  const factor = Math.abs(scrollAmount) < 100 ? 1 : 0.3
  scrollAmount = scrollAmount * factor

  if (props.direction === 'horizontal' || props.position === 'top' || props.position === 'bottom') {
    // 水平方向滚动
    navElement.scrollLeft += scrollAmount
  } else {
    // 垂直方向滚动
    navElement.scrollTop += scrollAmount
  }

  // 更新箭头状态
  updateArrowVisibility()
}

provide('tabs', {
  currentActiveKey,
  addPane,
  removePane,
  handleTabClick,
  handleTabHover,
  handleDelete,
  isPaneActive
})

watch(() => props.activeKey, (val) => {
  if (val !== undefined) {
    // 查找匹配的面板
    const pane = panes.value.find(p => p.key !== undefined && String(p.key) === String(val))
    if (pane) {
      activeUid.value = pane.uid
      // 当activeKey变化时，滚动到选中的标签
      nextTick(() => {
        scrollToActiveTab()
      })
    }
  }
})

// 监听panes变化，初始化默认选中
watch(() => panes.value, (val) => {
  if (val.length > 0) {
    initDefaultActiveKey()
  }
}, { immediate: true })

onMounted(() => {
  nextTick(() => {
    initDefaultActiveKey()
    updateNavScroll()

    // 如果有选中的标签，滚动到选中的标签
    if (currentActiveKey.value !== undefined || activeUid.value !== null) {
      scrollToActiveTab()
    }

    // 监听窗口大小变化，更新滚动状态
    window.addEventListener('resize', updateNavScroll)

    // 仅当wheelScroll属性为true时，才添加鼠标滚轮事件监听
    console.log('wheelScroll:', props.wheelScroll)
    if (props.wheelScroll && navRef.value) {
      console.log('Adding wheel event listener')
      navRef.value.addEventListener('wheel', handleWheel, { passive: false })
    }
  })
})

// 组件卸载时，移除事件监听
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateNavScroll)

  // 移除鼠标滚轮事件监听
  if (props.wheelScroll && navRef.value) {
    navRef.value.removeEventListener('wheel', handleWheel)
  }
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
        'f-tabs--nav-scrollable': isScrollable
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
