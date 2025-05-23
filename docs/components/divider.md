# Divider 分割线

用于分隔内容的线条，可水平或垂直显示，支持自定义样式和插入文字。

## 基本用法

<demo src="./demo/divider/base.vue"></demo>

## 文字分割线

<demo src="./demo/divider/text.vue"></demo>

## 垂直分割线

<demo src="./demo/divider/vertical.vue"></demo>

## 自定义类型

<demo src="./demo/divider/type.vue"></demo>

## 自定义尺寸和间距

<demo src="./demo/divider/size.vue"></demo>

## API

| 参数          | 说明              | 类型                                          | 默认值          |
|-------------|-----------------|---------------------------------------------|--------------|
| direction   | 分割线的方向          | `horizontal` \| `vertical`                  | `horizontal` |
| orientation | 分割线文字的位置        | `left` \| `center` \| `right`               | `center`     |
| type        | 分割线样式类型         | `solid` \| `dashed` \| `dotted` \| `double` | `solid`      |
| size        | 分割线宽度/高度        | number                                      | -            |
| margin      | 分割线上下/左右 margin | number \| string                            | -            |