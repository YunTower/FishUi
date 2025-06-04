<template>
  <button @click="showLoading">函数调用</button>
</template>
<script setup lang="ts">
function showLoading() {
  // $loading 已全局注册
  const instance = $loading({ text: '函数调用加载', fullscreen: true })
  setTimeout(() => instance.hide(), 1500)
}
</script>
