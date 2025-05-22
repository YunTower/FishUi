<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space direction="vertical" size="large">
        <div>
          <div class="align-label">start</div>
          <f-space align="start">
            <f-button>按钮1</f-button>
            <div class="align-box" style="height: 60px">60px</div>
            <f-button>按钮2</f-button>
          </f-space>
        </div>
        <div>
          <div class="align-label">end</div>
          <f-space align="end">
            <f-button>按钮1</f-button>
            <div class="align-box" style="height: 60px">60px</div>
            <f-button>按钮2</f-button>
          </f-space>
        </div>
        <div>
          <div class="align-label">center</div>
          <f-space align="center">
            <f-button>按钮1</f-button>
            <div class="align-box" style="height: 60px">60px</div>
            <f-button>按钮2</f-button>
          </f-space>
        </div>
        <div>
          <div class="align-label">baseline</div>
          <f-space align="baseline">
            <f-button>按钮1</f-button>
            <div class="align-box" style="height: 60px">60px</div>
            <f-button>按钮2</f-button>
          </f-space>
        </div>
      </f-space>
    </div>
  </div>
</template>

<style scoped>
.align-label {
  margin-bottom: 8px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.align-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 4px;
}
</style>

<script setup lang="ts">
</script>
