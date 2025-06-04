# 加载 Loading

用于页面和区块的加载状态展示，支持多种调用方式和丰富的自定义能力。

## 基础用法
<demo src="./demo/loading/basic.vue"></demo>

## 图标加载
<demo src="./demo/loading/icon.vue"></demo>

## 文字加载
<demo src="./demo/loading/text.vue"></demo>

## 图标和文字组合
<demo src="./demo/loading/combo.vue"></demo>

## 不同尺寸
<demo src="./demo/loading/size.vue"></demo>

## 包裹加载
<demo src="./demo/loading/wrap.vue"></demo>

## 延时加载
<demo src="./demo/loading/delay.vue"></demo>

## 全屏加载
<demo src="./demo/loading/fullscreen.vue"></demo>

## 挂载到指定元素
<demo src="./demo/loading/attach.vue"></demo>

## 函数方式调用
<demo src="./demo/loading/plugin.vue"></demo>

## 指令方式调用
<demo src="./demo/loading/directive.vue"></demo>

## 自定义指示器
<demo src="./demo/loading/custom-indicator.vue"></demo>

## 继承父色
<demo src="./demo/loading/inherit-color.vue"></demo>

## zIndex用法
<demo src="./demo/loading/zindex.vue"></demo>

## API

### Loading Props
| 名称 | 类型 | 默认值 | 说明 | 必传 |
| ---- | ---- | ------ | ---- | ---- |
| attach | String / Function | '' | 挂载元素，默认挂载到组件本身所在的位置。 | N |
| content | String / Slot / Function | - | 子元素。 | N |
| default | String / Slot / Function | - | 子元素，同 content。 | N |
| delay | Number | 0 | 延迟显示加载效果的时间，单位：毫秒 | N |
| fullscreen | Boolean | false | 是否显示为全屏加载 | N |
| indicator | Boolean / Slot / Function | true | 加载指示符，true显示默认指示符，false不显示，可自定义 | N |
| inheritColor | Boolean | false | 是否继承父元素颜色 | N |
| loading | Boolean | true | 是否处于加载状态 | N |
| preventScrollThrough | Boolean | true | 防止滚动穿透，全屏加载有效 | N |
| showOverlay | Boolean | true | 是否需要遮罩层 | N |
| size | String | medium | 尺寸，small/medium/large/自定义 | N |
| text | String / Slot / Function | - | 加载提示文案 | N |
| zIndex | Number | 3500 | 层级 | N |

### LoadingPlugin
- 支持 this.$loading。参数为顺序参数（boolean | TdLoadingProps）。
- 返回值：LoadingInstance（{ hide: () => void }）

### 指令 v-loading
- 支持所有props，响应式控制。

## 注意事项
- 组件、插件、指令三种方式均可独立使用。
- demo区块请使用 demo-content、demo-content-row 类。 