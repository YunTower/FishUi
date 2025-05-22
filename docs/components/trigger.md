# 触发器 Trigger

触发器组件可以套在任意组件外面，提供点击、悬浮等触发方式，适用于上传、编辑等场景。

## 基础用法

触发器有两种类型：遮罩 `mask` 和按钮 `button`。

<demo src="./demo/trigger/basic.vue"></demo>

## 触发方式

触发器支持三种触发方式：点击 `click`、悬浮 `hover` 和聚焦 `focus`。

<demo src="./demo/trigger/trigger-type.vue"></demo>

## 多种触发方式

触发器支持同时设置多种触发方式。

<demo src="./demo/trigger/multiple-trigger.vue"></demo>

## 右键点击支持

按钮类型的触发器同时支持左键和右键点击。

<demo src="./demo/trigger/right-click.vue"></demo>

## 禁用状态

设置 `disabled` 属性为 `true` 可以禁用触发器。

<demo src="./demo/trigger/disabled.vue"></demo>

## 实际应用

触发器可以套在任意组件外面，下面是一些实际应用示例。

<demo src="./demo/trigger/application.vue"></demo>

## API

### Trigger Props

| 属性名       | 说明      | 类型                                                                | 默认值       |
|-----------|---------|-------------------------------------------------------------------|-----------|
| trigger   | 触发方式    | `click` \| `hover` \| `focus` \| (`click` \| `hover` \|`focus`)[] | `[click]` |
| type      | 触发器类型   | `mask` \| `button`                                                | `mask`    |
| disabled  | 是否禁用    | boolean                                                           | false     |
| iconStyle | 触发器图标样式 | Record<string, any>                                               | {}        |

### Trigger Events

| 事件名     | 说明   | 类型                     |
|---------|------|------------------------|
| trigger | 触发事件 | (event: Event) => void |

### Trigger Slots

| 插槽名     | 说明      |
|---------|---------|
| default | 触发器内容   |
| icon    | 触发器图标内容 | 