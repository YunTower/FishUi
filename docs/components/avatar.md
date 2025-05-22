# 头像 Avatar

用于展示用户或事物的头像，支持图片、文字、图标等多种形式。

## 基础用法

最常用的头像展示方式。

<demo src="./demo/avatar/basic.vue"></demo>

## 不同形状

通过 `shape` 属性设置头像的形状，支持圆形和方形。

<demo src="./demo/avatar/shape.vue"></demo>

## 不同尺寸

通过 `size` 属性设置头像的尺寸，支持预设和自定义数值。

<demo src="./demo/avatar/size.vue"></demo>

## 自定义背景色

通过 `backgroundColor` 属性设置头像的背景色。

<demo src="./demo/avatar/background.vue"></demo>

## 可点击头像

通过 `triggerType` 属性设置触发器的类型，支持遮罩层和按钮两种方式。

<demo src="./demo/avatar/trigger.vue"></demo>

## 头像组

使用 `f-avatar-group` 组件展示多个头像。

<demo src="./demo/avatar/group.vue"></demo>

## API

### Avatar Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像形状 | 'circle' \| 'square' | 'circle' |
| size | 头像尺寸 | number \| 'mini' \| 'small' \| 'medium' \| 'large' | 'medium' |
| imageUrl | 图片地址 | string | - |
| autoFixFontSize | 是否自动调整文字大小 | boolean | true |
| triggerType | 触发器类型 | 'mask' \| 'button' | 'mask' |
| triggerIconStyle | 触发器图标样式 | Record<string, any> | {} |
| objectFit | 图片填充模式 | 'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down' | 'cover' |
| backgroundColor | 背景色 | string | - |

### Avatar Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击头像时触发 | (event: MouseEvent) |

### Avatar Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义头像内容 |
| trigger | 自定义触发器图标 |

### AvatarGroup Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像形状 | 'circle' \| 'square' | 'circle' |
| size | 头像尺寸 | number \| 'mini' \| 'small' \| 'medium' \| 'large' | 'medium' |
| maxCount | 最大显示数量 | number | - |
| zIndexAscend | 是否按顺序递增 z-index | boolean | true |
| maxStyle | 超出数量提示的样式 | Record<string, any> | {} |
| maxPopoverTriggerProps | 超出数量提示的弹出框属性 | Record<string, any> | {} |

### AvatarGroup Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 头像组内容 |
| max | 超出数量提示的内容 | 