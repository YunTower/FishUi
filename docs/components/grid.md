# 栅格 Grid

栅格系统是一种用于页面布局的系统，通过行（row）和列（col）的设置，迅速简便地创建布局。

## 基础用法

使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

<demo src="./demo/grid/basic.vue"></demo>

## 区块间隔

栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。

<demo src="./demo/grid/gutter.vue"></demo>

## 栅格偏移

使用 offset 可以将列向右侧偏移。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。

<demo src="./demo/grid/offset.vue"></demo>

## 水平布局

通过 justify 属性设置 flex 布局下的水平对齐方式。

<demo src="./demo/grid/justify.vue"></demo>

## 垂直布局

通过 align 属性设置 flex 布局下的垂直对齐方式。

<demo src="./demo/grid/align.vue"></demo>

## 响应式布局

参照 Bootstrap 的响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<demo src="./demo/grid/responsive.vue"></demo>

## Flex 用法

通过 flex 属性设置 flex 布局属性。

<demo src="./demo/grid/flex.vue"></demo>

## Grid 布局

使用 Grid 和 GridItem 组件可以实现更灵活的栅格布局。

<demo src="./demo/grid/grid.vue"></demo>

## 后缀元素

通过 suffix 属性可以将元素放置在行尾。

<demo src="./demo/grid/suffix.vue"></demo>

## API

### Row Props

| 参数名     | 描述                                   | 类型                                                            | 默认值     | 版本     |
|---------|--------------------------------------|---------------------------------------------------------------|---------|--------|
| gutter  | 栅格间隔，单位是px。可传入响应式对象写法，或传入数组设置水平和垂直间距 | number / ResponsiveValue / [number, number]                   | 0       |        |
| justify | 水平对齐方式                               | `start` / `center` / `end` / `space-around` / `space-between` | `start` |        |
| align   | 竖直对齐方式                               | `start` / `center` / `end` / `stretch`                        | `start` |        |
| div     | 是否作为普通div使用                          | boolean                                                       | false   |        |
| wrap    | Col是否支持换行                            | boolean                                                       | true    | 2.13.0 |

### Col Props

| 参数名    | 描述              | 类型              | 默认值 | 版本     |
|--------|-----------------|-----------------|-----|--------|
| span   | 栅格占位格数          | number          | 24  |        |
| offset | 栅格左侧的间隔格数       | number          | -   |        |
| order  | 对元素进行排序         | number          | -   |        |
| xs     | 小于576px响应式栅格    | number / object | -   |        |
| sm     | 大于等于576px响应式栅格  | number / object | -   |        |
| md     | 大于等于768px响应式栅格  | number / object | -   |        |
| lg     | 大于等于992px响应式栅格  | number / object | -   |        |
| xl     | 大于等于1200px响应式栅格 | number / object | -   |        |
| xxl    | 大于等于1600px响应式栅格 | number / object | -   |        |
| flex   | 设置flex布局属性      | number / string | -   | 2.10.0 |

### Grid Props

| 参数名            | 描述       | 类型                       | 默认值   |
|----------------|----------|--------------------------|-------|
| cols           | 每一行展示的列数 | number / ResponsiveValue | 24    |
| row-gap        | 行与行之间的间距 | number / ResponsiveValue | 0     |
| col-gap        | 列与列之间的间距 | number / ResponsiveValue | 0     |
| collapsed      | 是否折叠     | boolean                  | false |
| collapsed-rows | 折叠时显示的行数 | number                   | 1     |

### GridItem Props

| 参数名    | 描述      | 类型                       | 默认值   |
|--------|---------|--------------------------|-------|
| span   | 跨越的格数   | number / ResponsiveValue | 1     |
| offset | 左侧的间隔格数 | number / ResponsiveValue | 0     |
| suffix | 是否是后缀元素 | boolean                  | false |

### ResponsiveValue

| 断点  | 说明                      | 类型     |
|-----|-------------------------|--------|
| xxl | 适用于屏幕宽度大于等于1600px的响应式配置 | number |
| xl  | 适用于屏幕宽度大于等于1200px的响应式配置 | number |
| lg  | 适用于屏幕宽度大于等于992px的响应式配置  | number |
| md  | 适用于屏幕宽度大于等于768px的响应式配置  | number |
| sm  | 适用于屏幕宽度大于等于576px的响应式配置  | number |
| xs  | 适用于屏幕宽度小于576px的响应式配置    | number | 