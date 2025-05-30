<template>
  <div class="demo-content">
    <div class="section">
      <div class="section-title">预设颜色</div>
      <div class="tag-row">
        <f-tag color="red">红色</f-tag>
        <f-tag color="orangered">橙红色</f-tag>
        <f-tag color="orange">橙色</f-tag>
        <f-tag color="gold">金色</f-tag>
        <f-tag color="lime">绿黄色</f-tag>
        <f-tag color="green">绿色</f-tag>
        <f-tag color="cyan">青色</f-tag>
        <f-tag color="blue">蓝色</f-tag>
        <f-tag color="fishblue">鱼蓝色</f-tag>
        <f-tag color="purple">紫色</f-tag>
        <f-tag color="pinkpurple">粉紫色</f-tag>
        <f-tag color="magenta">品红色</f-tag>
        <f-tag color="gray">灰色</f-tag>
      </div>
    </div>
    <div class="section">
      <div class="section-title">深色变体</div>
      <div class="tag-row">
        <f-tag color="red" variant="dark">红色</f-tag>
        <f-tag color="orangered" variant="dark">橙红色</f-tag>
        <f-tag color="orange" variant="dark">橙色</f-tag>
        <f-tag color="gold" variant="dark">金色</f-tag>
        <f-tag color="lime" variant="dark">绿黄色</f-tag>
        <f-tag color="green" variant="dark">绿色</f-tag>
        <f-tag color="cyan" variant="dark">青色</f-tag>
        <f-tag color="blue" variant="dark">蓝色</f-tag>
        <f-tag color="fishblue" variant="dark">鱼蓝色</f-tag>
        <f-tag color="purple" variant="dark">紫色</f-tag>
        <f-tag color="pinkpurple" variant="dark">粉紫色</f-tag>
        <f-tag color="magenta" variant="dark">品红色</f-tag>
        <f-tag color="gray" variant="dark">灰色</f-tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
