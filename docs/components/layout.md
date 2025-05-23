# Layout 布局

用于页面整体布局结构，支持顶部、底部、侧边栏等常见布局场景。

## 基本用法

<demo src="./demo/layout/base.vue"></demo>

## 含侧边栏布局

<demo src="./demo/layout/with-sider.vue"></demo>

## 多侧边栏布局

<demo src="./demo/layout/multi-sider.vue"></demo>

## API

### Layout Props
| 参数      | 说明                | 类型    | 默认值 |
|---------|-------------------|-------|------|
| has-sider | 是否有 Sider，用于 SSR | boolean | false |

### LayoutHeader/Content/Footer Slots
| 插槽名   | 说明   |
|--------|------|
| default | 内容   |

### LayoutSider Props
| 参数            | 说明           | 类型     | 默认值 |
|----------------|--------------|--------|------|
| theme          | 主题颜色        | 'dark' \| 'light' | 'light' |
| collapsed      | 当前收起状态      | boolean | -    |
| default-collapsed | 默认收起状态   | boolean | false |
| collapsible    | 是否可收起        | boolean | false |
| width          | 宽度           | number  | 200  |
| collapsed-width| 收缩宽度        | number  | 48   |
| reverse-arrow  | 翻转折叠箭头方向   | boolean | false |
| breakpoint     | 响应式断点        | 'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs' | - |
| resize-directions | 支持拖拽方向   | Array<'left' \| 'right' \| 'top' \| 'bottom'> | - |
| hide-trigger   | 隐藏底部折叠触发器 | boolean | false |

### LayoutSider Events
| 事件名    | 说明           | 参数                                 |
|---------|--------------|------------------------------------|
| collapse| 展开/收起事件      | (collapsed: boolean, type: 'clickTrigger'\|'responsive') |
| breakpoint | 响应式断点事件 | (collapsed: boolean)               |

### LayoutSider Slots
| 插槽名   | 说明           | 参数         |
|--------|--------------|------------|
| default| 侧边栏内容        | -          |
| trigger| 自定义折叠触发器    | { collapsed: boolean } |

</rewritten_file> 