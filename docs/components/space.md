# 间距 Space

用于组件、元素之间的间距分隔，支持灵活的方向、对齐、换行、分隔符等。

## 基础用法

最常用的横向间距。

<demo src="./demo/space/basic.vue"></demo>

## 垂直间距

通过 `direction` 属性设置为 `vertical` 实现垂直间距。

<demo src="./demo/space/vertical.vue"></demo>

## 间距大小

通过 `size` 属性设置间距大小，支持预设和自定义数值。

<demo src="./demo/space/size.vue"></demo>

## 对齐方式

通过 `align` 属性设置对齐方式。

<demo src="./demo/space/align.vue"></demo>

## 自动换行

通过 `wrap` 属性让内容自动换行。

<demo src="./demo/space/wrap.vue"></demo>

## 分隔符

通过 `split` 插槽自定义分隔符。

<demo src="./demo/space/split.vue"></demo>

## 充满整行

通过 `fill` 属性让子项等分宽度。

<demo src="./demo/space/fill.vue"></demo>

## API

### Space Props

| 属性名    | 说明         | 类型                                                                 | 默认值        |
|---------|------------|--------------------------------------------------------------------|------------|
| align   | 对齐方式      | 'start' \| 'end' \| 'center' \| 'baseline'                        | -          |
| direction | 间距方向    | 'vertical' \| 'horizontal'                                          | 'horizontal'|
| size    | 间距大小      | number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SpaceSize, SpaceSize] | 'small'    |
| wrap    | 是否自动换行   | boolean                                                            | false      |
| fill    | 充满整行      | boolean                                                            | false      |

### Space Slots

| 插槽名   | 说明     |
|--------|--------|
| default| 间距内容  |
| split  | 分隔符    |

### 类型定义

```ts
export type SpaceSize = number | 'mini' | 'small' | 'medium' | 'large';
``` 