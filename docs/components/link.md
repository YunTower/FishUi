# 链接 Link

链接用于页面跳转或打开新页面。

## 基础用法

链接有五种主题：默认链接、主要链接、危险链接、警告链接和成功链接。

<demo src="./demo/link/theme.vue"></demo>

## 链接尺寸

链接有三种尺寸：大、中（默认）、小。

<demo src="./demo/link/size.vue"></demo>

## 下划线

链接有三种下划线 `underline` 模式：始终显示 `always`、悬浮时显示 `hover`、不显示 `none`。

<demo src="./demo/link/underline.vue"></demo>

## 禁用状态

给链接设置 `disabled` 属性为 `true` 禁止点击。

<demo src="./demo/link/disabled.vue"></demo>

## 带图标

链接可以设置前置图标和后置图标。

<demo src="./demo/link/icon.vue"></demo>

## API

### Link Props

| 属性名       | 说明                    | 类型                                                           | 默认值       |
|-----------|-----------------------|--------------------------------------------------------------|-----------|
| content   | 链接内容                  | string \| Slot \| Function                                   | -         |
| disabled  | 禁用链接                  | boolean                                                      | `false`   |
| download  | 使得浏览器将链接的 URL 视为可下载资源 | string \| boolean                                            | -         |
| href      | 跳转链接                  | string                                                       | -         |
| size      | 尺寸                    | `small` \| `medium` \| `large`                               | `medium`  |
| theme     | 组件风格                  | `default` \| `primary` \| `danger` \| `warning` \| `success` | `default` |
| target    | 跳转方式                  | string                                                       | -         |
| underline | 下划线模式                 | `always` \| `hover` \| `none`                                | `hover`   |

### Link Events

| 事件名   | 说明   | 类型                          |
|-------|------|-----------------------------|
| click | 点击事件 | (event: MouseEvent) => void |

### Link Slots

| 插槽名        | 说明   |
|------------|------|
| default    | 链接内容 |
| prefixIcon | 前置图标 |
| suffixIcon | 后置图标 |
