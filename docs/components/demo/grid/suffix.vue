<template>
  <div class="demo-content">
    <div class="demo-section">
      <h3 class="section-title">基础后缀元素</h3>
      <p class="section-desc">在网格布局中，后缀元素会始终保持在最右侧</p>
      <f-grid :cols="6" :col-gap="16" :row-gap="16">
        <f-grid-item :span="2">
          <div class="grid-item-content bg-primary">
            <div class="item-info">
              <div class="item-title">常规内容</div>
              <div class="item-desc">span: 2</div>
            </div>
          </div>
        </f-grid-item>
        <f-grid-item :span="2">
          <div class="grid-item-content bg-primary">
            <div class="item-info">
              <div class="item-title">常规内容</div>
              <div class="item-desc">span: 2</div>
            </div>
          </div>
        </f-grid-item>
        <f-grid-item :span="2" suffix>
          <div class="grid-item-content bg-suffix">
            <div class="item-info">
              <div class="item-title">后缀元素</div>
              <div class="item-desc">suffix: true</div>
            </div>
          </div>
        </f-grid-item>
      </f-grid>
    </div>

    <div class="demo-section">
      <h3 class="section-title">多行后缀元素</h3>
      <p class="section-desc">在复杂的网格布局中，可以添加多个后缀元素</p>
      <f-grid :cols="6" :col-gap="16" :row-gap="16">
        <f-grid-item v-for="i in 4" :key="i">
          <div class="grid-item-content bg-primary">
            <div class="item-info">
              <div class="item-title">常规内容</div>
              <div class="item-desc">序号: {{ i }}</div>
            </div>
          </div>
        </f-grid-item>
        <f-grid-item :span="2" suffix>
          <div class="grid-item-content bg-suffix">
            <div class="item-info">
              <div class="item-title">后缀元素 1</div>
              <div class="item-desc">span: 2</div>
            </div>
          </div>
        </f-grid-item>
        <f-grid-item v-for="i in 4" :key="i + 4">
          <div class="grid-item-content bg-primary">
            <div class="item-info">
              <div class="item-title">常规内容</div>
              <div class="item-desc">序号: {{ i + 4 }}</div>
            </div>
          </div>
        </f-grid-item>
        <f-grid-item :span="2" suffix>
          <div class="grid-item-content bg-suffix">
            <div class="item-info">
              <div class="item-title">后缀元素 2</div>
              <div class="item-desc">span: 2</div>
            </div>
          </div>
        </f-grid-item>
      </f-grid>
    </div>
  </div>
</template>

<style scoped>
.demo-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-1);
  margin: 24px 0 8px;
}

.section-desc {
  font-size: 14px;
  color: var(--color-text-3);
  margin-bottom: 16px;
}

.grid-item-content {
  min-height: 100px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s ease;
}

.item-info {
  text-align: center;
}

.item-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.item-desc {
  font-size: 12px;
  opacity: 0.8;
}

.bg-suffix {
  background-color: rgb(var(--purple-6));
}
</style>
