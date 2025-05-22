<template>
  <div class="demo-content">
    <div class="demo-content-row">
      <f-space>
        <!-- 头像上传示例 -->
        <f-trigger @trigger="handleUpload">
          <f-avatar :size="80">
            <template #default>
              用户
            </template>
          </f-avatar>
          <template #icon>
            <i class="ri-camera-line"></i>
          </template>
        </f-trigger>

        <!-- 卡片编辑示例 -->
        <f-trigger type="button" @trigger="handleEdit">
          <div class="demo-card">
            <h3>卡片标题</h3>
            <p>这是一段卡片内容，点击右下角按钮可以编辑（支持右键点击）</p>
          </div>
          <template #icon>
            <i class="ri-edit-line"></i>
          </template>
        </f-trigger>

        <!-- 图片预览示例 -->
        <f-trigger trigger="hover" @trigger="handlePreview">
          <div class="demo-image">
            <img src="/pic.jpg" alt="示例图片" />
          </div>
          <template #icon>
            <i class="ri-eye-line"></i>
          </template>
        </f-trigger>
      </f-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleUpload = () => {
  alert('触发上传头像')
}

const handleEdit = () => {
  alert('触发编辑卡片')
}

const handlePreview = () => {
  alert('触发预览图片')
}
</script>

<style scoped>
.demo-card {
  width: 200px;
  height: 120px;
  padding: 16px;
  background-color: var(--color-fill-2);
  border-radius: 4px;
}

.demo-card h3 {
  margin: 0 0 8px 0;
}

.demo-card p {
  margin: 0;
  font-size: 14px;
  color: var(--color-text-2);
}

.demo-image {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
}

.demo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
