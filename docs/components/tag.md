# 标签 Tag

用于标记和选择的标签组件。

## 基本用法

基础的标签用法，可以通过设置 `theme` 来使用不同主题的标签。

<demo src="./demo/tag/basic.vue"></demo>

## 可关闭标签

设置 `closable` 属性可以定义一个标签是否可以关闭，可以通过 `close` 事件来监听关闭事件。

<demo src="./demo/tag/closable.vue"></demo>

## 动态编辑标签

动态编辑标签，可以组合使用标签的关闭和添加功能。

<demo src="./demo/tag/editable.vue"></demo>

## 标签颜色

标签提供多种预设颜色，可以通过 `color` 属性来设置。

<demo src="./demo/tag/color.vue"></demo>

## 标签尺寸

标签提供三种尺寸：小、中、大，可以通过 `size` 属性来设置。

<demo src="./demo/tag/size.vue"></demo>

## 加载中状态

设置 `loading` 属性可以定义标签是否处于加载中状态。

<demo src="./demo/tag/loading.vue"></demo>

## 带图标的标签

可以通过 `icon` 插槽来为标签添加图标。

<demo src="./demo/tag/icon.vue"></demo>

## 带边框的标签

设置 `bordered` 属性可以为标签添加边框，或者通过 `variant` 属性使用不同的边框风格。

<demo src="./demo/tag/bordered.vue"></demo>

## 可选择标签

使用 `FCheckTag` 组件可以方便地创建可选择的标签。

<demo src="./demo/tag/check-tag.vue"></demo>

## 可选择标签组

使用 `FCheckTagGroup` 组件可以方便地创建标签选择组，支持单选和多选模式。

<demo src="./demo/tag/check-tag-group.vue"></demo>

## 超长省略文本标签

设置 `nowrap` 和 `maxWidth` 属性可以使标签内容在超长时显示省略号。

<demo src="./demo/tag/ellipsis.vue"></demo>

## 不同形状的标签

通过 `shape` 属性可以设置标签的不同形状。

<demo src="./demo/tag/shape.vue"></demo>

## 自定义标签颜色

可以通过 CSS 自定义标签的颜色样式。

<demo src="./demo/tag/custom-color.vue"></demo>

## API

### Tag Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 标签的颜色 | 'red' \| 'orangered' \| 'orange' \| 'gold' \| 'lime' \| 'green' \| 'cyan' \| 'blue' \| 'fishblue' \| 'purple' \| 'pinkpurple' \| 'magenta' \| 'gray' | - |
| size | 标签的大小 | 'small' \| 'medium' \| 'large' | 'medium' |
| shape | 标签的形状 | 'square' \| 'round' \| 'mark' | 'square' |
| bordered | 是否显示边框 | boolean | false |
| visible (v-model) | 标签是否可见 | boolean | true |
| loading | 标签是否为加载中状态 | boolean | false |
| closable | 标签是否可关闭 | boolean | false |
| disabled | 标签禁用态 | boolean | false |
| nowrap | 标签内容不换行 | boolean | false |
| maxWidth | 标签最大宽度 | string \| number | - |
| theme | 标签主题 | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' | 'default' |
| variant | 标签风格变体 | 'dark' \| 'light' \| 'outline' \| 'light-outline' | 'dark' |

### Tag Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| close | 点击关闭按钮时触发 | (event: MouseEvent) |

### Tag Slots

| 插槽名 | 描述 |
| --- | --- |
| default | 标签内容 |
| icon | 图标 |
| close-icon | 关闭按钮的图标 |

### CheckTag Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked (v-model) | 标签是否选中 | boolean | - |
| defaultChecked | 标签默认选中状态 | boolean | - |
| disabled | 标签禁用态 | boolean | false |
| size | 标签尺寸 | 'small' \| 'medium' \| 'large' | 'medium' |
| value | 标签唯一标识，一般用于标签组场景 | string \| number | - |
| checkedProps | 透传标签选中态属性 | Partial\<TagProps\> | - |
| uncheckedProps | 透传标签未选态属性 | Partial\<TagProps\> | - |

### CheckTag Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| change | 状态切换时触发 | (checked: boolean, context: CheckTagChangeContext) |
| click | 点击标签时触发 | (context: { e: MouseEvent }) |

### CheckTagGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| multiple | 是否支持选中多个标签 | boolean | false |
| options | 标签选项列表 | CheckTagGroupOption[] | - |
| value (v-model) | 选中标签值 | CheckTagGroupValue | - |
| defaultValue | 选中标签默认值 | CheckTagGroupValue | [] |
| checkedProps | 透传标签选中态属性 | Partial\<TagProps\> | - |
| uncheckedProps | 透传标签未选态属性 | Partial\<TagProps\> | - |

### CheckTagGroup Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| change | 选中标签值变化时触发 | (value: CheckTagGroupValue, context: CheckTagGroupChangeContext) | 