<template>
  <f-space direction="vertical" align="start">
    <!-- 不同形状 -->
    <div>
      <p>圆形头像组：</p>
      <f-avatar-group :max-count="3">
        <f-avatar v-for="i in 5" :key="i" :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">
          U{{ i }}
        </f-avatar>
      </f-avatar-group>
    </div>

    <div>
      <p>方形头像组：</p>
      <f-avatar-group :max-count="3" shape="square">
        <f-avatar v-for="i in 5" :key="i" shape="square"
                  :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">U{{ i }}
        </f-avatar>
      </f-avatar-group>
    </div>

    <!-- 自定义额外头像样式 -->
    <div>
      <p>自定义额外头像样式：</p>
      <f-avatar-group
        :max-count="3"
        :extra-avatar-style="{ backgroundColor: '#ff4d4f', color: 'white' }"
      >
        <f-avatar v-for="i in 6" :key="i" :style="{ backgroundColor: `hsl(${i * 40}, 80%, 60%)` }">
          U{{ i }}
        </f-avatar>
      </f-avatar-group>
    </div>

    <!-- 自定义间距 -->
    <div>
      <p>不同间距：</p>
      <f-space>
        <f-avatar-group :gap="-25">
          <f-avatar v-for="i in 3" :key="i"
                    :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">
            {{ i }}{{ i }}
          </f-avatar>
        </f-avatar-group>

        <f-avatar-group :gap="-10">
          <f-avatar v-for="i in 3" :key="i"
                    :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">
            {{ i }}{{ i }}
          </f-avatar>
        </f-avatar-group>

        <f-avatar-group :gap="0">
          <f-avatar v-for="i in 3" :key="i"
                    :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">
            {{ i }}{{ i }}
          </f-avatar>
        </f-avatar-group>
      </f-space>
    </div>
  </f-space>
</template>
<style scoped>
p {
  margin: 8px 0;
  font-size: 14px;
}
</style>
