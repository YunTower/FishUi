<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space direction="vertical" align="start" :size="24">
        <!-- 基本用法 -->
        <div>
          <h4>基本用法</h4>
          <f-avatar-group>
            <f-avatar v-for="i in 3" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">U{{ i }}</f-avatar>
          </f-avatar-group>
        </div>

        <!-- 设置最大显示数量 -->
        <div>
          <h4>设置最大显示数量</h4>
          <f-avatar-group :max-count="2">
            <f-avatar v-for="i in 5" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">U{{ i }}</f-avatar>
          </f-avatar-group>
        </div>

        <!-- 层级顺序 -->
        <div>
          <h4>层级顺序控制</h4>
          <f-space :size="40">
            <div>
              <div class="size-label">默认（降序）</div>
              <f-avatar-group :zIndexAscend="false">
                <f-avatar v-for="i in 3" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>

            <div>
              <div class="size-label">升序</div>
              <f-avatar-group :zIndexAscend="true">
                <f-avatar v-for="i in 3" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>
          </f-space>
        </div>

        <!-- 不同尺寸 -->
        <div>
          <h4>不同尺寸</h4>
          <f-space :size="40">
            <div>
              <div class="size-label">小尺寸</div>
              <f-avatar-group :size="28">
                <f-avatar v-for="i in 3" :key="i" :size="28" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>

            <div>
              <div class="size-label">中尺寸</div>
              <f-avatar-group :size="40">
                <f-avatar v-for="i in 3" :key="i" :size="40" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>

            <div>
              <div class="size-label">大尺寸</div>
              <f-avatar-group :size="52">
                <f-avatar v-for="i in 3" :key="i" :size="52" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>
          </f-space>
        </div>

        <!-- 自定义间距 -->
        <div>
          <h4>自定义间距</h4>
          <f-space :size="40">
            <div>
              <div class="size-label">紧凑</div>
              <f-avatar-group :gap="-20">
                <f-avatar v-for="i in 3" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>

            <div>
              <div class="size-label">默认</div>
              <f-avatar-group>
                <f-avatar v-for="i in 3" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>

            <div>
              <div class="size-label">宽松</div>
              <f-avatar-group :gap="-5">
                <f-avatar v-for="i in 3" :key="i" :style="{ backgroundColor: colors[i % colors.length] }">{{ i }}</f-avatar>
              </f-avatar-group>
            </div>
          </f-space>
        </div>
      </f-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
const colors = [
  '#1677ff',
  '#13c2c2',
  '#52c41a',
  '#faad14',
  '#f5222d',
  '#722ed1',
]
</script>

<style scoped>
h4 {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 500;
}

.size-label {
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
}
</style>
