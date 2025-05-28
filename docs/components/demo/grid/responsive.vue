<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-row :gutter="16">
        <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <div class="demo-grid-item">
            <div class="item-content">
              <div class="item-title">xs: 24</div>
              <div class="item-desc">sm: 12</div>
              <div class="item-desc">md: 8</div>
              <div class="item-desc">lg: 6</div>
              <div class="item-desc">xl: 4</div>
            </div>
          </div>
        </f-col>
        <f-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
          <div class="demo-grid-item bg-fishblue">
            <div class="item-content">
              <div class="item-title">xs: 12</div>
              <div class="item-desc">sm: 12</div>
              <div class="item-desc">md: 8</div>
              <div class="item-desc">lg: 6</div>
              <div class="item-desc">xl: 4</div>
            </div>
          </div>
        </f-col>
        <f-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
          <div class="demo-grid-item">
            <div class="item-content">
              <div class="item-title">xs: 12</div>
              <div class="item-desc">sm: 12</div>
              <div class="item-desc">md: 8</div>
              <div class="item-desc">lg: 6</div>
              <div class="item-desc">xl: 4</div>
            </div>
          </div>
        </f-col>
        <f-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <div class="demo-grid-item bg-fishblue">
            <div class="item-content">
              <div class="item-title">xs: 24</div>
              <div class="item-desc">sm: 12</div>
              <div class="item-desc">md: 8</div>
              <div class="item-desc">lg: 6</div>
              <div class="item-desc">xl: 4</div>
            </div>
          </div>
        </f-col>
      </f-row>
    </div>
  </div>
</template>

<style scoped>
.demo-grid-item {
  height: 120px;
  padding: 16px;
  background-color: var(--color-primary-light-4);
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.demo-grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.item-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text-1);
}

.item-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.item-desc {
  font-size: 12px;
  color: var(--color-text-3);
  line-height: 1.5;
}
</style>
