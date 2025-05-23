<template>
  <f-space direction="vertical" align="start">
    <div>
      <p>头像组中的文字自适应（启用）：</p>
      <f-avatar-group :gap="-5" :auto-fix-font-size="true">
        <f-avatar style="background-color: hsl(0, 80%, 60%)">A</f-avatar>
        <f-avatar style="background-color: hsl(60, 80%, 60%)">AB</f-avatar>
        <f-avatar style="background-color: hsl(120, 80%, 60%)">ABC</f-avatar>
        <f-avatar style="background-color: hsl(180, 80%, 60%)">ABCD</f-avatar>
        <f-avatar style="background-color: hsl(240, 80%, 60%)">ABCDE</f-avatar>
      </f-avatar-group>
    </div>

    <div>
      <p>头像组中的文字自适应（禁用）：</p>
      <f-avatar-group :gap="-5" :auto-fix-font-size="false">
        <f-avatar style="background-color: hsl(0, 80%, 60%)">A</f-avatar>
        <f-avatar style="background-color: hsl(60, 80%, 60%)">AB</f-avatar>
        <f-avatar style="background-color: hsl(120, 80%, 60%)">ABC</f-avatar>
        <f-avatar style="background-color: hsl(180, 80%, 60%)">ABCD</f-avatar>
        <f-avatar style="background-color: hsl(240, 80%, 60%)">ABCDE</f-avatar>
      </f-avatar-group>
    </div>

    <div>
      <p>不同尺寸的头像组：</p>
      <f-space>
        <f-avatar-group :size="30" :gap="-5">
          <f-avatar v-for="i in 3" :key="i"
                    :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">
            {{ i }}{{ i }}
          </f-avatar>
        </f-avatar-group>

        <f-avatar-group :size="40" :gap="-5">
          <f-avatar v-for="i in 3" :key="i"
                    :style="{ backgroundColor: `hsl(${i * 60}, 80%, 60%)` }">
            {{ i }}{{ i }}
          </f-avatar>
        </f-avatar-group>

        <f-avatar-group :size="50" :gap="-5">
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
