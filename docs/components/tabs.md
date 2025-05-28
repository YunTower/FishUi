# 选项卡 Tabs

选项卡组件，用于在不同的内容区域之间进行切换。

## 基本用法

基础的选项卡用法，默认选中第一项。

<demo src="./demo/tabs/basic.vue"></demo>

## 带图标的页签

在页签中添加图标。

<demo src="./demo/tabs/icon.vue"></demo>

## 位置

选项卡的位置，支持 `top`、`bottom`、`left` 和 `right` 四种。

<demo src="./demo/tabs/position.vue"></demo>

## 不同类型

选项卡有六种类型：线性 `line`（默认）、卡片 `card`、间隔卡片 `card-gutter`、文本 `text`、圆角 `rounded` 和胶囊 `capsule`。

<demo src="./demo/tabs/type.vue"></demo>

## 懒加载

设置 `lazyLoad` 属性，只有在首次激活选项卡时才会渲染内容。

<demo src="./demo/tabs/lazy.vue"></demo>

## 附加内容

可以在选项卡右侧添加额外的操作按钮。

<demo src="./demo/tabs/extra.vue"></demo>

## 动态增减标签页

可以动态增加和删除标签页。

<demo src="./demo/tabs/editable.vue"></demo>

## 触发方式

默认是点击触发，也可以设置为悬停触发。

<demo src="./demo/tabs/trigger.vue"></demo>

## 滚动

当选项卡数量较多时，可以滚动查看所有选项卡。支持鼠标滚轮和触摸滑动。

<demo src="./demo/tabs/scroll.vue"></demo>

## 垂直方向滚动

在垂直布局模式下的滚动效果。

<demo src="./demo/tabs/vertical-scroll.vue"></demo>

## API

### Tabs Props

| 参数名                  | 描述                                                     | 类型                                                                    | 默认值          | 版本 |
|----------------------|--------------------------------------------------------|-----------------------------------------------------------------------|--------------|----|
| active-key (v-model) | 当前选中的标签的 key                                           | string \| number                                                      | -            | -  |
| default-active-key   | 默认选中的标签的key（非受控状态，为空时选中第一个标签页）                         | string \| number                                                      | -            | -  |
| position             | 选项卡的位置                                                 | `left` \| `right` \| `top` \| `bottom`                                | `top`        | -  |
| size                 | 选项卡的大小                                                 | `mini` \| `small` \| `medium` \| `large`                              | `medium`     | -  |
| type                 | 选项卡的类型                                                 | `line` \| `card` \| `card-gutter` \| `text` \| `rounded` \| `capsule` | `line`       | -  |
| direction            | 选项卡的方向                                                 | `horizontal` \| `vertical`                                            | `horizontal` | -  |
| editable             | 是否开启可编辑模式                                              | boolean                                                               | false        | -  |
| show-add-button      | 是否显示增加按钮（仅在可编辑模式可用）                                    | boolean                                                               | false        | -  |
| destroy-on-hide      | 是否在不显示标签时销毁内容                                          | boolean                                                               | false        | -  |
| lazy-load            | 是否在首次展示标签时挂载内容                                         | boolean                                                               | false        | -  |
| justify              | 高度撑满容器，只在水平模式下生效                                       | boolean                                                               | false        | -  |
| animation            | 是否开启选项内容过渡动画                                           | boolean                                                               | false        | -  |
| header-padding       | 选项卡头部是否存在水平边距。仅对 type 等于 line、text 类型的选项卡生效            | boolean                                                               | true         | -  |
| auto-switch          | 创建标签后是否切换到新标签（最后一个）                                    | boolean                                                               | false        | -  |
| hide-content         | 是否隐藏内容                                                 | boolean                                                               | false        | -  |
| trigger              | 触发方式                                                   | `hover` \| `click`                                                    | `click`      | -  |
| scroll-position      | 被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整 | `start` \| `end` \| `center` \| `auto` \| number                      | `auto`       | -  |
| wheel-scroll         | 是否启用鼠标滚轮滚动功能，启用后可以使用鼠标滚轮滚动标签栏                          | boolean                                                               | true         | -  |

### Tabs Events

| 事件名       | 描述          | 参数                    |
|-----------|-------------|-----------------------|
| change    | 当前标签值改变时触发  | key: string \| number |
| tab-click | 用户点击标签时触发   | key: string \| number |
| add       | 用户点击增加按钮时触发 | -                     |
| delete    | 用户点击删除按钮时触发 | key: string \| number |

### Tabs Slots

| 插槽名   | 描述      | 参数 |
|-------|---------|----|
| extra | 选项卡额外内容 | -  |

### TabPane Props

| 参数名             | 描述                    | 类型      | 默认值   | 版本 |
|-----------------|-----------------------|---------|-------|----|
| title           | 选项卡的标题                | string  | -     | -  |
| disabled        | 是否禁用                  | boolean | false | -  |
| closable        | 是否允许关闭此选项卡（仅在可编辑模式生效） | boolean | true  | -  |
| destroy-on-hide | 是否在不显示标签时销毁内容         | boolean | false | -  |

### TabPane Slots

| 插槽名   | 描述    | 参数 |
|-------|-------|----|
| title | 选项卡标题 | -  | 