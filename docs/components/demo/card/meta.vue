<template>
  <div>
    <f-card style="width: 360px" :hoverable="true">
      <template #cover>
        <img src="https://picsum.photos/360/200" alt="随机图片" />
      </template>
      <f-card-meta title="FishUI Card" description="这是一个带有Meta信息的卡片，可以展示更丰富的内容">
        <template #avatar>
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary-light-3); display: flex; align-items: center; justify-content: center; color: #fff;">F</div>
        </template>
      </f-card-meta>
      <template #actions>
        <div style="display: flex; justify-content: space-around; width: 100%;">
          <a href="javascript:;">操作1</a>
          <a href="javascript:;">操作2</a>
          <a href="javascript:;">操作3</a>
        </div>
      </template>
    </f-card>
  </div>
</template>
