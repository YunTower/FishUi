# Badge 徽标

用于展示数量、状态的小型标记。

## 基本用法

徽标组件基本用法。

<demo src="./demo/badge/basic.vue"></demo>

## 独立使用

不包裹任何元素，独立使用。

<demo src="./demo/badge/standalone.vue"></demo>

## 小红点

通过设置 `dot` 属性，可以展示一个小红点。

<demo src="./demo/badge/dot.vue"></demo>

## 文本内容

通过设置 `text` 属性，可以展示自定义文本内容。

<demo src="./demo/badge/text.vue"></demo>

## 最大值

通过设置 `max-count` 属性，可以自定义封顶的数字值，超过这个值会显示为 `maxCount+`。

<demo src="./demo/badge/max-count.vue"></demo>

## 状态点

通过设置 `status` 属性，可以展示不同状态的徽标。

<demo src="./demo/badge/status.vue"></demo>

## 颜色

徽标支持内置的主题颜色和自定义颜色。

<demo src="./demo/badge/color.vue"></demo>

## 位置偏移

通过设置 `offset` 属性，可以自定义徽标的位置偏移，数组的两个值分别是水平和垂直方向的偏移量。

<demo src="./demo/badge/offset.vue"></demo>

## 徽标组

使用 `BadgeGroup` 组件可以对多个徽标进行分组展示，支持水平和垂直排列。

<demo src="./demo/badge/group.vue"></demo>

## API

### Badge 属性

| 参数名       | 描述                                  | 类型                                                             | 默认值      |
|-----------|-------------------------------------|----------------------------------------------------------------|----------|
| text      | 自定义提示内容                             | string                                                         | -        |
| count     | 徽标显示的数字                             | number                                                         | -        |
| dot       | 显示为小红点                              | boolean                                                        | false    |
| dot-style | 徽标的样式                               | object                                                         | -        |
| max-count | 徽标最大显示数值，如果count超过这个数值会显示为maxCount+ | number                                                         | 99       |
| offset    | 设置徽标位置的偏移                           | [number, number]                                               | []       |
| color     | 内置的一些颜色或自定义颜色                       | `primary` \| `success` \| `warning` \| `danger` \| string      | -        |
| status    | 徽标的状态类型                             | `normal` \| `processing` \| `success` \| `warning` \| `danger` | -        |
| shape     | 徽标形状                                | `circle` \| `round`                                            | `circle` |
| size      | 徽标尺寸                                | `small` \| `medium`                                            | `medium` |
| show-zero | 当数值为0时，是否展示徽标                       | boolean                                                        | false    |

### Badge 插槽

| 插槽名     | 描述      |
|---------|---------|
| default | 徽标包裹的内容 |

### BadgeGroup 属性

| 参数名       | 描述   | 类型                         | 默认值          |
|-----------|------|----------------------------|--------------|
| gap       | 间距   | number \| string           | 8            |
| direction | 排列方向 | `horizontal` \| `vertical` | `horizontal` |

### BadgeGroup 插槽

| 插槽名     | 描述                  |
|---------|---------------------|
| default | 徽标组的内容，一般是多个Badge组件 | 