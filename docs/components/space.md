# 间距 Space

用于组件、元素之间的间距分隔，支持灵活的方向、对齐、换行、分隔符等。

## 基础用法

最常用的横向间距，默认间距为 8px。

<demo src="./demo/space/basic.vue"></demo>

## 垂直间距

通过 `direction` 属性设置为 `vertical` 实现垂直间距。

<demo src="./demo/space/vertical.vue"></demo>

## 间距大小

通过 `size` 属性设置间距大小，支持预设和自定义数值。

<demo src="./demo/space/size.vue"></demo>

预设的间距大小：
- mini: 4px
- small: 8px (默认)
- medium: 16px
- large: 24px

## 对齐方式

通过 `align` 属性设置对齐方式，支持 start、end、center、baseline 四种对齐方式。

<demo src="./demo/space/align.vue"></demo>

## 自动换行

通过 `wrap` 属性让内容自动换行，适用于内容较多的情况。

<demo src="./demo/space/wrap.vue"></demo>

## 分隔符

通过 `split` 插槽自定义分隔符，可以添加图标、文字等作为分隔符。

<demo src="./demo/space/split.vue"></demo>

## 充满整行

通过 `fill` 属性让子项等分宽度，适用于需要子项平均分配空间的场景。

<demo src="./demo/space/fill.vue"></demo>

## API

### Space Props

| 属性名       | 说明     | 类型                                                                           | 默认值          |
|-----------|--------|------------------------------------------------------------------------------|--------------|
| align     | 对齐方式   | `start` \| `end` \| `center` \| `baseline`                                   | -            |
| direction | 间距方向   | `vertical` \| `horizontal`                                                   | `horizontal` |
| size      | 间距大小   | number \| `mini` \| `small` \| `medium` \| `large` \| [SpaceSize, SpaceSize] | `small`      |
| wrap      | 是否自动换行 | boolean                                                                      | false        |
| fill      | 充满整行   | boolean                                                                      | false        |

### Space Slots

| 插槽名     | 说明   |
|---------|------|
| default | 间距内容 |
| split   | 分隔符  |

### 类型定义

```ts
export type SpaceSize = number | `mini` | `small` | `medium` | `large`;
```

### 注意事项

1. 当使用 `fill` 属性时，子项会平均分配空间，此时子项的宽度会被强制设置为相等。
2. 在垂直方向（`direction="vertical"`）时，`align` 属性无效。
3. 当使用 `wrap` 属性时，垂直方向的间距会自动应用。
4. 分隔符（`split` 插槽）只在水平方向时生效。 