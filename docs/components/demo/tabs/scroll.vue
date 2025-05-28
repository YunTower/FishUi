<template>
  <div class="demo-content">
    <div class="demo-section">
      <h3>自动滚动 (默认)</h3>
      <div class="wheel-scroll-container" ref="container1">
        <f-tabs :wheel-scroll="false">
          <f-tab-pane v-for="i in 20" :key="i" :title="`标签${i}`">
            标签{{ i }}的内容
          </f-tab-pane>
        </f-tabs>
      </div>
    </div>

    <div class="demo-section">
      <h3>滚动位置: 开始</h3>
      <div class="wheel-scroll-container" ref="container2">
        <f-tabs scroll-position="start" :wheel-scroll="false">
          <f-tab-pane v-for="i in 20" :key="i" :title="`标签${i}`">
            标签{{ i }}的内容
          </f-tab-pane>
        </f-tabs>
      </div>
    </div>

    <div class="demo-section">
      <h3>滚动位置: 中间</h3>
      <div class="wheel-scroll-container" ref="container3">
        <f-tabs scroll-position="center" :wheel-scroll="false">
          <f-tab-pane v-for="i in 20" :key="i" :title="`标签${i}`">
            标签{{ i }}的内容
          </f-tab-pane>
        </f-tabs>
      </div>
    </div>

    <div class="demo-section">
      <h3>滚动位置: 结束</h3>
      <div class="wheel-scroll-container" ref="container4">
        <f-tabs scroll-position="end" :wheel-scroll="false">
          <f-tab-pane v-for="i in 20" :key="i" :title="`标签${i}`">
            标签{{ i }}的内容
          </f-tab-pane>
        </f-tabs>
      </div>
    </div>

    <div class="demo-section">
      <h3>禁用滚轮滚动</h3>
      <f-tabs :wheel-scroll="false">
        <f-tab-pane v-for="i in 20" :key="i" :title="`标签${i}`">
          标签{{ i }}的内容
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-section">
      <h3>卡片样式滚动</h3>
      <div class="wheel-scroll-container" ref="container5">
        <f-tabs type="card" :wheel-scroll="false">
          <f-tab-pane v-for="i in 20" :key="i" :title="`标签${i}`">
            标签{{ i }}的内容
          </f-tab-pane>
        </f-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const container1 = ref(null);
const container2 = ref(null);
const container3 = ref(null);
const container4 = ref(null);
const container5 = ref(null);

const containers = [container1, container2, container3, container4, container5];
const wheelEventListeners = [];

// 处理滚轮滚动
const handleWheel = (container, event) => {
  if (!container) return;

  const navElement = container.querySelector('.f-tabs__nav');
  if (!navElement) return;

  // 检查鼠标是否在容器内
  const rect = container.getBoundingClientRect();
  if (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  ) {
    // 阻止默认的垂直滚动
    event.preventDefault();

    // 确定滚动方向和距离
    let scrollAmount = event.deltaY;

    // 如果没有按下shift键，某些触控板的deltaX可能为0
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      scrollAmount = event.deltaX;
    }

    // 调整滚动速度
    const factor = Math.abs(scrollAmount) < 100 ? 1 : 0.3;
    scrollAmount = scrollAmount * factor;

    // 水平方向滚动
    navElement.scrollLeft += scrollAmount;
  }
};

onMounted(() => {
  // 确保DOM元素已加载
  setTimeout(() => {
    containers.forEach(containerRef => {
      if (containerRef.value) {
        const listener = (event) => handleWheel(containerRef.value, event);
        wheelEventListeners.push(listener);
        document.addEventListener('wheel', listener, { passive: false });
      }
    });
  }, 100);
});

onBeforeUnmount(() => {
  // 移除所有事件监听器
  wheelEventListeners.forEach(listener => {
    document.removeEventListener('wheel', listener);
  });
});
</script>

<style scoped>
.demo-section {
  margin-bottom: 30px;
}

.demo-section h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-1);
}

/* 确保鼠标滚轮滚动时能平滑滚动 */
:deep(.f-tabs__nav) {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.wheel-scroll-container {
  position: relative;
  width: 100%;
}
</style>
