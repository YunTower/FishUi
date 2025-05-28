<template>
  <div class="demo-content">
    <div class="demo-section">
      <h3>左侧垂直滚动</h3>
      <f-tabs ref="leftTabsRef" position="left" :wheel-scroll="true" style="height: 300px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane v-for="i in 20" :key="i" :title="`标签项${i}`">
          <div class="tab-content">
            <h4>标签{{ i }}的内容</h4>
            <p>这是标签{{ i }}的详细内容。垂直选项卡布局通常用于页面侧边栏导航，当菜单项较多时可以通过滚动查看所有选项。</p>
            <p>当前选中的选项会在右侧边缘显示一条蓝色指示线，表示激活状态。</p>
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-section">
      <h3>右侧垂直滚动</h3>
      <f-tabs ref="rightTabsRef" position="right" :wheel-scroll="true" style="height: 300px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane v-for="i in 20" :key="i" :title="`标签项${i}`">
          <div class="tab-content">
            <h4>标签{{ i }}的内容</h4>
            <p>这是标签{{ i }}的详细内容。右侧垂直选项卡布局与左侧相反，标签列表位于右侧。</p>
            <p>当前选中的选项会在左侧边缘显示一条蓝色指示线，表示激活状态。</p>
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>

    <div class="demo-section">
      <h3>卡片样式垂直滚动</h3>
      <f-tabs ref="cardTabsRef" position="left" type="card" :wheel-scroll="true" style="height: 300px; border: 1px solid var(--color-border-2); border-radius: 4px;">
        <f-tab-pane v-for="i in 20" :key="i" :title="`标签项${i}`">
          <div class="tab-content">
            <h4>标签{{ i }}的内容</h4>
            <p>这是标签{{ i }}的详细内容。卡片样式的垂直选项卡提供了更明显的视觉层次。</p>
          </div>
        </f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const leftTabsRef = ref(null);
const rightTabsRef = ref(null);
const cardTabsRef = ref(null);

onMounted(() => {
  // 确保能够正常滚动的辅助代码
  const addWheelEvents = (ref) => {
    if (!ref.value) return;

    // 获取tabs组件中的nav元素
    const navElement = ref.value.$el.querySelector('.f-tabs__nav');
    if (!navElement) return;

    // 添加滚动事件监听
    navElement.addEventListener('wheel', (event) => {
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

      // 执行滚动 - 垂直方向
      navElement.scrollTop += scrollAmount;
    }, { passive: false });
  };

  // 为所有tabs添加滚动事件
  addWheelEvents(leftTabsRef);
  addWheelEvents(rightTabsRef);
  addWheelEvents(cardTabsRef);
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

.tab-content {
  padding: 16px;
}

.tab-content h4 {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--color-text-1);
}

.tab-content p {
  margin-bottom: 8px;
  line-height: 1.6;
  color: var(--color-text-2);
}

/* 增强垂直滚动功能 */
:deep(.f-tabs--vertical .f-tabs__nav) {
  overflow-y: auto !important;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
</style>
