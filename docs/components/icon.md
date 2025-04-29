# 图标 Icon

图标组件，基于 [Remix Icon](https://remixicon.com/) 图标库。

## 基础用法

<demo src="./demo/icon/basic.vue"></demo>

## 图标尺寸

图标支持两种尺寸设置方式：数字（像素）和字符串（如 '1em', '24px'）。

<demo src="./demo/icon/size.vue"></demo>

## 图标颜色

可以通过 `color` 属性设置图标颜色。

<demo src="./demo/icon/color.vue"></demo>

## 使用说明

1. 图标名称需要参考 [Remix Icon](https://remixicon.com/) 图标库
2. 组件会自动添加 `ri-` 前缀，例如 `home-line` 对应的类名是 `ri-home-line`
3. 尺寸属性 `size` 支持两种方式：
   - 数字类型：直接设置像素值，如 `:size="24"`
   - 字符串类型：支持任意用于设置字体大小的 CSS 尺寸单位，如 `size="1em"` 或 `size="24px"`

## API

### Icon Props

| 属性名 | 说明     | 类型                 | 默认值           |
| ------ | -------- | -------------------- | ---------------- |
| name   | 图标名称 | `string`             | -                |
| size   | 图标大小 | `string` \| `number` | `'1em'`          |
| color  | 图标颜色 | `string`             | `'currentColor'` |

### Icon Events

| 事件名 | 说明     | 类型                          |
| ------ | -------- | ----------------------------- |
| click  | 点击事件 | `(event: MouseEvent) => void` |
