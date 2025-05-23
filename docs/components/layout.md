# Layout 布局

用于页面整体布局结构，支持顶部、底部、侧边栏等常见布局场景。Layout组件提供了灵活的布局方式，可以轻松实现各种常见的页面结构。

## 基本用法

最基本的页面布局，包含页头、内容区域和页脚。

<demo src="./demo/layout/base.vue"></demo>

## 含侧边栏布局

侧边栏可以放置在内容区域的左侧或右侧。

<demo src="./demo/layout/with-sider.vue"></demo>

## 多侧边栏布局

布局可以包含多个侧边栏，适用于复杂的导航结构。

<demo src="./demo/layout/multi-sider.vue"></demo>

## 可折叠侧边栏

侧边栏可以折叠/展开，节省空间并提供更好的用户体验。

<demo src="./demo/layout/collapsible-sider.vue"></demo>

## 自定义触发器

可以自定义侧边栏的折叠/展开触发器，实现个性化的交互效果。

<demo src="./demo/layout/custom-trigger.vue"></demo>

## 嵌套布局

Layout组件可以嵌套使用，实现复杂的布局结构。

<demo src="./demo/layout/nested-layout.vue"></demo>

## 响应式布局

根据屏幕尺寸自动调整布局，在不同设备上提供最佳的用户体验。

<demo src="./demo/layout/responsive-layout.vue"></demo>

## API

### Layout Props
| 参数        | 说明                           | 类型      | 默认值   |
|-----------|------------------------------|---------|-------|
| has-sider | 是否有侧边栏，设置为true时布局方向为水平，否则为垂直 | boolean | false |

### LayoutHeader/Content/Footer Slots
| 插槽名     | 说明   |
|---------|------|
| default | 内容区域 |

### LayoutSider Props
| 参数                | 说明        | 类型                                            | 默认值     |
|-------------------|-----------|-----------------------------------------------|---------|
| theme             | 主题颜色      | `dark` \| `light`                             | `light` |
| collapsed         | 当前收起状态    | boolean                                       | -       |
| default-collapsed | 默认收起状态    | boolean                                       | false   |
| collapsible       | 是否可收起     | boolean                                       | false   |
| width             | 宽度        | number                                        | 200     |
| collapsed-width   | 收缩宽度      | number                                        | 48      |
| reverse-arrow     | 翻转折叠箭头方向  | boolean                                       | false   |
| breakpoint        | 响应式断点     | `xxl` \| `xl` \| `lg` \| `md` \| `sm` \| `xs` | -       |
| resize-directions | 支持拖拽方向    | Array<`left` \| `right` \| `top` \| `bottom`> | -       |
| hide-trigger      | 隐藏底部折叠触发器 | boolean                                       | false   |

### LayoutSider Events
| 事件名        | 说明      | 参数                                                       |
|------------|---------|----------------------------------------------------------|
| collapse   | 展开/收起事件 | (collapsed: boolean, type: `clickTrigger`\|`responsive`) |
| breakpoint | 响应式断点事件 | (collapsed: boolean)                                     |

### LayoutSider Slots
| 插槽名     | 说明       | 参数                     |
|---------|----------|------------------------|
| default | 侧边栏内容    | -                      |
| trigger | 自定义折叠触发器 | { collapsed: boolean } |

## 设计指南

### 布局原则

- 页面的布局应该简洁明了，符合用户的浏览习惯
- 重要的内容和操作应该放在容易被用户发现的位置
- 相关的功能和信息应该放在一起，保持逻辑上的一致性

### 常见布局模式

1. **上-中-下布局**：适合大多数网站和应用，顶部放置导航，底部放置辅助信息
2. **左侧导航布局**：适合后台管理系统，左侧放置导航菜单，右侧显示内容
3. **顶部导航+左侧子导航**：适合层级较多的导航结构，顶部放置主导航，左侧放置子导航
4. **综合布局**：根据具体需求组合使用，实现复杂的页面结构 