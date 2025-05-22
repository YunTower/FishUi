# 头像 Avatar

用于展示用户或事物信息的头像组件。

## 基础用法

头像组件支持图片、文字两种展示方式。

<demo src="./demo/avatar/basic.vue"></demo>

## 不同形状

头像组件支持圆形和方形两种形状。

<demo src="./demo/avatar/shape.vue"></demo>

## 不同尺寸

头像组件支持自定义尺寸。

<demo src="./demo/avatar/size.vue"></demo>

## 可点击头像

头像组件支持点击交互，有两种交互类型：遮罩层和按钮。

<demo src="./demo/avatar/trigger.vue"></demo>

## 头像组

头像组组件用于展示多个头像，支持设置最大显示数量。

<demo src="./demo/avatar/group.vue"></demo>

## API

### Avatar Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像的形状 | `circle` \| `square` | `circle` |
| image-url | 自定义头像图片地址 | string | - |
| size | 头像的尺寸大小，单位是 px | number | 40 |
| auto-fix-font-size | 是否自动根据头像尺寸调整字体大小 | boolean | true |
| trigger-type | 可点击的头像交互类型 | `mask` \| `button` | - |
| trigger-icon-style | 交互图标的样式 | CSSProperties | - |
| object-fit | 图片在容器内的的适应类型 | `fill` \| `contain` \| `cover` \| `none` \| `scale-down` | `cover` |

### Avatar Events

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| click | 点击事件 | (event: MouseEvent) => void |
| error | 图片加载错误 | () => void |
| load | 图片加载成功 | () => void |

### Avatar Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 头像内容 |
| trigger-icon | 可点击的头像交互图标 |

### AvatarGroup Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像的形状 | `circle` \| `square` | `circle` |
| size | 头像的尺寸大小，单位是 px | number | 40 |
| auto-fix-font-size | 是否自动根据头像尺寸调整字体大小 | boolean | true |
| max-count | 头像组最多显示的头像数量 | number | 0 |
| z-index-ascend | 头像组内的头像 z-index 递增 | boolean | false |
| max-style | 多余头像样式 | CSSProperties | - |
| max-popover-trigger-props | 多余头像气泡的 TriggerProps | TriggerProps | - |

### AvatarGroup Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 头像组内容 |
| max-content | 自定义多余头像气泡内容 |
| max-{index} | 自定义多余头像气泡中的每个头像 | 