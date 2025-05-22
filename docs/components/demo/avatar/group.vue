<template>
  <div class="demo-avatar">
    <f-avatar-group :max-count="3">
      <f-avatar
        v-for="i in 5"
        :key="i"
        :image-url="`https://example.com/avatar${i}.jpg`"
        :size="40"
      />
    </f-avatar-group>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.demo-avatar {
  display: flex;
  gap: 16px;
}
</style>
