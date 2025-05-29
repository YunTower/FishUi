# 空状态 Empty

空状态时的展示占位图。

## 基础用法

基础的空状态组件。

<demo src="./demo/empty/basic.vue"></demo>

## 自定义描述文案

使用 `description` 属性自定义描述内容。

<demo src="./demo/empty/description.vue"></demo>

## 自定义图片

使用 `img-src` 属性设置自定义图片。

<demo src="./demo/empty/custom-image.vue"></demo>

## 不同尺寸

通过 `size` 属性设置不同尺寸的空状态组件，有 `small`、`medium`、`large` 可选，默认为 `medium`。

<demo src="./demo/empty/size.vue"></demo>

## 不同类型

通过 `type` 属性设置不同类型的空状态组件，有 `empty`、`success`、`fail`、`network-error`、`maintenance` 可选，默认为 `empty`。

<demo src="./demo/empty/type.vue"></demo>

## 带标题

通过 `title` 属性设置空状态组件的标题。

<demo src="./demo/empty/title.vue"></demo>

## 带操作按钮

通过 `action` 插槽添加操作按钮。

<demo src="./demo/empty/action.vue"></demo>

## 自定义图片样式

通过 `image-style` 属性设置自定义图片样式。

<demo src="./demo/empty/image-style.vue"></demo>

## 自定义内容

使用插槽自定义空状态的内容。

<demo src="./demo/empty/custom-slot.vue"></demo>

## API

### Empty Props

| 参数名 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 描述内容 | string | - | - |
| img-src | 自定义图片的地址 | string | - | - |
| in-config-provider | 是否在 ConfigProvider 中使用 | boolean | false | 2.47.0 |
| image-style | 透传图片样式表 | CSSProperties | - | - |
| size | 空状态的尺寸 | 'small' \| 'medium' \| 'large' | 'medium' | - |
| title | 错误标题 | string | - | - |
| type | 组件类型 | 'empty' \| 'success' \| 'fail' \| 'network-error' \| 'maintenance' | 'empty' | - |

### Empty Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| image | 图片/图标 | - |
| title | 标题内容 | - |
| default | 描述内容 | - |
| action | 操作按钮 | - |
</rewritten_file> 