# 卡片 Card

卡片是一种容器，可以承载文字、列表、图片、段落等内容。

## 基础用法

最简单的卡片容器，可以包含标题、内容、操作等部分。

<demo src="./demo/card/basic.vue"></demo>

## 不同尺寸

卡片组件提供两种尺寸：`medium`（默认）和 `small`。

<demo src="./demo/card/size.vue"></demo>

## 边框

可以通过 `bordered` 属性设置卡片是否有边框，默认有边框。

<demo src="./demo/card/bordered.vue"></demo>

## 悬浮效果

可以通过 `hoverable` 属性设置卡片是否在鼠标悬浮时显示阴影效果。

<demo src="./demo/card/hoverable.vue"></demo>

## 加载中

可以通过 `loading` 属性设置卡片是否处于加载中状态。

<demo src="./demo/card/loading.vue"></demo>

## 带封面、头像和操作的卡片

可以利用 `FCardMeta` 组件展示更复杂的卡片内容，包括封面、头像、标题、描述和底部操作等。

<demo src="./demo/card/meta.vue"></demo>

## API

### Card Props

| 参数名         | 说明         | 类型                  | 默认值        |
|-------------|------------|---------------------|------------|
| bordered    | 是否有边框      | boolean             | true       |
| loading     | 是否为加载中     | boolean             | false      |
| hoverable   | 是否可悬浮      | boolean             | false      |
| size        | 卡片尺寸       | `medium` \| `small` | medium     |
| headerStyle | 自定义标题区域样式  | CSSProperties       | () => ({}) |
| bodyStyle   | 内容区域自定义样式  | CSSProperties       | () => ({}) |
| title       | 卡片标题       | string              | -          |
| extra       | 卡片右上角的操作区域 | string              | -          |

### Card Slots

| 插槽名     | 说明         | 参数 |
|---------|------------|----|
| default | 卡片内容       | -  |
| actions | 卡片底部的操作组   | -  |
| cover   | 卡片封面       | -  |
| extra   | 卡片右上角的操作区域 | -  |
| title   | 卡片标题       | -  |

### CardMeta Props

| 参数名         | 说明 | 类型     | 默认值 |
|-------------|----|--------|-----|
| title       | 标题 | string | -   |
| description | 描述 | string | -   |

### CardMeta Slots

| 插槽名         | 说明 | 参数 |
|-------------|----|----|
| description | 描述 | -  |
| title       | 标题 | -  |
| avatar      | 头像 | -  | 