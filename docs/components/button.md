# 按钮 Button

按钮用于开始一个即时操作。

## 基础用法

按钮有五种主题：默认按钮、主要按钮、成功按钮、警告按钮和危险按钮。

<demo src="./demo/button/theme.vue"></demo>

## 按钮形状

按钮有三种形状 `shape`：默认 `default`、圆角 `round` 和圆形 `circle`。

<demo src="./demo/button/shape.vue"></demo>

## 按钮尺寸

按钮有三种 `size` 尺寸：大 `large`、中 `medium`（默认）、小 `small`。

<demo src="./demo/button/size.vue"></demo>

## 长按钮
给按钮设置 `long` 属性为 `true` 使按钮的长度盛满容器。

<demo src="./demo/button/long.vue"></demo>

## 加载中
给按钮设置 `loading` 属性为 `true` 开始加载。
<demo src="./demo/button/loading.vue"></demo>

## 禁用状态
给按钮设置 `disabled` 属性为 `true` 禁止点击。
<demo src="./demo/button/disable.vue"></demo>

## 按钮组

将多个按钮组合在一起，可以使用 `size` 属性设置大小。

<demo src="./demo/button/group.vue"></demo>

## API

### Button Props

| 属性名      | 说明     | 类型                                                           | 默认值       |
|----------|--------|--------------------------------------------------------------|-----------|
| theme    | 按钮主题   | `default` \| `primary` \| `success` \| `warning` \| `danger` | `default` |
| size     | 按钮尺寸   | `small` \| `medium` \| `large`                               | `medium`  |
| shape    | 按钮形状   | `default` \| `circle` \| `round`                             | `default` |
| type     | 按钮类型   | `default` \| `outline` \| `dashed` \| `text`                 | `default` |
| long     | 是否为长按钮 | boolean                                                      | false     |
| loading  | 是否加载中  | boolean                                                      | false     |
| disabled | 是否禁用   | boolean                                                      | false     |

### Button Events

| 事件名   | 说明   | 类型                          |
|-------|------|-----------------------------|
| click | 点击事件 | (event: MouseEvent) => void |

### Button Slots

| 插槽名     | 说明   |
|---------|------|
| default | 按钮内容 |

### ButtonGroup Props

| 属性名  | 说明    | 类型                             | 默认值      |
|------|-------|--------------------------------|----------|
| size | 按钮组尺寸 | `small` \| `medium` \| `large` | `medium` |

### ButtonGroup Slots

| 插槽名     | 说明    |
|---------|-------|
| default | 按钮组内容 |
